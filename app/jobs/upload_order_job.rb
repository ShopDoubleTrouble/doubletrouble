class UploadOrderJob < ActiveJob::Base
	queue_as :default

	# Execute the job
	def perform(order_id=nil)

		# Short-Circuit
		return if order_id.nil?

		order = Spree::Order
			.includes(:user, :products, :line_items, :payments, :variants)
			.find(order_id)
		service = CloudAccounting::Service.new

		# Create the user if it is necesary
		if order.user.remote_id.nil?
			result = service.post_contact(
					order.bill_address.full_name,
					order.user.email,
					order.bill_address.phone
				)
			remote_id = result.dig("contact", "contact_id")

			# Update the Zoho Id
			order.user.update_column(:remote_id, remote_id)
			order.user.reload
		end

		# Build and post invoice
		factory = CloudAccounting::InvoiceFactory.new(order.user.remote_id, "")
		factory_structure = factory.build
		order.line_items.each do |line_item|
			factory_structure[:line_items] << {
					name:line_item.name,
					description:line_item.name,
					rate: line_item.price.to_f,
					quantity:line_item.quantity.to_f,
					tax_id:Rails.application.secrets.zoho_tax_id
				}
		end
		factory_structure[:shipping_charge] = order.ship_total.to_f
		raw_invoice = service.post_invoice(factory_structure)

		# Get the remote ID and save it
		order_remote_id = raw_invoice.dig("invoice", "invoice_id")
		order.update_column :remote_id, order_remote_id

		# Build and post payments
		order.payments.each do |payment|
			raw_payment = service.post_customerpayment(
					order.user.remote_id,
					order_remote_id,
					payment.amount.to_f,
					payment.number,
					' ',
					payment.payment_method.name
				)

			# Get the remote_id and update it locally
			payment_zoho_id = raw_payment.dig("payment", "payment_id")
			payment.update_column :remote_id, payment_zoho_id
		end

		# Successful Job
		return true
	end
end

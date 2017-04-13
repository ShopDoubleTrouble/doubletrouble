module Dispatchable extend ActiveSupport::Concern
	def build_dispatch_bill
		invoice_number = self&.number.to_s
		date = (self.completed_at || Date.today).strftime("%y%m%d")
		client_id = self&.user&.id&.to_s
		client_mail = self&.user&.login
		client_address = [
				self&.shipping_address&.country&.name,
				self&.shipping_address&.state&.name,
				self&.shipping_address&.city + ",",
				self&.shipping_address&.address1,
				self&.shipping_address&.address2
			].join(" ")
		phone = self&.shipping_address&.phone.to_s

		packaging = " "
		lot = " "
		expiration = " "

		# One Line for each product
		product_lines = self.line_items.map do |li|
			product_id = li&.product.id
			product_amount = li.quantity
			unit_price = li.price*100
			total_price = li.amount*100
			array = [
				("%010.10s" % invoice_number),
				("%06.6s" % date),
				("%08.8s" % client_id),
				("%015.15s" % client_mail),
				("%0120.120s" % client_address),
				("%012.12s" % phone),
				("%015.15s" % product_id),
				("%09.9s" % product_amount),
				("%06i" % 0),
				("%02.2s" % packaging),
				("%010.10s" % lot),
				("%06.6s" % expiration),
				("%011i" % unit_price),
				("%015i" % 0),
				("%15i" % total_price),
				("%04i" % 0)
			]
			array.join("")
		end

		return product_lines.join("\n")
	end
end

Spree::Order.class_eval do

	include Dispatchable

	# Override the finalize! method with a new version, adding an extra step
	alias_method :old_finalize, :finalize!
	def finalize!
		old_finalize

		# Deactivate callbacks everywhere except in production
		if Rails.env == "production"
			push_to_cloud_accounting
			push_to_warehouse_dispatch
		end
	end

	# Update the remote version of this model
	def push_to_cloud_accounting
		UploadOrderJob.perform_later self.id
		return true
	end

	def push_to_warehouse_dispatch
		WarehouseBillMailer.bill_email(self).deliver_later
		return true
	end

end

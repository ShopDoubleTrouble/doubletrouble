Spree::Product.class_eval do

	# Ordering of the items in Products#Index
	def self.spree_base_scopes
		order({:created_at => :desc}).includes(:translations)
	end
end

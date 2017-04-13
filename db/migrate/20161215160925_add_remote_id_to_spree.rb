class AddRemoteIdToSpree < ActiveRecord::Migration
	def change

		add_column :spree_orders, :remote_id, :string, null:true
		add_column :spree_payments, :remote_id, :string, null:true
		add_column :spree_users, :remote_id, :string, null:true

	end
end

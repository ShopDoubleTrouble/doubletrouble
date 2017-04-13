class RemoveOccupationFromUser < ActiveRecord::Migration
  def change
    remove_column :spree_users, :occupation
  end
end

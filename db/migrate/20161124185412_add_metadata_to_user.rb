class AddMetadataToUser < ActiveRecord::Migration
  def change
    if table_exists? :spree_users

      change_table :spree_users do |t|
        t.datetime :birthdate, null:true
        t.string :occupation, null:false, default:''
      end

    end
  end
end

class AddContactToOrders < ActiveRecord::Migration
  def change
  	add_column :orders, :contact, :string, null: false, default: ''
  end
end

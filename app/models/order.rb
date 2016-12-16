class Order < ActiveRecord::Base
  has_many :invoice_items
  
  has_one :address
  has_one :shipping

  after_create :send_notification

  def send_notification
    NewOrder.created_order(self).deliver_now
  end
end

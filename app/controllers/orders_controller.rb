class OrdersController < ApplicationController
  respond_to :json, :html

  skip_before_action :verify_authenticity_token

  after_create :send_notification

  inherit_resources

  def show
    show! do |format|
      format.html { render }
      format.json do
        render json: @order
      end
    end
  end

protected

  def send_notification
    NewOrderMailer.created_order(@order).deliver_now
  end

  def order_params
    params.require(:order).permit(:id, :vizitka, :promo, :landing, :corp, 
      :store, :audit, :inner, :seocomplex, :facebook, :vk, :smmcomplex, 
      :instagram, :promocode, :name, :message)
  end
end

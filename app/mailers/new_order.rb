class NewOrder < ApplicationMailer
  default from: 'notifications@koyotostudio.com <koyotostudio.com>'
  layout false

  def created_order(order)
    @order = order
    mail(to: "marginbit@gmail.com", 
      cc: "germaninthetown@gmail.com",
      subject: 'Новая заявка на сайте'
    )
  end
end

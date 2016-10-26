class Order < ActiveRecord::Base
	after_create :send_order_create_email

	serialize :notification_params, Hash
	#build the paypal url receipt
	def paypal_url(return_path, item_name)
        values = {
            business: "eamonmurphy928@gmail.com",
            cmd: "_xclick",
            upload: 1,
            return: "#{Rails.application.secrets.app_host}/order/complete",
            invoice: id,
            amount: 15,
            shipping: 2.5,
            item_name: item_name,
            item_number: 1,
            quantity: '1',
            notify_url: "#{Rails.application.secrets.app_host}/hook"
        }
        "#{Rails.application.secrets.paypal_host}/cgi-bin/webscr?" + values.to_query
    end
 
end

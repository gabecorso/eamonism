class WelcomeController < ApplicationController

	protect_from_forgery except: [:hook]

	def index
		@birdTitle = "https://s3.amazonaws.com/eamonism/mdBirdThumb.jpg"
	end

	def create
	end

	def new
	end

	def complete
		@order = Order.new

		shipping = 4.39

		if params[:item_name]
			item_name = params[:item_name]
		end
		if params[:price_input]
			price = params[:price_input]
			if price == "4" || price == "6"
				shipping = 0.98
			end
			if params[:discount_code] == "MAILER1!"
                price = price*=(80/100)
            end
		end

		redirect_to @order.paypal_url(root_path, item_name, shipping, price)
	end
end
class WelcomeController < ApplicationController

	protect_from_forgery except: [:hook]

	def index
	end

	def create
	end

	def new
	end

	def complete
		@order = Order.new

		shipping = 2.5

		if params[:item_name]
			item_name = params[:item_name]
		end
		if params[:discount_code] == "Dart1"
			shipping = 0
		end
		if params[:price_input]
			price = params[:price_input]
			if price == "8"
				shipping = 0.98
			end	
		end

		redirect_to @order.paypal_url(root_path, item_name, shipping, price)
	end
end
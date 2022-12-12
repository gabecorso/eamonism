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
                price = (params[:price_input].to_f * (0.80)).round
            end
            if params[:discount_code] == "LOOSELIPSFREESHIPS"
                shipping = 0.00
            end
            if params[:discount_code] == "GATES20"
                if params[:item_name] == 'At the Gates of Paradise II (2nd Edition) - 11x15 inches'
                        price = (params[:price_input].to_f * (0.80)).round
                end
            end
            if params[:discount_code] == "HOURGLASS20"
                if params[:item_name] == 'The Font of Eschaton (3rd Ed.) - 11x15 inches'
                        price = (params[:price_input].to_f * (0.80)).round
                end
            end
		end

		redirect_to @order.paypal_url(root_path, item_name, shipping, price)
	end
end
class WelcomeController < ApplicationController

	protect_from_forgery except: [:hook]

	def index
	end

	def create
		@order = Order.new

		@order.name = params[:name]
		@order.email = params[:email]
		@order.number = params[:phone]

		if @order.save
			redirect_to welcome_complete_path
		end
	end

	def new
	end
	def complete
		@order = Order.new
		redirect_to @order.paypal_url(root_path)
	end
end
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
		item_name = params[:item_name]
		redirect_to @order.paypal_url(root_path, item_name)
	end
end
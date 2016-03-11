class OrderController < ApplicationController

	skip_before_action :verify_authenticity_token

	protect_from_forgery except: [:hook]

	def hook
    	params.permit! # Permit all Paypal input params
    	status = params[:payment_status]
    	if status == "Completed"
      	@order = Order.find params[:invoice]
      	@order.update_attributes notification_params: params, status: status, transaction_id: params[:txn_id], purchased_at: Time.now
    	end
    	render nothing: true
  	end

  	def index
		@order = Order.new
	end

	def create
		params.permit!
		@order = Order.new

		#build the order object from POST params
		@order.contents = ""
		@order.total = 0
		@order.name = params[:name]
		@order.email = params[:email]
		@order.number = params[:number]
		

		#art params


		if @order.save
			redirect_to @order.paypal_url(order_path(@order))
		end
	end

	def new
	end

	def complete
		params.permit!
		@all = params
	end

end
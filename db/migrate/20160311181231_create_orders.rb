class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
    	t.string :name
      	t.string :number
      	t.string :email
      	t.text :contents
      	t.decimal :total
      	t.datetime :purchased_at
      	t.string :transaction_id
    end
  end
end

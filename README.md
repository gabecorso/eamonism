#Eamonism

This application serves as a portfolio and webstore for the art of Eamon Murphy.

Built on Rails, utilizing PayPal/OAuth integrations for accepting payments.

##Getting Started

`sudo bundle`

* Ruby version
>rvm use ruby-2.2.4

* System dependencies
>bundle install
>
>relies on paypal checkout integrations https://developer.paypal.com/docs/api/

* Configuration
>config.serve_static_assets = true

* Database creation
>open an instance of postgresql

* Database initialization
> rake db:create
> 
> rake db:migrate
>
> heroku run rake:db migrate

* How to run the test suite
* >rails s

* Services (job queues, cache servers, search engines, etc.)

* Production Deployment instructions
>`rake assets:precompile`
>
>add and commit your changes, then `git push origin 'branch'`
>
>`git checkout master`
>
>`git merge 'branch'`
>
>`git push heroku master` (to update production instance)

* ...



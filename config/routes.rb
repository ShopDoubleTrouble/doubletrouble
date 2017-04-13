
# Mount the Spree Engine, which includes all the routes
Rails.application.routes.draw do
	mount Spree::Core::Engine, at: '/'
end

# Add more routes to the Spree Engine
Spree::Core::Engine.routes.draw do

	# high_voltage
	get '/pages/*id' => 'pages#show', as: :page, format: :false
end

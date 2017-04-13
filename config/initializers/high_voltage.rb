HighVoltage.configure do |config|

	# Adds the default Spree Layout as the main Layout for high_voltage
	config.layout = 'spree/layouts/spree_application'

	# Manually add pages
	config.routes = false

	# Add support for the Spree Routes
	config.parent_engine = Spree::Frontend::Engine

end

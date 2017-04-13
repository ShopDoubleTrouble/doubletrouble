if ENV['REDIS_URL']
	Doubletrouble::Application.config.session_store :redis_store,
		servers: ENV['REDIS_URL']
end

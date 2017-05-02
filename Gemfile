source 'https://rubygems.org'

ruby  '2.4.0'

gem 'dotenv-rails', :groups => [:development, :test]

gem 'rails',
  '~> 4.2'
gem 'pg',
  '~> 0.15'
gem 'sass-rails',
  '~> 5.0'
gem 'uglifier',
  '~> 3.0'
gem 'coffee-rails',
  '~> 4.2'
gem 'therubyracer',
  platforms: :ruby
gem 'jquery-rails'
gem 'jquery-ui-rails'
gem 'jbuilder',
  '~> 2.6'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc',
  '~> 0.4.0',
  group: :doc
gem 'bcrypt',
  '~> 3.1'
gem 'high_voltage',
  '~> 3.0.0'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'factory_girl_rails'
  gem 'forgery'
  gem 'letter_opener'
end

group :development do
  gem 'web-console',
    '~> 3.3'
  gem 'spring'
  gem 'mailcatcher'
  gem 'quiet_assets'
  gem 'rails_real_favicon'
end

gem 'devise'
gem 'devise-i18n'
gem 'spree',
  '~> 3.1'
gem 'spree_auth_devise',
  '~> 3.1'
gem 'spree_gateway',
  '~> 3.1'
gem 'spree_i18n',
  git: 'https://github.com/spree-contrib/spree_i18n.git',
  branch: '3-1-stable'
gem 'spree_globalize',
  git: 'https://github.com/spree-contrib/spree_globalize.git',
  branch: 'master'
gem 'spree-point-of-sale',
  git: 'https://github.com/ibarria0/spree-point-of-sale.git',
  branch: '3-1-stable'
gem 'spree_html_invoice' ,
  git: 'https://github.com/vinsol/spree-html-invoice.git',
  branch: '3-1-stable'
gem 'spree_mail_settings',
  git: 'https://github.com/spree-contrib/spree_mail_settings.git',
  branch: '3-1-stable'
gem 'rails_12factor',
  group: :production
gem 'figaro'
gem 'haml'
gem 'puma'
gem 'newrelic_rpm'
gem 'redis-rails'
gem 'delayed_job_active_record'
gem 'sendgrid'

# Frontend Dependencies
gem 'font-awesome-sass'
gem 'bootstrap-sass'
gem 'prettyphoto-rails',
  '~> 0.2.1'

# Paperclip v4 (used for S3 integration) requires both AWS-SDK v1 and v2.
# When the final version is released plese remove the v1.
# Source: https://github.com/thoughtbot/paperclip/issues/1764
gem 'paperclip'
gem 'aws-sdk-v1' # DEPRECATED
gem 'aws-sdk', '~> 2'

# Private Gems
source 'https://gem.fury.io/rzubieta/' do
  gem 'cloud_accounting'
end

ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

class ActiveSupport::TestCase
  include FactoryGirl::Syntax::Methods

  # Global Zone
  Spree::Zone.class_eval do
    def self.global
      find_by(name: 'GlobalZone') || FactoryGirl.create(:global_zone)
    end
  end

  FactoryGirl.define do
   sequence(:random_string){ Forgery(:basic).password }
  end

  # Add more helper methods to be used by all tests here...
end

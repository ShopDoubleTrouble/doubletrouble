# Copied from source:
# github.com/spree/spree/blob/master/core/lib/spree/testing_support/factories/country_factory.rb
FactoryGirl.define do
  factory :country, class: Spree::Country do
    sequence(:iso_name) { |n| "ISO_NAME_#{n}" }
    sequence(:name) { |n| "NAME_#{n}" }
    iso 'US'
    iso3 'USA'
    numcode 840
  end
end

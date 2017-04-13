# Copied from source:
# https://github.com/spree/spree/blob/master/core/lib/spree/testing_support/factories/state_factory.rb
FactoryGirl.define do
  factory :state, class: Spree::State do
    sequence(:name) { |n| "STATE_NAME_#{n}" }
    sequence(:abbr) { |n| "STATE_ABBR_#{n}" }
    country do |country|
      if usa = Spree::Country.find_by_numcode(840)
        country = usa
      else
        country.association(:country)
      end
    end
  end
end

# Copied from source:
# github.com/spree/spree/blob/master/core/lib/spree/testing_support/factories/tax_category_factory.rb
FactoryGirl.define do
  factory :tax_category, class: Spree::TaxCategory do
    name { "TaxCategory - #{rand(999999)}" }
    description { generate(:random_string) }
  end
end

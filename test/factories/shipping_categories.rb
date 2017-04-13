# Copied from source:
# https://github.com/spree/spree/blob/master/core/lib/spree/testing_support/factories/shipping_category_factory.rb
FactoryGirl.define do
  factory :shipping_category, class: Spree::ShippingCategory do
    sequence(:name) { |n| "ShippingCategory ##{n}" }
  end
end

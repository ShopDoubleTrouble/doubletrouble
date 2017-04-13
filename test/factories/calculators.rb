# Copied from:
# https://github.com/spree/spree/blob/7fb31d3c48ab6f414a3af8c5e929b67c46f5527a/core/lib/spree/testing_support/factories/calculator_factory.rb
FactoryGirl.define do
  factory :calculator, class: Spree::Calculator::FlatRate do
    after(:create) { |c| c.set_preference(:amount, 10.0) }
  end

  factory :no_amount_calculator, class: Spree::Calculator::FlatRate do
    after(:create) { |c| c.set_preference(:amount, 0) }
  end

  factory :default_tax_calculator, class: Spree::Calculator::DefaultTax do
  end

  factory :shipping_calculator, class: Spree::Calculator::Shipping::FlatRate do
    after(:create) { |c| c.set_preference(:amount, 10.0) }
  end

  factory :shipping_no_amount_calculator, class: Spree::Calculator::Shipping::FlatRate do
    after(:create) { |c| c.set_preference(:amount, 0) }
  end
end

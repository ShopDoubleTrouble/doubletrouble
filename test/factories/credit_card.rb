# Copied from:
# github.com/spree/spree/blob/7fb31d3c48ab6f414a3af8c5e929b67c46f5527a/core/lib/spree/testing_support/factories/credit_card_factory.rb
FactoryGirl.define do
  factory :credit_card, class: Spree::CreditCard do
    verification_value 123
    month 12
    year { 1.year.from_now.year }
    number '4111111111111111'
    name 'Spree Commerce'
    association(:payment_method, factory: :credit_card_payment_method)
  end
end

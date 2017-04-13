# Copied From Source
# https://github.com/spree/spree/blob/7fb31d3c48ab6f414a3af8c5e929b67c46f5527a/core/lib/spree/testing_support/factories/payment_method_factory.rb

FactoryGirl.define do
  factory :check_payment_method, class: Spree::PaymentMethod::Check do
    name 'Check'
  end

  factory :credit_card_payment_method, class: Spree::Gateway::Bogus do
    name 'Credit Card'
  end

  # authorize.net was moved to spree_gateway.
  # Leaving this factory in place with bogus in case anyone is using it.
  factory :simple_credit_card_payment_method, class: Spree::Gateway::BogusSimple do
    name 'Credit Card'
  end

  factory :store_credit_payment_method, class: Spree::PaymentMethod::StoreCredit do
    type          "Spree::PaymentMethod::StoreCredit"
    name          "Store Credit"
    description   "Store Credit"
    active        true
    auto_capture  true
  end
end

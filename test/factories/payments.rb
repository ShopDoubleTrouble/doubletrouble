# Copied From Source
# github.com/spree/spree/blob/7fb31d3c48ab6f414a3af8c5e929b67c46f5527a/core/lib/spree/testing_support/factories/payment_factory.rb
FactoryGirl.define do
  factory :payment, class: Spree::Payment do
    amount 45.75
    association(:payment_method, factory: :credit_card_payment_method)
    association(:source, factory: :credit_card)
    order
    state 'checkout'
    response_code '12345'

    factory :payment_with_refund do
      state 'completed'
      after :create do |payment|
        create(:refund, amount: 5, payment: payment)
      end
    end
  end

  factory :check_payment, class: Spree::Payment do
    amount 45.75
    association(:payment_method, factory: :check_payment_method)
    order
  end

  factory :store_credit_payment, class: Spree::Payment, parent: :payment do
    association(:payment_method, factory: :store_credit_payment_method)
    association(:source, factory: :store_credit)
  end
end

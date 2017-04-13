# Copied from Source:
# github.com/spree/spree/blob/7fb31d3c48ab6f414a3af8c5e929b67c46f5527a/core/lib/spree/testing_support/factories/shipment_factory.rb
FactoryGirl.define do
  factory :shipment, class: Spree::Shipment do
    tracking 'U10000'
    cost 100.00
    state 'pending'
    order
    stock_location

    after(:create) do |shipment, evalulator|
      shipment.add_shipping_method(create(:shipping_method), true)

      shipment.order.line_items.each do |line_item|
        line_item.quantity.times do
          shipment.inventory_units.create(
            order_id: shipment.order_id,
            variant_id: line_item.variant_id,
            line_item_id: line_item.id
          )
        end
      end
    end
  end
end

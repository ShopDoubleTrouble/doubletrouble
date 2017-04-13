# Copied from:
# github.com/spree/spree/blob/7fb31d3c48ab6f414a3af8c5e929b67c46f5527a/core/lib/spree/testing_support/factories/zone_member_factory.rb
FactoryGirl.define do
  factory :zone_member, class: Spree::ZoneMember do
    zone { |member| member.association(:zone) }
    zoneable { |member| member.association(:zoneable) }
  end
end

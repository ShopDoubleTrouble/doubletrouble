FactoryGirl.define do
  factory :user, class:Spree::User do
    email                   { Forgery(:internet).email_address }
    password                { Forgery(:basic).password }
    password_confirmation   { "#{password}" }
  end
end

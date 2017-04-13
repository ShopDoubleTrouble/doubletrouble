require 'test_helper'

class WarehouseBillMailerTest < ActionMailer::TestCase
	test 'bill_email' do
		order = create :order_ready_to_ship
		email = WarehouseBillMailer.bill_email(order)

		assert_emails 1 do
			email.deliver_now
		end

		assert_not_nil email.attachments.first
	end
end

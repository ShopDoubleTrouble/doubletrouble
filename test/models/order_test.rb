require 'test_helper'

class OrderTest < ActiveSupport::TestCase

	test 'Dispatch Bill should be outputted' do
		order = create :order_ready_to_ship
		real_text = order.build_dispatch_bill

		# Assert each line individually. They must always be 264 characters
		real_text.split("\n").each do |line|
			assert_equal real_text.size, 264
		end
	end

end

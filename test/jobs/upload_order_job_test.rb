require 'test_helper'

class UploadOrderJobTest < ActiveJob::TestCase

	test "it should return when the id is null" do
		result = UploadOrderJob.perform_now(nil)
		assert result.nil?
	end

	test 'it should not execute when an order is just created' do
		assert_no_enqueued_jobs do
			create :order
		end
	end

	test 'it should execute when the order is declared complete' do
		assert_enqueued_with(job: UploadOrderJob) do
			o = create :order
			o.finalize!
		end
	end

	test 'it should execute correctly' do
		o = create :order_ready_to_ship

		assert_performed_jobs 1 do
			UploadOrderJob.perform_later(o.id)
		end

		o.reload
		assert_not_nil o.remote_id
	end

end

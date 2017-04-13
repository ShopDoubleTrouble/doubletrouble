require_relative './gateway'

module Spree
  class Gateway::Neogateway < Gateway

    def provider_class
      self.class
    end

    def method_type
      'neogateway'
    end

    def auto_capture?
      true
    end

    def purchase(amount, transaction_details, options = {})

      # Set the gateway as test mode if we are testing
      # This is turned off in the settings page for the payment method.
      if self.preferred_test_mode
        ActiveMerchant::Billing::Base.mode = :test
      else
        ActiveMerchant::Billing::Base.mode = :production
      end

      @gateway = ActiveMerchant::Billing::NeoGatewayGateway.new({
        merchant:     ENV["NEOGATEWAY_MERCHANT_ID"],
        terminal_id:  ENV["NEOGATEWAY_TERMINAL_ID"],
        secret_key:   ENV["NEOGATEWAY_ACCOUNT_ID"]
      })

      return @gateway.purchase amount, transaction_details, options
    end

  end
end

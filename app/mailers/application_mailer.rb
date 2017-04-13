class ApplicationMailer < ActionMailer::Base

	include SendGrid
	
  default from: "sdtadmin@shopdoubletrouble.com"
  layout 'mailer'
end

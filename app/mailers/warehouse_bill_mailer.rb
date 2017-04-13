class WarehouseBillMailer < ApplicationMailer

	def bill_email(order)
		text = order.build_dispatch_bill
		attachments['bill.txt'] = { :data => text }

		# Send CC to all these people
		extra_recipients = %w(
			jacky_jaimovich@hotmail.com
			Victor.Gonzalez@grupo3pl.com
			Jorge.Mendoza@grupo3pl.com
			Indyra.Polo@grupo3pl.com
		)

		mail(
			to:'sdtadmin@shopdoubletrouble.com',
			cc:extra_recipients,
			subject:'Enlace Despacho' )

	end
end

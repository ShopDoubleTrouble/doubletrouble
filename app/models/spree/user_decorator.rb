Spree.user_class.class_eval do

	include Spree::UserMethods

	# Returns the age of the User, if the user has an age defined
	def age
		if self.birthdate
			# Inspiration: http://stackoverflow.com/a/2357790
			# Handles leap years correctly.
			now = Time.now.utc.to_date
			return now.year - self.birthdate.year -
				((now.month > self.birthdate.month ||
					(now.month == self.birthdate.month && now.day >= self.birthdate.day)
				) ? 0 : 1)
		else
			return nil
		end
	end

end

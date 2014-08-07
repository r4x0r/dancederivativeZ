class OnePageController < ApplicationController

	def index
              #initialise the new contact for contact page
		@contact = Contact.new
	end


end

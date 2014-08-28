class OnePageController < ApplicationController

	def index
    #initialise the new contact for contact page
		@contact = Contact.new
    @events = Events.all
	end


end

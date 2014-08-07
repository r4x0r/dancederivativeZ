class ContactsController < ApplicationController


  def create
    @contact = Contact.new(contact_params)
    @contact.request = request
    @contact.deliver
    # if @contact.deliver
    #   flash.now[:notice] = 'Thank you for your message. We will contact you soon!'
    # else
    #   flash.now[:error] = 'Cannot send message.'
    # render 
  end

private
  def contact_params
    params.require(:contact).permit(:name, :phone, :email, :message)
    #attributes under the contact hash
  end 

end
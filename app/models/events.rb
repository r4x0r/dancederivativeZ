class Events < ActiveRecord::Base

  validates :name, :date, presence: true

  def is_over?
    if self.date < Time.now
      true
    end
  end

end

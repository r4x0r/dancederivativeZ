class Events < ActiveRecord::Base

  validates :name, :date, presence: true

  scope :past, -> { where("date < ?", Time.now) }

  def is_over?
    if self.date < Time.now
      true
    end
  end

end

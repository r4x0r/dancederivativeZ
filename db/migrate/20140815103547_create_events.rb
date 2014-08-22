class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|

      t.string            :name
      t.string            :description
      t.string            :venue
      t.datetime          :date
      t.float            :cost

      t.timestamps
    end
  end
end

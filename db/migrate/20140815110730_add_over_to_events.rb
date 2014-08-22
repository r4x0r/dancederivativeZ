class AddOverToEvents < ActiveRecord::Migration
  def change
    add_column :events, :over, :boolean
  end
end

class AddLocationAssociationToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :location_id, :integer
  end
end

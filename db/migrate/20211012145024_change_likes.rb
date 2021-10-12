class ChangeLikes < ActiveRecord::Migration[6.1]
  def change
    remove_index :likes, :liker_id 
    add_index :likes, :liker_id
    add_index :likes, [:liker_id, :likeable_id], unique: true 
  end
end

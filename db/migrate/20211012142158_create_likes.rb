class CreateLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      t.integer :liker_id, null:false
      t.string :type, null:false
      t.integer :likeable_id, null:false
      t.timestamps
    end
    add_index :likes, :liker_id, unique: true
  end
end

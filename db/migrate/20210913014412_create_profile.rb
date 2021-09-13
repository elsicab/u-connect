class CreateProfile < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.integer :user_id, null:false
      t.string :pronouns
      t.text :headline, null:false
      t.string :country, null:false
      t.integer :postal_code
      t.string :location
      t.string :industry, null:false
      t.timestamps
    end
    add_index :profiles, :user_id, unique:true
  end
end

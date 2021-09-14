class CreateEducations < ActiveRecord::Migration[6.1]
  def change
    create_table :educations do |t|
      t.integer :user_id, null:false
      t.string :school, null:false
      t.string :degree
      t.string :field
      t.string :start
      t.string :end
      t.text :activities
      t.float :gpa
      t.timestamps
    end
    add_index :educations, :user_id
  end
end

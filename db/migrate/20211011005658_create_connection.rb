class CreateConnection < ActiveRecord::Migration[6.1]
  def change
    create_table :connections do |t|
      t.integer :connector_id, null:false
      t.integer :connected_id, null:false
      t.timestamps
    end
    add_index :connections, ["connector_id", "connected_id"], unique: true
  end
end

class ChangeLikesColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :likes, :type
    add_column :likes, :likeable_type, :string, null:false
  end
end

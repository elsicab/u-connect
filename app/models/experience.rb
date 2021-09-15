class Experience < ApplicationRecord
    validates :title, :company, :user_id, :start, :end, presence:true

    belongs_to :user, 
        foreign_key: :user_id, 
        class_name: :User 

end
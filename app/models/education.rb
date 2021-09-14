class Education < ApplicationRecord
    validates :school, :user_id, presence:true

    belongs_to :schooling, 
        foreign_key: :user_id, 
        class_name: :User 

end
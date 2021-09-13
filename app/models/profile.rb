class Profile < ApplicationRecord
    validates :user_id, :headline, :country, :industry, presence: true
    validates :user_id, uniqueness:true

    belongs_to :user, 
        foreign_key: :user_id, 
        class_name: :User

end
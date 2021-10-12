class Like < ApplicationRecord
    validates :liker_id, :likeable_id, :likeable_type, presence: true
    validates :liker_id, uniqueness: {scope: [:likeable_id]}

    belongs_to :liker, 
        foreign_key: :liker_id, 
        class_name: :User

    belongs_to :post,
        foreign_key: :likeable_id, 
        class_name: :Post

    # belongs_to :comment,
    #     foreign_key: :likeable_id, 
    #     class_name: :Comment
end
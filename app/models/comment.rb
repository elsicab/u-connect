class Comment < ApplicationRecord
    validates :body, :author_id, :post_id, presence: true

    belongs_to :post, 
        foreign_key: :post_id, 
        class_name: :Post

    belongs_to :user, 
        foreign_key: :author_id, 
        class_name: :User

    has_many :likes,
        foreign_key: :likeable_id, 
        class_name: :Like
end
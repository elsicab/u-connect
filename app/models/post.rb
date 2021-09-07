class Post < ApplicationRecord
    validates :body, :author_id, presence: true

    has_one_attached :photo

    belongs_to :author, 
        foreign_key: :author_id, 
        class_name: :User

end
class Connection < ApplicationRecord
    validates :connected_id, :connector_id, presence: true
    validates :connected_id, uniqueness: {scope: [:connector_id]}

    belongs_to :connected, 
        foreign_key: :connected_id, 
        class_name: :User

    has_many :connector,
        foreign_key: :connector_id, 
        class_name: :User
end
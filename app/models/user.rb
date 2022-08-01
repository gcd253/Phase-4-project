class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    

    has_many :conversations
    has_many :messages, through: :conversations
end

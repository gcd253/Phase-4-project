class Message < ApplicationRecord
    validates :chat_message, presence: true

    has_many :conversations
    has_many :users, through: :conversations
end

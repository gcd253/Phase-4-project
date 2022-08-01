class Message < ApplicationRecord
    validates :chat_message, presence: true

    belongs_to :conversation
    has_many :users, through: :conversation
end

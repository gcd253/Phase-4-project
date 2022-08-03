class Message < ApplicationRecord
    validates :message, presence: true
    validates :user_id, presence: true
    validates :conversation_id, presence: true

    belongs_to :conversation
    belongs_to :user
end

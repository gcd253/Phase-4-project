class MessageSerializer < ActiveModel::Serializer
  attributes :id, :message, :created_at, :user_id, :conversation_id

  belongs_to :user
  belongs_to :conversation
end

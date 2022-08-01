class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :message_id

  belongs_to :message
end

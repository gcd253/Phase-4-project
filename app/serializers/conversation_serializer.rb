class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :created_at

  has_many :messages
  has_many :users
end

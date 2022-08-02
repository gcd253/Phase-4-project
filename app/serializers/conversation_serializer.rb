class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :created_at

  has_many :messages
  has_many :members
  has_many :users, through: :members
end

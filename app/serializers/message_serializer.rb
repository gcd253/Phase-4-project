class MessageSerializer < ActiveModel::Serializer
  attributes :id, :message, :created_at

  belongs_to :user
  belongs_to :conversation
end

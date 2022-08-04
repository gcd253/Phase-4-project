class ConversationSerializer < ActiveModel::Serializer
  attributes :name, :id, :created_at, :updated_at



  has_many :messages
  has_many :members
  has_many :users, through: :members
end

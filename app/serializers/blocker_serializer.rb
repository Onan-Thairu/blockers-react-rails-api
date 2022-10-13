class BlockerSerializer < ActiveModel::Serializer
  attributes :id, :description, :solution, :user_id
  belongs_to :user
end

class BlockerSerializer < ActiveModel::Serializer
  attributes :id, :description, :solution, :tag, :user_id
  belongs_to :user
end

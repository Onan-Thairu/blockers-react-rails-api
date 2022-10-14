class BlockerSerializer < ActiveModel::Serializer
  attributes :id, :description, :solution, :tag, :user_id, :updated_at
  belongs_to :user
end

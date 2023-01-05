class PostSerializer < ActiveModel::Serializer
  attributes :id, :body , :user, :comments
  has_one :user
end

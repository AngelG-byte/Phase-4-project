class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user, :text
  has_one :post
end

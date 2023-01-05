class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :user, :post
  has_one :post
  has_one :user

end

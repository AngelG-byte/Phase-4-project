class PostSerializer < ActiveModel::Serializer
  attributes :id, :body , :user
  has_one :user
  has_many :comments , serializer: CommentWithDataSerializer
end

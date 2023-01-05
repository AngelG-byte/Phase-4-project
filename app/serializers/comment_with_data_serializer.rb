class CommentWithDataSerializer < ActiveModel::Serializer
  attributes :id, :text, :username, :image

  def username
    object.user.username
  end
  def image
    object.user.image_url
  end
end

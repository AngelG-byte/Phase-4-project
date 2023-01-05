class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :password_digest, :image_url
end

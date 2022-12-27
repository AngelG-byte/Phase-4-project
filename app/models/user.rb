class User < ApplicationRecord
has_secure_password
validates :username, presence: true, uniqueness: true
validates :password, presence: true
validates :bio, presence: true, length:{in: 0..150}
validates :image_url, presence: true


end

class User < ApplicationRecord
has_secure_password
validates :username, presence: true, uniqueness: true
validates :password, presence: true
validates :bio, presence: true, length:{in: 0..150}
# validates :image_url, presence: true
has_many :messages
has_many :chats, through: :messages
has_many :participations
has_many :chats, through: :participations
has_many :posts
has_many :comments 


end

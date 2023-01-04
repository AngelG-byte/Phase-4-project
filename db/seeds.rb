# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



aaron = User.create!(username:"aaron", password: "123", bio: "the G",image_url: "http://via.placeholder.com/150")
taylan = User.create!(username:"taylan", password: "123", bio: "get me a whiteboard",image_url: "http://via.placeholder.com/150")
angel = User.create!(username:"angel", password: "123", bio: "i like turtles",image_url: "http://via.placeholder.com/150")
chett = User.create!(username:"chett", password: "123", bio: "chef of the code",image_url: "http://via.placeholder.com/150")
lollipop = User.create!(username:"lollipop", password: "123", bio: "the grandmaster",image_url: "http://via.placeholder.com/150")

bros = Chat.create!(title:"Bros")

a_message = Message.create!(body:"Yo wassup", user_id:aaron.id, chat_id:bros.id)
t_message = Message.create!(body:"Ayy", user_id:taylan.id, chat_id:bros.id)

a_post = Post.create!(body:"Feeling great!", user_id:aaron.id)
a_post_two = Post.create!(body:"So hype", user_id:aaron.id)
t_post = Post.create!(body:"Excited to be alive!", user_id:taylan.id)
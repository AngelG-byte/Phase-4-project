# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



aaron = User.create!(username:"aaron", password: "123", bio: "the G",image_url: "http://via.placeholder.com/150")
taylan = User.create!(username:"taylan", password: "123", bio: "150*150 pixels",image_url: "http://via.placeholder.com/150")

bros = Chat.create!(title:"Bros")

a_message = Message.create!(body:"Yo wassup", user_id:aaron.id, chat_id:bros.id)
t_message = Message.create!(body:"Yo wassup", user_id:taylan.id, chat_id:bros.id)
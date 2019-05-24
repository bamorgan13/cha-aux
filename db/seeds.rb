# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
require 'faker'

User.destroy_all
Server.destroy_all

user = User.create({username: 'Bryce', email: 'bryce@gmail.com', password: 'notpassword'})
user.icon_image.attach(io: open('https://s3.amazonaws.com/cha-aux-seeds/bryce_headshot.jpg'), filename:'bryce_icon.jpg')
user = User.create({username: 'GabeN', email: 'GabeN@gmail.com', password: 'password'})
user.icon_image.attach(io: open(Faker::Avatar.image(nil,"50x50")), filename:"#{user.username}_icon.jpg")
user = User.create({username: 'Zegyr', email: 'ryon@gmail.com', password: 'password'})
user.icon_image.attach(io: open(Faker::Avatar.image(nil,"50x50")), filename:"#{user.username}_icon.jpg")
user = User.create({username: 'Chaos', email: 'chaos@gmail.com', password: 'password'})
user.icon_image.attach(io: open(Faker::Avatar.image(nil,"50x50")), filename:"#{user.username}_icon.jpg")
user = User.create({username: 'Durango', email: 'durango@gmail.com', password: 'password'})
user.icon_image.attach(io: open(Faker::Avatar.image(nil,"50x50")), filename:"#{user.username}_icon.jpg")
user = User.create({username: 'Jason', email: 'citronator@gmail.com', password: 'password'})
user.icon_image.attach(io: open(Faker::Avatar.image(nil,"50x50")), filename:"#{user.username}_icon.jpg")
user = User.create({username: 'Justin', email: 'kanman@twitch.tv', password: 'password'})
user.icon_image.attach(io: open(Faker::Avatar.image(nil,"50x50")), filename:"#{user.username}_icon.jpg")
user = User.create({username: 'Emmett', email: 'shearbear@twitch.tv', password: 'password'})
user.icon_image.attach(io: open(Faker::Avatar.image(nil,"50x50")), filename:"#{user.username}_icon.jpg")

User.all.each do |user|
  user.owned_servers.create({name: 'Home', private: true})
  user.owned_servers.first.memberships.create({user_id: user.id})
  user.owned_servers.first.icon_image.attach(io: open('https://s3.amazonaws.com/cha-aux-seeds/default_icon.png'), filename:'default_icon.png')
end

aa = Server.create({name: 'App Academy', owner_id: User.find_by(username: 'Bryce').id})
aa.icon_image.attach(io: open('https://s3.amazonaws.com/cha-aux-seeds/aa_icon.png'), filename:'aa_icon.png')
mtga = Server.create({name: 'Magic the Gathering: Arena', owner_id: User.find_by(username: 'Chaos').id})
mtga.icon_image.attach(io: open('https://s3.amazonaws.com/cha-aux-seeds/mtga_icon.png'), filename:'mtga_icon.png')
everyday = Server.create({name: 'Everyday Room', owner_id: User.find_by(username: 'Zegyr').id})
everyday.icon_image.attach(io: open('https://s3.amazonaws.com/cha-aux-seeds/everyday_icon.jpg'), filename:'everyday_icon.jpg')
got = Server.create({name: 'Game of Thrones', owner_id: User.find_by(username: 'Zegyr').id})
got.icon_image.attach(io: open('https://s3.amazonaws.com/cha-aux-seeds/got_icon.jpg'), filename:'got_icon.jpg')

(1..8).each { |user_id| aa.memberships.create({user_id: user_id})}
(1..8).each { |user_id| mtga.memberships.create({user_id: user_id})}
(1..4).each { |user_id| everyday.memberships.create({user_id: user_id})}
[1, 3, 5, 6].each { |user_id| got.memberships.create({user_id: user_id})}

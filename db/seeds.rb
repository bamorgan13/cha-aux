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

bryce = User.create({username: 'Bryce', email: 'bryce@gmail.com', password: 'notpassword'})
bryce.icon_image.attach(io: open('https://s3.amazonaws.com/cha-aux-seeds/bryce_headshot.jpg'), filename:'bryce_icon.jpg')
gaben = User.create({username: 'GabeN', email: 'GabeN@gmail.com', password: 'password'})
gaben.icon_image.attach(io: open(Faker::Avatar.image(nil,"50x50")), filename:"#{gaben.username}_icon.jpg")
zegyr = User.create({username: 'Zegyr', email: 'ryon@gmail.com', password: 'password'})
zegyr.icon_image.attach(io: open(Faker::Avatar.image(nil,"50x50")), filename:"#{zegyr.username}_icon.jpg")
chaos = User.create({username: 'Chaos', email: 'chaos@gmail.com', password: 'password'})
chaos.icon_image.attach(io: open(Faker::Avatar.image(nil,"50x50")), filename:"#{chaos.username}_icon.jpg")
durango = User.create({username: 'Durango', email: 'durango@gmail.com', password: 'password'})
durango.icon_image.attach(io: open(Faker::Avatar.image(nil,"50x50")), filename:"#{durango.username}_icon.jpg")
jason = User.create({username: 'Jason', email: 'citronator@gmail.com', password: 'password'})
jason.icon_image.attach(io: open(Faker::Avatar.image(nil,"50x50")), filename:"#{jason.username}_icon.jpg")
justin = User.create({username: 'Justin', email: 'kanman@twitch.tv', password: 'password'})
justin.icon_image.attach(io: open(Faker::Avatar.image(nil,"50x50")), filename:"#{justin.username}_icon.jpg")
emmett = User.create({username: 'Emmett', email: 'shearbear@twitch.tv', password: 'password'})
emmett.icon_image.attach(io: open(Faker::Avatar.image(nil,"50x50")), filename:"#{emmett.username}_icon.jpg")

User.all.each do |user|
  user.owned_servers.create({name: 'Home', private: true})
  user.owned_servers.first.memberships.create({user_id: user.id})
  user.owned_servers.first.icon_image.attach(io: open('https://s3.amazonaws.com/cha-aux-seeds/default_icon.png'), filename:'default_icon.png')
end

aa = Server.create({name: 'App Academy', owner_id: bryce.id})
aa.icon_image.attach(io: open('https://s3.amazonaws.com/cha-aux-seeds/aa_icon.png'), filename:'aa_icon.png')
mtga = Server.create({name: 'Magic the Gathering: Arena', owner_id: chaos.id})
mtga.icon_image.attach(io: open('https://s3.amazonaws.com/cha-aux-seeds/mtga_icon.png'), filename:'mtga_icon.png')
everyday = Server.create({name: 'Everyday Room', owner_id: zegyr.id})
everyday.icon_image.attach(io: open('https://s3.amazonaws.com/cha-aux-seeds/everyday_icon.jpg'), filename:'everyday_icon.jpg')
got = Server.create({name: 'Game of Thrones', owner_id: zegyr.id})
got.icon_image.attach(io: open('https://s3.amazonaws.com/cha-aux-seeds/got_icon.jpg'), filename:'got_icon.jpg')

User.all.each do |user|
  aa.memberships.create({user_id: user.id})
  mtga.memberships.create({user_id: user.id})
end
[bryce, gaben, zegyr, chaos].each { |user| everyday.memberships.create({user_id: user.id})}
[bryce, zegyr, durango, jason].each { |user| got.memberships.create({user_id: user.id})}

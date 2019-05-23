# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Server.destroy_all

User.create({username: 'Bryce', email: 'bryce@gmail.com', password: 'notpassword'})
User.create({username: 'GabeN', email: 'GabeN@gmail.com', password: 'password'})
User.create({username: 'Zegyr', email: 'ryon@gmail.com', password: 'password'})
User.create({username: 'Chaos', email: 'chaos@gmail.com', password: 'password'})
User.create({username: 'Durango', email: 'durango@gmail.com', password: 'password'})
User.create({username: 'Jason', email: 'citronator@gmail.com', password: 'password'})
User.create({username: 'Justin', email: 'kanman@twitch.tv', password: 'password'})
User.create({username: 'Emmett', email: 'shearbear@twitch.tv', password: 'password'})

aa = Server.create({name: 'App Academy', owner_id: 1})
mtga = Server.create({name: 'Magic the Gathering: Arena', owner_id: 4})
everyday = Server.create({name: 'Everyday Room', owner_id: 3})
got = Server.create({name: 'Game of Thrones', owner_id: 3})

(1..8).each { |user_id| aa.memberships.create({user_id: user_id})}
(1..8).each { |user_id| mtga.memberships.create({user_id: user_id})}
(1..4).each { |user_id| everyday.memberships.create({user_id: user_id})}
[1, 3, 5, 6].each { |user_id| got.memberships.create({user_id: user_id})}

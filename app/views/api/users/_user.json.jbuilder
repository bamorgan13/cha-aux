json.extract! user, :id, :username
json.joinedServerIds user.joined_servers.pluck(:id)
json.icon_image url_for(user.icon_image)
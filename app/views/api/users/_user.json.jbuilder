json.extract! user, :id, :username
json.joinedServerIds user.joined_servers.pluck(:id)
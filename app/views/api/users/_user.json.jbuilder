json.extract! user, :id, :email, :first_name, :last_name
json.avatarUrl url_for(user.avatar) if user.avatar.attached?

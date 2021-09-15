json.extract! @profile, :id, :pronouns, :headline, :country, :postal_code, :location, :industry, :user_id
json.extract! @profile.user, :first_name, :last_name
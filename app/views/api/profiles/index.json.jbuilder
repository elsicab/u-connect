@profiles.each do |profile|
    json.set! profile.id do
        json.extract! profile, :id, :pronouns, :headline, :country, :postal_code, :location, :industry, :user_id
    end
end
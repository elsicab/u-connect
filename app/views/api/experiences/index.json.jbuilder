@experiences.each do |experience|
    json.extract! experience, :id, :user_id, :title, :company, :location, :start, :end, :industry, :description
end
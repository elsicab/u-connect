@experiences.each do |experience|
    json.set! experience.id do
        json.extract! experience, :id, :user_id, :title, :company, :location, :start, :end, :industry, :description
    end
end
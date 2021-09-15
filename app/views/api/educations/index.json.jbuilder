@educations.each do |education|
    json.set! education.id do
        json.extract! education, :id, :school, :degree, :field, :start, :end, :activities, :gpa, :user_id
    end 
end
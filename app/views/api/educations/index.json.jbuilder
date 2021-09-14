@educations.each do |education|
    json.extract! education, :id, :school, :degree, :field, :start, :end, :activities, :gpa, :user_id
end
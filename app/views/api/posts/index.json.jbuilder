json.array! @posts do |post|
    json.extract! post, :id, :body, :author_id
end
@likes.each do |like|
    json.set! like.id do
        json.extract! like, :id, :liker_id, :type, :likeable_id
    end
end
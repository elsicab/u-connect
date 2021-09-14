@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :body, :author_id, :created_at
        json.photoUrl url_for(post.photo) if post.photo.attached? 

        json.author do
            json.extract! post.author, :first_name, :last_name
        end
    end
end
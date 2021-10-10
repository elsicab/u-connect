@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :body, :author_id, :post_id, :created_at

        json.author do
            json.extract! comment.user, :first_name, :last_name, :avatar, :id
        end
    end
end
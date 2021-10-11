@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :body, :author_id, :post_id, :created_at

        json.user do
            json.extract! comment.user, :first_name, :last_name, :id
            json.avatar url_for(comment.user.avatar) if comment.user.avatar.attached?

        end
    end
end
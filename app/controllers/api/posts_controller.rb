class PostController < ApplicationController
    def index
        @posts = Post.all
        render :index
    end

    private

    def post_params
        params.require(:post).permit(:body, :author_id, :photo)
    end
end
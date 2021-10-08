class Api::CommentsController < ApplicationController
    def index
        @comments = Comment.all.order('created_at DESC')
        render :index
    end

    def show 
        @comment = Comment.find(params[:id])
        render 'api/comment/show'

    end


    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id

        if @comment.save!
            render 'api/comments/show'
        else
            render json: @comment.errors.full_messages, status: 404
        end

    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy if @comment
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
            render 'api/comments/show'
        else
            render json: @comment.errors.full_messages, status: 404
        end
    end


    private

    def comment_params
        params.require(:comment).permit(:body, :post_id)
    end
end
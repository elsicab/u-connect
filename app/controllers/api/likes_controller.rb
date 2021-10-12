class Api::LikesController < ApplicationController

    def index
        @likes = Likes.all
        render :index
    end

    def create
        @like = Like.new(like_params)
        @like.liker_id = current_user.id
        if @like.save
            render 'api/likes/show'
        else
            render json: @like.errors.full_messages, status: 401
        end
    end

    def show
        @like = Like.find(params[:id])
        render 'api/likes/show'
    end

    def destroy
        @like = Like.find(params[:id])
        @like.destroy if @like
    end

    private
    def like_params 
        params.permit(:type, :likeable_id)
    end
end
class Api::ExperiencesController < ApplicationController {
    def index
        @experiences = Experience.all
        render :index
    end

    def show
        @experience = Experience.find(params[:id])
        render 'api/experiences/show'
    end

    def create
        @experience = Experience.new(experience_params)
        @experience.user_id = current_user.id

        if @experience.save!
            render 'api/experiences/show'
        else
            render json: @experience.errors.full_messages, status: 404
        end
    end

    def destroy
        @experience = Experience.find(params[:id])
        @experience.destroy if @experience
    end

    def update
        @experience = Experience.find(params[:id])
        if @experience.update(experience_params)
            render 'api/experiences/show'
        else
            render json: @experience.errors.full_messages, status: 404
        end
    end

    private 
    def experience_params
        params.require(:experience).permit(:title, :company, :location, :start, :end, :industry, :description)
    end


}
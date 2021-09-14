class Api::EducationsController < ApplicationController{
    def index
        @educations = Education.all
        render :index
    end

    def show
        @education = Education.find(params[:id])
        render 'api/educations/show'
    end

    def create
        @education = Education.new(education_params)
        @education.author_id = current_user.id

        if @education.save!
            render 'api/educations/show'
        else
            render json: @education.errors.full_messages, status: 404
        end
    end

    def destroy
        @education = Education.find(params[:id])
        @education.destroy if @education
    end

    def update
        @education = Education.find(params[:id])
        if @education.update(education_params)
            render 'api/educations/show'
        else
            render json: @education.errors.full_messages, status: 404
        end
    end

    private 
    def education_params
        params.require(:education).permit(:school, :degree, :field, :start, :end, :activities, :gpa)
    end
}
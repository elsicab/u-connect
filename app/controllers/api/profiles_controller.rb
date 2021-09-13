class Api::ProfilesController < ApplicationController
    def show
        @profile = Profile.find(params[:id])
        render 'api/profiles/show'
    end

    def create
        @profile = Profile.new(profile_params)
        @profile.user_id = current_user.id

        if @profile.save!
            render 'api/profiles/show'
        else
            render json: @profile.errors.full_messages, status: 404
        end
    end


    def update
        @profile = Profile.find(params[:id])
        if @profile.update(profile_params)
            render 'api/profiles/show'
        else
            render json: @profile.errors.full_messages, status: 404
        end

    end

    private
    def profile_params
        params.require(:profile).permit(:user_id, :pronouns, :headline, :country, :postal_code, :location, :industry)
    end 
end
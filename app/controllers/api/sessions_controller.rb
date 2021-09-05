
class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user 
            login(@user)
        else
            render json: ["Invalid name or password"], status: 401
        end
    end

    def destroy
        if current_user  
            logout!
            render json: {message: 'Logged Out'}
        else
            render json: ["No user logged in"], status: 404
        end
    end


end
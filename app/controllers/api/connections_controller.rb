class Api::ConnectionsController < ApplicationController

    def index
        @connections = Connection.all
        render :index
    end

    def create
        @connection = Connection.new(connection_params)
        @connection.connector_id = current_user.id
        if @connection.save
            render 'api/connections/show'
        else
            render json: @connection.errors.full_messages, status: 401
        end
    end

    def show
        @connection = Connection.find(params[:id])
        render 'api/connections/show'
    end

    def destroy
        @connection = Connection.find(params[:id])
        @connection.destroy if @connection
    end

    private
    def connection_params 
        params.require(:connection).permit(:connected_id)
    end
end
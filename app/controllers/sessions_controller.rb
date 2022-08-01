class SessionsController < ApplicationController

    #Copy/pasted from 'Authenticating Users' Module in Canvas
    def create
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
    end

    #Copy/pasted from 'Authenticating Users' Module in Canvas
    def destroy
        session.delete :user_id
        head :no_content
    end
end

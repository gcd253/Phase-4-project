class ConversationsController < ApplicationController

    #Order these by message created_at
    def index
        convo = Conversation.all
        render json: convo.reverse, status: :ok
    end

    def show
        convo = Conversation.find_by(id: params[:id])
        render json: convo, status: :ok 
    end

    def create
        convo = Conversation.create!(convo_params)
        render json: convo, status: :created
    end

    private

    def convo_params
        params.permit(:user_id, :message_id)
    end
end

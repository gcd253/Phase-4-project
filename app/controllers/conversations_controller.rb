class ConversationsController < ApplicationController
    def index
        convo = Conversation.all
        render json: convo, status: :ok
    end

    def create
        convo = Conversation.create(convo_params)
        render json: convo, status: :created
    end

    private

    def convo_params
        params.permit(:user_id, :message_id)
    end
end

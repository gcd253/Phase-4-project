class ConversationsController < ApplicationController

    #Order these by message created_at
    def index
        convo = Conversation.all
        # .where(user_id: session[:user_id])
        render json: convo.reverse, status: :ok
    end

    def show
        convo = Conversation.find_by(id: params[:id])
        render json: convo, includes: :users, status: :ok 
    end

    def inbox
        myConvos = Member.where(user_id: session[:user_id]).pluck(:conversation_id)
        convo = Conversation.all.filter{ |temp| myConvos.include?(temp.id)}
        render json: convo, includes: :users, status: :ok
    end

    def create
        convo = Conversation.create!(convo_params)
        render json: convo, status: :created
    end

    private

    def convo_params
        params.permit(:id, :name)
    end
end

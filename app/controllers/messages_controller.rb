class MessagesController < ApplicationController
  before_action :set_message, only: [:show, :update, :destroy]

  # GET /messages
  def index
    @messages = Message.all
    
    render json: @messages.reverse
  end

  # GET /messages/1
  def show
    render json: @message, include: :user
  end

  # POST /messages
  def create
    @message = Message.create!(message_params)
    render json: @message, status: :created
  end

  # PATCH/PUT /messages/1
  def update
    @message.update!(message_params)
    render json: @message
  end

  # DELETE /messages/1
  def destroy
    @message.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def message_params
      params.permit(:message, :user_id, :conversation_id)
    end
end

class MembersController < ApplicationController
  before_action :set_member, only: [:show, :update, :destroy]

  # GET /members
  def index
    @members = Member.all

    render json: @members
  end

  # GET /members/1
  def show
    render json: @member
  end

  # POST /members
  def create
    user = User.find_by(id: session[:id])
    receipient = User.find_by(username: params[:username])

    member = Member.create!(user_id: user.id)
    recip_member = Member.create!(user_id: receipient.id, conversation_id: member.id)

    render json: member, status: :created

  end

  # PATCH/PUT /members/1
  def update
    if @member.update(member_params)
      render json: @member
    else
      render json: @member.errors, status: :unprocessable_entity
    end
  end

  # DELETE /members/1
  def destroy
    @member.destroy
    render json: @member, status: :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_member
      @member = Member.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def member_params
      params.permit(:user_id, :conversation_id)
    end
end

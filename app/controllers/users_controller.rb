class UsersController < ApplicationController
  before_action :set_user, only: [:update, :destroy]
  before_action :authorize, only: [:show]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /me
  # Copy/pasted from 'Authenticating Users' Module in Canvas
  def show
    user = User.find_by(id: session[:user_id])
    render json: user
  end

  # POST /users
  def create
    user = User.create(user_params)
    if user.valid?
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end
  # PATCH/PUT /users/1
  def update
    @user.update!(user_params)
    render json: @user
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :email, :password, :password_confirmation, :avatar_url)
    end
end

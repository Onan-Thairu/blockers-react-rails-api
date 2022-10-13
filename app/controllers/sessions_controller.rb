class SessionsController < ApplicationController

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      byebug
      render json: { id: user.id, username: user.username }, status: :created
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end
end

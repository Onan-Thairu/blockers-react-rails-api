class BlockersController < ApplicationController

  def index
    blockers = Blocker.all.order(updated_at: :desc)
    render json: blockers, status: :ok
  end

  def create
    blocker = Blocker.new(blocker_params)
    blocker.user_id = session[:user_id]
    if blocker.valid?
      blocker.save
      render json: blocker, status: :created
    else
      render json: { errors: blocker.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def blocker_params
    params.permit(:description, :solution, :tag, :user_id)
  end
end

class BlockersController < ApplicationController

  def index
    blockers = Blocker.all
    render json: blockers, status: :ok
  end

  def create
    blocker = Blocker.new(blocker_params)
    byebug
  end

  private

  def blocker_params
    params.permit(:description, :solution, :tag, :user_id)
  end
end

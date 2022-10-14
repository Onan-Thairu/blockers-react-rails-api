class BlockersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :blocker_not_found
  before_action :authorize
  skip_before_action :authorize, only: [:index, :filter]

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

  def destroy
    blocker = Blocker.find(params[:id])
    if (blocker.user_id === session[:user_id])
      blocker.destroy
      head :no_content, status: :no_content
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def filter
    blockers = Blocker.where("tag = ?", params[:tag]).order(updated_at: :desc)
    render json: blockers, status: :ok
  end

  private

  def blocker_params
    params.permit(:description, :solution, :tag, :user_id)
  end

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def blocker_not_found
    render json: { error: "Blocker Not Found" }, status: :not_found
  end
end

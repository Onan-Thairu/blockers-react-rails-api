class BlockersController < ApplicationController

  def index
    blockers = Blocker.all
    render json: blockers, status: :ok
  end
end

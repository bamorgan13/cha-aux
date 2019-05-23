class Api::ServersController < ApplicationController
  def index
    if params[:joined]
      @servers = current_user.joined_servers
    else
      @servers = Server.where(private: false)
    end
    render :index
  end

  def show
    @server = Server.find(params[:id])
    render :show
  end

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id
    if @server.save
      @server.memberships.create({user_id: current_user.id})
      render :show
    else
      render json: @server.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @server = Server.find(params[:id])
    if @server.update(server_params)
      render :show
    else
      render @server.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    server = Server.find(params[:id])
    server.destroy
    redirect_to :servers
  end

  private

  def server_params
    params.require(:server).permit(:name, :owner_id, :private)
  end
end

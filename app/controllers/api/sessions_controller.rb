class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login(@user)
      render '/api/users/show'
    else
      render json: ['Invalid login credentials'], status: 422
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ['Already logged out'], status: 422
  end
end

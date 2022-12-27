class UsersController < ApplicationController
       skip_before_action :check_user, only: [:create]

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { message: "Not logged in" }, status: 404
        end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:username, :bio, :password)
    end
end

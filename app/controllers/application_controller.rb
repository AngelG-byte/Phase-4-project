class ApplicationController < ActionController::API
  include ActionController::Cookies
before_action :check_user
  def check_user
    unless current_user  render json: "Please log in", status: 401
  end
 def current_user
        User.find_by(id: session[:user_id])
    end
end

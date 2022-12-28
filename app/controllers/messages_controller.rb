class MessagesController < ApplicationController
    def index
        messi = current_user.messages.all
        render json: messi
    end
#     def create
#         message = current_user.messages.create!(message_params)
#         render json: message, status: :created
#     end
#     def destroy
#         message = current_user.message.find_by(params[:id])
#         message.destroy
#         render json: "pop!"

#     end
#     private
#    def message_params
#     params.permit(:body,:chat_id)
#    end
#    def current_user
#     User.find_by(id: session[:user_id])
#    end
end

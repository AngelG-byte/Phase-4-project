class ChatsController < ApplicationController
    # def index
    #     chats = Chat.all
    #     render json: chats
    # end
    # def create
    #    chat_present = current_user.chat.all.map
    #     Participation.create!(participations_params)
    #     chat = current_user.chat.create!(chat_params)
    #     render json: chat, status: :created

    # end
    # def destroy
    #     chat = Chat.find(params[:id])
    #     chat.destroy
    #     head :no_content
    # end
    # private
    # def chat_params
    #     params.permit(:title, :convo_url)
    # end
    # def participations_params
    #     params.permit(:user_id, :chat_id)
    # end
end

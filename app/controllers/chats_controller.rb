class ChatsController < ApplicationController
    def index
        chats = Chat.all
        render json: chats
    end
    def create
       chat_present = current_user.chats.all.include?(participations_params)
    #    isExist = Conversation.all.map{|c| c.participants}.map{|pArr| pArr.map{|p| p.user_id}.sort}.include?(params[:participants].sort)
       if chat_present
        render json: {error:"This chat already exist"},status: :unprocessable_entity
       else
        chat = Chat.create!(chat_params)

        participations_params.each do |userID|
                Participation.create!(participations_params)
       end
        render json: chat, status: :created
    end
end
    # def destroy
    #     chat = Chat.find(params[:id])
    #     chat.destroy
    #     head :no_content
    # end
    private
    def chat_params
        params.permit(:title, :convo_url, :user_id)
    end
    def participations_params
        params.permit(:user_id, :chat_id)
    end
end

class CommentsController < ApplicationController

    def index
        comment = Comment.all
        render json: comment
    end

    def create
        comments = current_user.comments.create!(comments_params)
        render json: comments , status: :created
    end

    def destroy
        comment = current_user.comments.find_by(params[:id])
        comment.destroy
        render json: "pop!"
     end
     private
     def comments_params
        params.permit(:text, :post_id, :user_id)
     end
end

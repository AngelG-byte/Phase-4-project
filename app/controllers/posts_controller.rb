class PostsController < ApplicationController

    def index
        posts = Post.all
        render json: posts
    end

    def create
        post = current_user.posts.create!(post_params)
        render json: post , status: :created
    end
     def destroy
        post = current_user.post.find_by(params[:id])
        post.destroy
        render json: "pop!"
     end
   private
   def post_params
    params.permit(:body)
   end

end

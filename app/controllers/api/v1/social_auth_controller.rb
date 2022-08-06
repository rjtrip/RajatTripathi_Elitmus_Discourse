# Api Controller to handle our call backs
require 'json'
class Api::V1::SocialAuthController < Api::V1::ApplicationController
  def authenticate_social_auth_user
    begin
    #  params is the response I receive from the client with the data from the provider about the user
    @user = User.signin_or_create_from_provider(params) # this method add a user who is new or logins an old one
    token = JsonWebToken.encode(user_id: @user.id)
    time = Time.now + 24.hours.to_i
    render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M"),
                    username: @user.username }, status: :ok
    rescue => error
        render json: { error: 'Something went wrong with the login.' }, status: :unprocessable_entity
    end
  end
end
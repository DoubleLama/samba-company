module Admin
  class ApplicationController < Administrate::ApplicationController
    http_basic_authenticate_with(
      name: Rails.application.credentials.dig(:admin, :name),
      password: Rails.application.credentials.dig(:admin, :password).to_s
    )
  end
end

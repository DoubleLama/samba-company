Rails.application.routes.draw do
  namespace :admin, only: %i[index show new create edit update destroy] do
    %i[maintenances creations].each do |name|
      resources name
    end

    resources :websites, only: %i[index show new create edit update destroy] do
      delete :image, action: :destroy_image
    end

    root to: 'websites#index'
  end
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      %i[websites creations maintenances].each do |name|
        resources name
      end
    end
  end

  get '*path', to: 'application#fallback_index_html', constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }
end

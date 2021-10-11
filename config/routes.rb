Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :update, :index]
    resources :educations, only: [:index, :show, :create, :update, :destroy]
    resources :experiences, only: [:index, :show, :create, :update, :destroy]
    resources :profiles, only: [:create, :update, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :index, :show, :destroy, :update]
    resources :comments, only: [:create, :index, :show, :destroy, :update]
    resources :connections, only: [:create, :destroy, :show, :index]
  end
end

Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  get 'tesla', to: "pages#tesla"
  get 'apple', to: "pages#apple"
  get 'game', to: "pages#game"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

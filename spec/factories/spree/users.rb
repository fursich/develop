FactoryGirl.define do
  factory :user do
    name 'test_user'
    password 'password'
    password_confirmation 'password'
  end
end

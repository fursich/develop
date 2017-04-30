class Potepan::BlogsController < ApplicationController
  include Spree::Core::ControllerHelpers::Pricing
  include Spree::Core::ControllerHelpers::Order
  include Spree::Core::ControllerHelpers::Auth
  include Spree::Core::ControllerHelpers::Store
  include Spree::Core::ControllerHelpers::StrongParameters

  def index
  end

  def show
  end
end

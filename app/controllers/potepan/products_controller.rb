# require_dependency 'spree/core/controller_helpers/strong_parameters'
class Potepan::ProductsController < ApplicationController
  include Spree::Core::ControllerHelpers::Auth
  # include Spree::Core::ControllerHelpers::RespondWith
  # include Spree::Core::ControllerHelpers::Common
  # include Spree::Core::ControllerHelpers::PaymentParameters
  # include Spree::Core::ControllerHelpers::Search
  include Spree::Core::ControllerHelpers::Store
  # include Spree::Core::ControllerHelpers::StrongParameters
# class Potepan::ProductsController < Spree::StoreController
  include Spree::Core::ControllerHelpers::Pricing
  include Spree::Core::ControllerHelpers::Order
  # include Spree::BaseHelper
  # include Spree::Core::BaseController

  def index
    if params[:category]
      @products = Spree::Product.with_taxons_name( params[:category] ).includes(:prices)
    else
      @products = Spree::Product.all
    end
    @product_images = @products.map{ |p| p.display_image.attachment(:large)}
    @product_categories = Spree::Taxon.categories_with_products.pluck(:name).map(&:upcase)

  end

  def show
    @single_product = Spree::Product.find(params[:id])
    @variants = @single_product.variants
    @product_image = @single_product.display_image
  end
end

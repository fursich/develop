class Potepan::ProductsController < ApplicationController

  def show
    @single_product = Spree::Product.find(params[:id])
    @product_image = @single_product.display_image
  end
end

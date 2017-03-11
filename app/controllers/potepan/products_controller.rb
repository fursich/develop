class Potepan::ProductsController < ApplicationController
  def index
    @products = Spree::Product.includes(:taxons).where("spree_taxons.name=?", 'Bags').references(:taxons).includes(:prices)
    @prototype_names = Spree::Prototype.all.pluck(:name).map(&:upcase)
  end

  def show
    @single_product = Spree::Product.find(params[:id])
    @product_image = @single_product.display_image
  end
end

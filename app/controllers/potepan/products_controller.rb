class Potepan::ProductsController < ApplicationController
  def index
    if params[:category]
      @products = Spree::Product.includes(:taxons).where("upper(spree_taxons.name) = ?", params[:category]).references(:taxons).includes(:prices)
      # scopeを使ってまとめたい & ActiveRecord::Sanitization::sanitize_sql_likeを使いたいけどやり方がわからない･･
    else
      @products = Spree::Product.all
    end
    @product_categories = Spree::Taxon.find_by('lower(name)=?', 'categories').descendants.pluck(:name).map(&:upcase)

  end

  def show
    @single_product = Spree::Product.find(params[:id])
    @product_image = @single_product.display_image
  end
end

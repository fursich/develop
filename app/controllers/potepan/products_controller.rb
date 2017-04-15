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
  include Spree::TaxonsHelper          # オススメ商品抽出用メソッドのため

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
    @product = Spree::Product.find(params[:id])
    @variants = @product.variants
    @product_image = @product.display_image.attachment(:large)

    # 以下はレコメンド表示用
    related_group = @product.taxons.select{|t| t.leaf? }   # 商品特徴を抽出するため､taxonの末端を取ってくる

    @recommended_products = if related_group.present?
                              related_group.map{|t| taxon_preview(t,2).to_a }.flatten.uniq - [@product]   # taxonに関連したプロダクトを拾ってオススメとする(自分自身を除く)
                            else
                              nil
                            end
    @recommended_product_images = @recommended_products && @recommended_products.map{|prd| prd.display_image.attachment(:large)}
  end
end

# require_dependency 'spree/core/controller_helpers/strong_parameters'
class Potepan::ProductsController < ApplicationController
  include Spree::TaxonsHelper          # オススメ商品抽出用メソッドのため

  def index
    if params[:category]
      @products = Spree::Product.with_taxons_name( params[:category] ).includes(:prices)
    else
      @products = Spree::Product.all
    end
    @variants = @products.map{|prd| prd.variants.first}        # とりあえず最初のバリアントのみ

    @product_images = @products.map{ |p| p.display_image.attachment(:large)}
    @product_categories = Spree::Taxon.categories_with_products.pluck(:name).map(&:upcase)
  end

  def show
    @product = Spree::Product.find(params[:id])
    @variant = @product.variants.first           # とりあえず最初のバリアントのみ
    @product_image = @product.display_image.attachment(:large)

    # 以下はレコメンド表示用
    related_group = @product.taxons.select{|t| t.leaf? }   # 商品特徴を抽出するため､taxonの末端を取ってくる

    if related_group.present?
      all_recommended_products =  related_group.map{|t| taxon_preview(t,2).to_a }.flatten.uniq
      @recommended_products =  all_recommended_products - [@product]   # taxonに関連したプロダクトを拾ってオススメとする(自分自身を除く)

      @recommended_product_variants = @recommended_products.map{|prd| prd.variants.first }         # とりあえず最初のバリアントのみ
      @recommended_product_images = @recommended_products.map{|prd| prd.display_image.attachment(:large)}
    else

      @recommended_products =  @recommended_product_variants = nil
      @recommended_product_images = nil
    end

  end
end

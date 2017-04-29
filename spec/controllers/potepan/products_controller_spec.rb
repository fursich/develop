require 'rails_helper'
require 'shared_contexts/custom_products'

RSpec.describe Potepan::ProductsController, type: :controller do
  describe "GET #index" do
    include_context 'custom products'
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
    it "assigns @products" do
      product = Spree::Product.first
      product_count = Spree::Product.count
      get :index
      expect(assigns(:products)).to include(product)
      expect(assigns(:products).count).to eq(product_count)
    end
  end

  describe "GET #show" do
    include_context 'custom products'
    it "returns http success" do
      product = Spree::Product.first
      get :show, params: {id: product.id}
      expect(response).to have_http_status(:success)
    end
    it "assigns @product" do
      product = Spree::Product.first
      get :show, params: {id: product.id}
      expect(assigns(:product)).to eq(product)
    end
  end

end

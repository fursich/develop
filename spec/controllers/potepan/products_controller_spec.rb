require 'rails_helper'

RSpec.describe Potepan::ProductsController, type: :controller do
  describe "GET #index" do
    it "assigns @products" do
      product = Spree::Product.create
      get :index
      expect(assigns(:product)).to eq([product])
    end
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #show" do
    let(:product) { create(:product, name: 'product1',
            option_values_hash: {
              number_size_option_type.id.to_s => number_size_option_type.option_value_ids
            } ) }
    it "returns http success" do
      product = Spree::Product.create
      get :show, id: product.id
      expect(response).to have_http_status(:success)
    end
  end

end

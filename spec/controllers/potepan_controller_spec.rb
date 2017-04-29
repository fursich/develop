require 'rails_helper'
require 'shared_contexts/custom_products'

RSpec.describe PotepanController, type: :controller do

  describe "GET #index" do
    include_context 'custom products'
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
    it "assigns five new arrivals" do
      new_arrivals = Spree::Product.order('id DESC').limit(5)
      get :index
      expect(assigns(:new_arrivals)).to eq(new_arrivals.to_a)
    end
  end

end

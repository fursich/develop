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
      get :index
      new_arrivals = assigns(:new_arrivals)
      expect(new_arrivals.count).to eq(5)
    end
  end

end

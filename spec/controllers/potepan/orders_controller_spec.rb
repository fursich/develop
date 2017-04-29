require 'rails_helper'
require 'shared_contexts/custom_products'

RSpec.describe Potepan::OrdersController, type: :controller do

  describe "GET #show" do
    include_context 'custom products'

    it "returns http success" do
      get :show, params: {id: 1}
      expect(response).to have_http_status(:success)
    end

    it "assigns @order" do
      order = controller.current_order(create_order_if_necessary: true)  # 未オーダー時に呼ばれた場合の挙動を検討: オプションtrueでよいか?
      get :show, params: {id: 1}
      expect(assigns(:order)).to eq(order)
    end
  end

  describe "POST #populate" do
    include_context 'custom products'

    it "returns http redirect" do
      product = Spree::Product.first
      variant = Spree::Variant.create(sku: 'test', product_id: product.id, cost_price: 100.0)
      post :populate, params: {variant_id: variant.id, quantity: 1}
      expect(response).to have_http_status(:redirect)
    end

    it "adds items onto cart" do
      product = Spree::Product.first
      variant = Spree::Variant.create(sku: 'test', product_id: product.id, cost_price: 100.0)

      post :populate, params: {variant_id: variant.id, quantity: 5}
      get :show, params: {id: 1}

      order = controller.current_order(create_order_if_necessary: true)  # 未オーダー時に呼ばれた場合の挙動を検討: オプションtrueでよいか?
      expect(assigns(:order)).to eq(order)
      expect(order.item_count).to eq(5)
    end
  end

  describe "POST #remove_item" do
    include_context 'custom products'

    it "returns http redirect" do
      product = Spree::Product.first
      variant = Spree::Variant.create(sku: 'test', product_id: product.id, cost_price: 100.0)
      post :populate, params: {variant_id: variant.id, quantity: 1}
      post :remove_item, params: {variant_id: variant.id}
      expect(response).to have_http_status(:redirect)
    end

    it "removes items from cart" do
      product = Spree::Product.first
      variant = Spree::Variant.create(sku: 'test', product_id: product.id, cost_price: 100.0)
      variant2 = Spree::Variant.create(sku: 'test2', product_id: product.id, cost_price: 200.0)

      post :populate, params: {variant_id: variant.id, quantity: 8}
      post :populate, params: {variant_id: variant2.id, quantity: 5}
      post :remove_item, params: {variant_id: variant.id}
      get :show, params: {id: 1}

      order = controller.current_order(create_order_if_necessary: true)  # 未オーダー時に呼ばれた場合の挙動を検討: オプションtrueでよいか?
      expect(assigns(:order)).to eq(order)
      expect(order.item_count).to eq(5)
      expect(order.line_items.first.variant).to eq(variant2)
    end
  end

  describe "PATCH #update" do
    include_context 'custom products'

    it "returns http success" do
      product = Spree::Product.first
      variant = Spree::Variant.create(sku: 'test', product_id: product.id, cost_price: 100.0)
      post :populate, params: {variant_id: variant.id, quantity: 1}
      patch :update, params: {id: 1, order: {variant_id: variant.id, quantity: 1}}
      expect(response).to have_http_status(:redirect)
    end

    it "updates items in cart" do
      product = Spree::Product.first
      variant = Spree::Variant.create(sku: 'test', product_id: product.id, cost_price: 100.0)

      post :populate, params: {variant_id: variant.id, quantity: 1}
      patch :update, params: {id: 1,
        order: { line_items_attributes:
           { 0 => { id: 1, quantity: 10 } }
        }}
      order = controller.current_order(create_order_if_necessary: true)  # 未オーダー時に呼ばれた場合の挙動を検討: オプションtrueでよいか?
      expect(assigns(:order)).to eq(order)
      expect(order.line_items.first.variant).to eq(variant)
      expect(order.item_count).to eq(10)
    end
  end


end

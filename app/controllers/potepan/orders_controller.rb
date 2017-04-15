class Potepan::OrdersController < ApplicationController
  include Spree::Core::ControllerHelpers::Pricing
  include Spree::Core::ControllerHelpers::Order
  include Spree::Core::ControllerHelpers::Auth
  include Spree::Core::ControllerHelpers::Store

  def show
    @order = current_order(create_order_if_necessary: true)  # 未オーダー時に呼ばれた場合の挙動を検討: オプションtrueでよいか?
    items = @order.line_items

    @grand_total_price = items.pluck(:price, :quantity).map{|a,b| a.to_i * b.to_i }.inject(&:+)
    # 税金などは後ほどやる
  end

  def update
    binding.pry
    @order = current_order(create_order_if_necessary: false)  # 未オーダー時に呼ばれた場合の挙動を検討: オプションtrueでよいか?

    if @order.contents.update_cart(order_params)
      respond_with(@order) do |format|
        format.html do
          if params.key?(:checkout)
            @order.next if @order.cart?
            redirect_to checkout_state_path(@order.checkout_steps.first)
          else
            redirect_to cart_path
          end
        end
      end
    else
      respond_with(@order)
    end
  end

  def edit
  end

  def populate
    order    = current_order(create_order_if_necessary: true)
    variant  = Spree::Variant.find(params[:variant_id])
    quantity = params[:quantity].to_i

    # 2,147,483,647 is crazy. See issue https://github.com/spree/spree/issues/2695.
    if quantity.between?(1, 2_147_483_647)
      begin
        order.contents.add(variant, quantity)
      rescue ActiveRecord::RecordInvalid => e
        error = e.record.errors.full_messages.join(", ")
      end
    else
      error = Spree.t(:please_enter_reasonable_quantity)
    end

    if error
      flash[:error] = error
      redirect_back_or_default(potepan_index_path)
    else
      redirect_to potepan_order_path(order.id)
    end
  end
end

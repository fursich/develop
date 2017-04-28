class Potepan::OrdersController < ApplicationController
  include Spree::Core::ControllerHelpers::Pricing
  include Spree::Core::ControllerHelpers::Order
  include Spree::Core::ControllerHelpers::Auth
  include Spree::Core::ControllerHelpers::Store

  def index
  end
  def show
    @order = current_order(create_order_if_necessary: true)  # 未オーダー時に呼ばれた場合の挙動を検討: オプションtrueでよいか?
    items = @order.line_items

    @item_count = items.size
    @unit_prices, @quantities = items.pluck(:price, :quantity).transpose      # N+1を避けたいのでpluck頼み
    @unit_prices.map!(&:to_i)                                                 # BigDecimal → integerにしておく 服なので､桁数は心配ないか
    @total_prices = @unit_prices.zip(@quantities).map{|a,b| a.to_i * b.to_i } # nil.to_i = 0

    @product_names, @product_images = items.map{|item| prd = item.product; [prd.name, prd.display_image.attachment(:small)] }.transpose   # N+1を避けたくて省エネ｡ちょっと可読性が悪いかも･･･
    #  item.variant.option_values.presentation(商品バリアントの詳細)までは見せない､カートには商品名だけが出ることにする
  end

  def update
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

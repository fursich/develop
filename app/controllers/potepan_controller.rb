class PotepanController < ApplicationController

  #def index
  #end
  def checkout_complete
  end
  def checkout_step_1
  end
  def checkout_step_3
  end
  def checkout_step_4
  end
  def single_product
    @single_product = Spree::Product.first
    @product_image = @single_product.display_image
  end
  def cart_page
    @added_product = Spree::Product.find(params[:id])
  end

end

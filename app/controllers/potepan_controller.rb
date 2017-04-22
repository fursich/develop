class PotepanController < ApplicationController

  def index
    @new_arrivals = Spree::Product.order('id DESC').limit(5)
    @new_arrival_images = @new_arrivals.map{ |prd| prd.display_image.attachment(:large) }
  end

end

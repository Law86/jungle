class Admin::DashboardController < ApplicationController

  http_basic_authenticate_with name: ENV["USER"], password: ENV["PASS"], if: -> { ENV["PASS"].present? }
  
  def show
    @products_total = Product.count
    @category_total = Category.count
  end
end

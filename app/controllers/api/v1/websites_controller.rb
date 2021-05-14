module Api
  module V1
    class WebsitesController < Api::ApplicationController
      before_action :set_website, only: [:show, :update, :destroy]

      # GET api/v1/websites
      def index
        @websites = Website.all
      end

      # GET api/v1/websites/1
      def show
        render json: @website
      end

      # POST api/v1/websites
      def create
        @website = Website.new(website_params)

        if @website.save
          render json: @website, status: :created, location: @website
        else
          render json: @website.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT api/v1/websites/1
      def update
        if @website.update(website_params)
          render json: @website
        else
          render json: @website.errors, status: :unprocessable_entity
        end
      end

      # DELETE api/v1/websites/1
      def destroy
        @website.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_website
        @website = Website.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def website_params
        params.require(:website).permit(:name, :url, :date)
      end
    end
  end
end

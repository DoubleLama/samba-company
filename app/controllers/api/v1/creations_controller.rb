module Api
  module V1
    class CreationsController < Api::ApplicationController
      before_action :set_creation, only: %i[show update destroy]

      # GET api/v1/creations
      def index
        @creations = Creation.all
      end

      # GET api/v1/creations/1
      def show
        render json: @creation
      end

      # POST api/v1/creations
      def create
        @creation = Creation.new(creation_params)

        if @creation.save
          render json: @creation, status: :created, location: @creation
        else
          render json: @creation.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT api/v1/creations/1
      def update
        if @creation.update(creation_params)
          render json: @creation
        else
          render json: @creation.errors, status: :unprocessable_entity
        end
      end

      # DELETE api/v1/creations/1
      def destroy
        @creation.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_creation
        @creation = Creation.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def creation_params
        params.require(:creation).permit(:name, :url, :date)
      end
    end
  end
end

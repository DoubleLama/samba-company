module Api
  module V1
    class MaintenancesController < Api::ApplicationController
      before_action :set_maintenance, only: %i[show update destroy]

      # GET api/v1/maintenances
      def index
        @maintenances = Maintenance.all
      end

      # GET api/v1/maintenances/1
      def show
        render json: @maintenance
      end

      # POST api/v1/maintenances
      def create
        @maintenance = Maintenance.new(maintenance_params)

        if @maintenance.save
          render json: @maintenance, status: :created, location: @maintenance
        else
          render json: @maintenance.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT api/v1/maintenances/1
      def update
        if @maintenance.update(maintenance_params)
          render json: @maintenance
        else
          render json: @maintenance.errors, status: :unprocessable_entity
        end
      end

      # DELETE api/v1/maintenances/1
      def destroy
        @maintenance.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_maintenance
        @maintenance = Maintenance.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def maintenance_params
        params.require(:maintenance).permit(:name, :url, :date)
      end
    end
  end
end

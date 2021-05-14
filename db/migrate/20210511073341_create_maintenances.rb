class CreateMaintenances < ActiveRecord::Migration[6.1]
  def change
    create_table :maintenances do |t|
      t.string :title
      t.text :description
      t.string :price

      t.timestamps
    end
  end
end

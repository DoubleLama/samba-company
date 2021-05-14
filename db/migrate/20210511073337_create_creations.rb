class CreateCreations < ActiveRecord::Migration[6.1]
  def change
    create_table :creations do |t|
      t.string :title
      t.text :description
      t.string :price

      t.timestamps
    end
  end
end

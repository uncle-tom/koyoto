class RecreateOrderTable < ActiveRecord::Migration
  def change
    drop_table(:orders)

    create_table(:orders) do |t|
      t.boolean :vizitka
      t.boolean :promo
      t.boolean :landing
      t.boolean :corp
      t.boolean :store
      
      t.boolean :audit
      t.boolean :inner
      t.boolean :seocomplex

      t.boolean :facebook
      t.boolean :vk
      t.boolean :smmcomplex
      t.boolean :instagram

      t.string :promocode
      t.text :message

      t.string :name
    end
  end
end

class CreateBlockers < ActiveRecord::Migration[6.1]
  def change
    create_table :blockers do |t|
      t.text :description
      t.text :solution
      t.string :tag
      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end

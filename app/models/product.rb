class Product < Spree::Base
  scope :with_taxons_name, -> (category) {
     includes(:taxons).where("upper(spree_taxons.name) like ?", "%#{sanitize_sql_like(category)}%").references(:taxons)
  }
end

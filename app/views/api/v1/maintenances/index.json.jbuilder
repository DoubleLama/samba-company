json.array! @maintenances do |maintenance|
  json.id maintenance.id
  json.title maintenance.title
  json.description maintenance.description
  json.price maintenance.price
end

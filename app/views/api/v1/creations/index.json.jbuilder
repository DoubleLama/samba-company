json.array! @creations do |creation|
  json.id creation.id
  json.title creation.title
  json.description creation.description
  json.price creation.price
end

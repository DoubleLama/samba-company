json.array! @websites do |website|
  json.id website.id
  json.name website.name
  json.url website.url
  json.date website.date
  json.status website.status
  json.statusSlug website.statusSlug
  json.image url_for(website.image)
end

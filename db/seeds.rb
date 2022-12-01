# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Locations

puts "Creating locations..."

Location.create!(
    [
        {name: "Kilimani",latitude: -1.283922,longitude: 36.798107},
        {name: "Kasarani",latitude: -1.2208721,longitude: 36.9012224},
        {name: "Kileleshwa",latitude: -1.278319,longitude: 36.784644}

    ]
)

puts "Locations created!"
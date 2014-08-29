# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


puts "Creating Events!"

Events.create(
  [
    {
      name: "Premiere Performing Arts Concert 2014",
      venue: "ACS Barker",
      date: Date.parse('5th May 2014'),
      cost: 20.00,
      time: "7pm"
    },
    {
      name: "blablabla",
      venue: "AsdfdsfBsdfr",
      date: Date.parse("6th May 2015"),
      cost: 20.00,
      time: "7pm"
    },
    {
      name: "blab234labla",
      venue: "AsdfdsfBsdfr",
      date: Date.parse("5th May 2017"),
      cost: 20.00,
      time: "7pm"
    },
    {
      name: "blabl234abwela",
      venue: "AsdfdsfBsdfr",
      date: Date.parse("5th May 2018"),
      cost: 20.00,
      time: "7pm"
    },
    {
      name: "blabl234abla",
      venue: "AsdfdsfBsdfr",
      date: Date.parse("5th May 2019"),
      cost: 20.00,
      time: "7pm"
    },
    {
      name: "blab234labla",
      venue: "AsdfdsfBsdfr",
      date: Date.parse("5th May 2015"),
      cost: 20.00,
      time: "7pm"
    }
  ]
)
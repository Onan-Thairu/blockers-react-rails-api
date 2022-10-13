# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

puts "Creating Blockers..."
Blocker.create([
    {
      description: "Generating A Rails API",
      tag: "ruby",
      solution: "rails new <name_of_app> --api --minimal",
      user_id: "#{User.first.id}"
    },
    {
      description: "ActiveRecord Validations",
      tag: "ruby",
      solution: "https://guides.rubyonrails.org/active_record_validations.html",
      user_id: "#{User.second.id}"
    },
    {
      description: "Proxying API Requests in Development",
      tag: "react",
      solution: "https://create-react-app.dev/docs/proxying-api-requests-in-development/",
      user_id: "#{User.second.id}"
    },
    {
      description: "Conditional Rendering",
      tag: "react",
      solution: "https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator",
      user_id: "#{User.second.id}"
    }
])

puts "Done seeding!"
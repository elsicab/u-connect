# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Profile.destroy_all
Experience.destroy_all
Education.destroy_all

#Users
demo = User.create!(email: "ecaballero3@live.com", password: "password", first_name: "Elsi", last_name: "Cab")
user1 = User.create!(email: "alain@alvarez.com", password: "password1", first_name: "Alain", last_name: "Alvarez")
user2 = User.create!(email: "barney@cab.com", password: "password2", first_name: "Barney", last_name: "Cab")
user3 = User.create!(email: "kathy@pupo.com", password: "password1", first_name: "Katia", last_name: "Pupo")
user4 = User.create!(email: "kenia@kenyi.com", password: "password1", first_name: "Kenia", last_name: "Kenyi")
user5 = User.create!(email: "kevin@bello.com", password: "password1", first_name: "Kevin", last_name: "Bello")
user6 = User.create!(email: "noah@martin.com", password: "password1", first_name: "Noah", last_name: "Martin")
user7 = User.create!(email: "vicky@martin.com", password: "password1", first_name: "Vicky", last_name: "Martin")
user8 = User.create!(email: "greta@navarro.com", password: "password1", first_name: "Greta", last_name: "Navarro")
user9 = User.create!(email: "Deryl@miller.com", password: "password1", first_name: "Deryl", last_name: "Miller")
user10 = User.create!(email: "adamn@marcs.com", password: "password1", first_name: "Adam", last_name: "Marcs")

#Posts
post1 = Post.create!(body: "The best way to learn a new programming language is to build projects with it.", author_id: demo.id)
post2 = Post.create!(body: "Career Change! ", author_id: user1.id)
post3 = Post.create!(body: "Write code, change millions of lives! ", author_id: demo.id)
post4 = Post.create!(body: "Wishing you all a very Happy EngineersDay!", author_id: demo.id)
post5 = Post.create!(body: "The problem with troubleshooting is that trouble shoots back.", author_id: user1.id)
post6 = Post.create!(body: "Computers have lots of memory but no imagination.", author_id: user2.id)
post7 = Post.create!(body: "I won’t be impressed with technology until I can download food.", author_id: user3.id)
post8 = Post.create!(body: "Believe you can and you’re halfway there. ", author_id: user4.id)
# post9 = Post.create!(body: , author_id: )
# post10 = Post.create!(body: , author_id: )
# post11 = Post.create!(body: , author_id: )

#Profiles
profile1 = Profile.create!(user_id: demo.id, pronouns: "She/Her", headline: "Creator of WiredIn ", country: "United States", postal_code: "33183", location: "Miami, FL", industry: "Software Development")

#Educations
education1 = Education.create!(user_id: demo.id, school: "App Academy", degree: "Certificate", field: "Software Development", start: "June 2021", end: "October 2021", activities: "", gpa: "")
education2 = Education.create!(user_id: demo.id, school: "Florida International University", degree: "Bachelor's", field: "Computer Science", start: "May 2018", end: "August 2020", activities: "", gpa: "")
education3 = Education.create!(user_id: demo.id, school: "Florida International University", degree: "Bachelor's", field: "Biology", start: "August 2010", end: "August 2015", activities: "", gpa: "")

#Experiences
experience1 = Experience.create!(user_id: demo.id, title: "Public Adjuster", company: "Ademar, TPAF", location: "Miami, FL", start: "January 2019", end: "current", industry: "Legal/ Insurance", description: "Professional claims handler/claims who advocates for the insured/policyholder in assisting and negotiating that insured's insurance claim. 5+ years of experience on the field.")
experience2 = Experience.create!(user_id: demo.id, title: "Public Adjuster Assistant", company: "Ademar, TPAF", location: "Miami, FL", start: "September 2017", end: "January 2019", industry: "Legal/ Insurance", description: "")
experience3 = Experience.create!(user_id: demo.id, title: "Front Desk", company: "Miami Medical", location: "Miami, FL ", start: "August 2014", end: "June 2017", industry: "Medical", description: "")

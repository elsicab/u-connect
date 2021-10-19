# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Post.destroy_all
Profile.destroy_all
Experience.destroy_all
Education.destroy_all
Comment.destroy_all
Connection.destroy_all
Like.destroy_all

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

#Avatar 
demo.avatar.attach(io: URI.open('https://wiredin-images.s3.amazonaws.com/demo.jpg'), filename: 'demo.jpg')
user1.avatar.attach(io: URI.open('https://wiredin-images.s3.amazonaws.com/user1.jpg'), filename: 'user1.jpg')
user2.avatar.attach(io: URI.open('https://wiredin-images.s3.amazonaws.com/user2.jpg'), filename: 'user2.jpg')
user3.avatar.attach(io: URI.open('https://wiredin-images.s3.amazonaws.com/user3.jpg'), filename: 'user3.jpg')
user4.avatar.attach(io: URI.open('https://wiredin-images.s3.amazonaws.com/user4.jpg'), filename: 'user4.jpg')
user5.avatar.attach(io: URI.open('https://wiredin-images.s3.amazonaws.com/user5.jpg'), filename: 'user5.jpg')
user6.avatar.attach(io: URI.open('https://wiredin-images.s3.amazonaws.com/user6.jpg'), filename: 'user6.jpg')
user7.avatar.attach(io: URI.open('https://wiredin-images.s3.amazonaws.com/user7.jpg'), filename: 'user7.jpg')
user8.avatar.attach(io: URI.open('https://wiredin-images.s3.amazonaws.com/user8.jpg'), filename: 'user8.jpg')
user9.avatar.attach(io: URI.open('https://wiredin-images.s3.amazonaws.com/user9.jpg'), filename: 'user9.jpg')
user10.avatar.attach(io: URI.open('https://wiredin-images.s3.amazonaws.com/user10.jpg'), filename: 'user10.jpg')

#Posts
post1 = Post.create!(body: "The best way to learn a new programming language is to build projects with it.", author_id: demo.id)
post2 = Post.create!(body: "Career Change! ", author_id: user1.id)
post3 = Post.create!(body: "Write code, change millions of lives! ", author_id: demo.id)
post4 = Post.create!(body: "Wishing you all a very Happy EngineersDay!", author_id: demo.id)
post5 = Post.create!(body: "The problem with troubleshooting is that trouble shoots back.", author_id: user1.id)
post6 = Post.create!(body: "Computers have lots of memory but no imagination.", author_id: user2.id)
post7 = Post.create!(body: "I won’t be impressed with technology until I can download food.", author_id: user3.id)
post8 = Post.create!(body: "Believe you can and you’re halfway there. ", author_id: user4.id)
post9 = Post.create!(body: "I'm happy to announce that I have joined IBM as Application Developer- DevOps.", author_id: user5.id)
post10 = Post.create!(body: "I'm looking for a sales managerial position. I have 5+ years floor experience and 2 years as assistant manager.", author_id: user6.id)
post11 = Post.create!(body: "Very happy to have joined WiredIn, can't wait to connect with you all.", author_id: user10.id)


#Comments
comment1 = Comment.create!(body: "Welcome! Glad to have you here.", author_id: demo.id, post_id: post11.id)
comment2 = Comment.create!(body: "Congratulations! Hard work definitely pays off.", author_id: demo.id, post_id: post9.id)
comment3 = Comment.create!(body: "...and that is why engineering will always exist", author_id: user10.id, post_id: post6.id)
comment4 = Comment.create!(body: "Thats the spirit!", author_id: user5.id, post_id: post8.id)
comment5 = Comment.create!(body: "Excited to have you here!", author_id: user9.id, post_id: post11.id)
comment6 = Comment.create!(body: "Welcome", author_id: user9.id, post_id: post11.id)
comment7 = Comment.create!(body: "Congratulations!!. You're going to kill it!", author_id: user8.id, post_id: post2.id)

#Likes
like1 = Like.create!(liker_id: demo.id, likeable_id: post11.id, likeable_type: "post")
like2 = Like.create!(liker_id: user2.id, likeable_id: post11.id, likeable_type: "post")
like3 = Like.create!(liker_id: user5.id, likeable_id: post11.id, likeable_type: "post")
like4 = Like.create!(liker_id: user7.id, likeable_id: post11.id, likeable_type: "post")
like5 = Like.create!(liker_id: user8.id, likeable_id: post11.id, likeable_type: "post")
like6 = Like.create!(liker_id: user1.id, likeable_id: post1.id, likeable_type: "post")
like7 = Like.create!(liker_id: demo.id, likeable_id: post3.id, likeable_type: "post")
like8 = Like.create!(liker_id: demo.id, likeable_id: post5.id, likeable_type: "post")
like9 = Like.create!(liker_id: user3.id, likeable_id: post4.id, likeable_type: "post")
like10 = Like.create!(liker_id: user5.id, likeable_id: post4.id, likeable_type: "post")
like11 = Like.create!(liker_id: user7.id, likeable_id: post4.id, likeable_type: "post")
like12 = Like.create!(liker_id: user10.id, likeable_id: post9.id, likeable_type: "post")
like13 = Like.create!(liker_id: user10.id, likeable_id: post8.id, likeable_type: "post")
like14 = Like.create!(liker_id: user8.id, likeable_id: post8.id, likeable_type: "post")
like15 = Like.create!(liker_id: user2.id, likeable_id: post1.id, likeable_type: "post")
like16 = Like.create!(liker_id: user3.id, likeable_id: post1.id, likeable_type: "post")
like17= Like.create!(liker_id: user7.id, likeable_id: post1.id, likeable_type: "post")
like18 = Like.create!(liker_id: user9.id, likeable_id: post2.id, likeable_type: "post")
like19 = Like.create!(liker_id: user10.id, likeable_id: post3.id, likeable_type: "post")
like20 = Like.create!(liker_id: user10.id, likeable_id: post6.id, likeable_type: "post")


#Connections
connection1 = Connection.create!(connector_id: demo.id, connected_id: user1.id)
connection2 = Connection.create!(connector_id: demo.id, connected_id: user2.id)
connection3 = Connection.create!(connector_id: demo.id, connected_id: user3.id)
connection4 = Connection.create!(connector_id: demo.id, connected_id: user4.id)
connection5 = Connection.create!(connector_id: demo.id, connected_id: user5.id)
connection6 = Connection.create!(connector_id: demo.id, connected_id: user6.id)
connection7 = Connection.create!(connector_id: demo.id, connected_id: user7.id)
connection8 = Connection.create!(connector_id: demo.id, connected_id: user8.id)
connection9 = Connection.create!(connector_id: demo.id, connected_id: user9.id)
connection10 = Connection.create!(connector_id: demo.id, connected_id: user10.id)
connection11 = Connection.create!(connector_id: user2.id, connected_id: user1.id)
connection12 = Connection.create!(connector_id: user3.id, connected_id: user1.id)
connection13 = Connection.create!(connector_id: user4.id, connected_id: user1.id)
connection14 = Connection.create!(connector_id: user5.id, connected_id: user1.id)
connection15 = Connection.create!(connector_id: user3.id, connected_id: user2.id)
connection16 = Connection.create!(connector_id: user9.id, connected_id: user1.id)
connection17 = Connection.create!(connector_id: user10.id, connected_id: user1.id)
connection18 = Connection.create!(connector_id: user6.id, connected_id: user1.id)
connection19 = Connection.create!(connector_id: user3.id, connected_id: user9.id)
connection20 = Connection.create!(connector_id: user4.id, connected_id: user3.id)
connection21 = Connection.create!(connector_id: user5.id, connected_id: user4.id)

#Profiles
profile1 = Profile.create!(user_id: demo.id, pronouns: "She/Her", headline: "Creator of WiredIn ", country: "United States", postal_code: "33183", location: "Miami, FL", industry: "Software Development")
profile2 = Profile.create!(user_id: user1.id, pronouns: "He/Him", headline: "Anyone hiring?", country: "United States", postal_code: "33183", location: "Miami, FL", industry: "Finance")
profile3 = Profile.create!(user_id: user2.id, pronouns: "He/Him", headline: "It's a dogs world ", country: "United States", postal_code: "33183", location: "Miami, FL", industry: "Sleeping")

#Educations
education1 = Education.create!(user_id: demo.id, school: "App Academy", degree: "Certificate", field: "Software Development", start: "June 2021", end: "October 2021", activities: "", gpa: "")
education2 = Education.create!(user_id: demo.id, school: "Florida International University", degree: "Bachelor's", field: "Computer Science", start: "May 2018", end: "August 2020", activities: "", gpa: "")
education3 = Education.create!(user_id: demo.id, school: "Florida International University", degree: "Bachelor's", field: "Biology", start: "August 2010", end: "August 2015", activities: "", gpa: "")
education4 = Education.create!(user_id: user1.id, school: "Florida International University", degree: "Bachelor's", field: "Finance", start: "August 2010", end: "August 2013", activities: "", gpa: "")

#Experiences
experience1 = Experience.create!(user_id: demo.id, title: "Public Adjuster", company: "Ademar, TPAF", location: "Miami, FL", start: "January 2019", end: "current", industry: "Legal/ Insurance", description: "Professional claims handler/claims who advocates for the insured/policyholder in assisting and negotiating that insured's insurance claim. 5+ years of experience on the field.")
experience2 = Experience.create!(user_id: demo.id, title: "Public Adjuster Assistant", company: "Ademar, TPAF", location: "Miami, FL", start: "September 2017", end: "January 2019", industry: "Legal/ Insurance", description: "")
experience3 = Experience.create!(user_id: demo.id, title: "Front Desk", company: "Miami Medical", location: "Miami, FL ", start: "August 2014", end: "June 2017", industry: "Medical", description: "")
experience4 = Experience.create!(user_id: user1.id, title: "Home Health Administrator", company: "Daily Home Health", location: "Miami, FL", start: "February 2015", end: "current", industry: "Medical", description: "")
experience5 = Experience.create!(user_id: user1.id, title: "Public Adjuster", company: "Citizens Claims", location: "Miami, FL ", start: "May 2020", end: "June 2021", industry: "Insurance", description: "")

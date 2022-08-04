require 'faker'

puts '🌱 seeding data...'

User.create(username: "test", email: "test@test.com", password: "test")

20.times do
    User.create(username: Faker::Internet.username, email: Faker::Internet.email, password_digest: Faker::Internet.password)
end

50.times do 
    Conversation.create(name: Faker::Company.catch_phrase)
end

1000.times do
    Message.create(message: Faker::Lorem.sentences(number: 1), user_id: User.ids.sample, conversation_id: Conversation.ids.sample)
end

1000.times do
    Member.create(user: User.all.sample, conversation: Conversation.all.sample)
end

puts 'seed planted! ✅'
require 'faker'

puts '🌱 seeding data...'

5.times do
    User.create(username: Faker::Internet.username, email: Faker::Internet.email, password_digest: Faker::Internet.password)
end

10.times do 
    Conversation.create()
end

30.times do
    Message.create(message: Faker::Lorem.sentences(number: 1), user_id: User.ids.sample, conversation_id: Conversation.ids.sample)
end

puts 'seed planted! ✅'
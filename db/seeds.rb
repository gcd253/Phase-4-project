require 'faker'

puts '🌱 seeding data...'

5.times do
    User.create(username: Faker::Internet.username, email: Faker::Internet.email, password_digest: Faker::Internet.password)
end

30.times do
    Message.create(chat_message: Faker::Lorem.sentences(number: 1))
end

10.times do 
    Conversation.create(user_id: User.ids.sample, message_id: Message.ids.sample)
end


puts 'seed planted! ✅'
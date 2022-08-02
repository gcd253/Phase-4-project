require 'faker'

puts '🌱 seeding data...'

User.create(username: "test", email: "test@test.com", password_digest: "2a$12$TLzO7.lnLIBA5aMihvIcKeczuTnpJ8xrOG3qrRrgnqPLgJs6sYEzq")

5.times do
    User.create(username: Faker::Internet.username, email: Faker::Internet.email, password_digest: Faker::Internet.password)
end

10.times do 
    Conversation.create(name: Faker::Company.catch_phrase)
end

30.times do
    Message.create(message: Faker::Lorem.sentences(number: 1), user_id: User.ids.sample, conversation_id: Conversation.ids.sample)
end

100.times do
    Member.create(user: User.all.sample, conversation: Conversation.all.sample)
end

puts 'seed planted! ✅'
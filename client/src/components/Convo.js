import Message from './Message'
import Danger from './Danger'
import NewMessage from './NewMessage'
import { useState, useEffect } from 'react'

function Convo({ convo, user, handleBack, onLeaveChat, handleLogout, onDanger, danger }) {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        fetch(`/conversations/${convo.id}`)
            .then(res => res.json())
            .then(data => {
                setMessages(data.messages)
            })
    }, [])

    useEffect(() => {
        scrollToBottom("messages-container")
        setTimeout(()=>{scrollToBottom("messages-container")}, 1000)
        setTimeout(()=>{scrollToBottom("messages-container")}, 2000)
    },[messages])

    function handleNewMessage(input) {

        let newMessage = { "user_id": user.id, "message": input, "conversation_id": convo.id }

        fetch("/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newMessage)
        }).then(res => res.json())
            .then(data => {
                setMessages([...messages, data])
            })

        if (Math.random() < .3) {
            console.log("danger!")
            onDanger()
        }

    }

    function handleLeave() {
        const memberId = convo.members.filter(member => member.user_id === user.id)
        onLeaveChat(memberId[0])
    }

    const scrollToBottom = (id) => {
        if (!danger) {
            const element = document.getElementById(id);
            element.scrollTop = element.scrollHeight;
        }
    }

    return <div id="convo-container">
        {danger ?
            <Danger user={user} handleLogout={handleLogout} /> :
            <div>
                <button className="back-button" onClick={handleBack}>⬅</button>
                <div className="convo" id="messages-container">
                    {messages.map(message =>
                        <Message
                            username={user.username}
                            key={message.id}
                            message={message}
                            user={message.user}
                        />)}
                </div>
                <div id="new-message-container">
                    <div id="new-message">
                        <NewMessage
                            user={user}
                            convo={convo}
                            sendMessage={handleNewMessage}
                        />
                    </div>
                    <button className="leave-chat-button" onClick={handleLeave}>Leave Chat</button>
                </div>
            </div>}

    </div>
}

export default Convo
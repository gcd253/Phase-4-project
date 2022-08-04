import Message from './Message'
import Danger from './Danger'
import NewMessage from './NewMessage'
import { useState, useEffect } from 'react'

function Convo({ convo, user, handleBack, onLeaveChat, handleLogout, onDanger, danger, formatDateTime }) {

    const [messages, setMessages] = useState([])
    const [convoName, setConvoName] = useState(convo.name)
    const [edit, setEdit] = useState(false)

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

        if (Math.random() < .2) {
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

    function handleNewName(e){
        e.preventDefault()
        fetch(`/conversations/${convo.id}`,{
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({"name": convoName})
        }).then(res=>res.json())
        .then(data=>{
            setConvoName(data.name)
            setEdit(false)
        })
    }

    function handleChangeName(e){
        setConvoName(e.target.value)
    }

    function handleSelectName(){
        setEdit(true)
    }

    return <div id="convo-container">
        {danger ?
            <Danger user={user} handleLogout={handleLogout} /> :
            <div>
                <div>{edit?
                <form onSubmit={handleNewName}><input className="change-name" value={convoName} onChange={handleChangeName}></input></form>:
                <h1 onClick={handleSelectName} className="conversation-title">{convoName}</h1>}</div>

                <button className="back-button" onClick={handleBack}>⬅</button>
                <div className="convo" id="messages-container">
                    {messages.map(message =>
                        <Message
                            user={user}
                            key={message.id}
                            message={message}
                            formatDateTime={formatDateTime}
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
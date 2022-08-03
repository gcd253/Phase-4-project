import Message from './Message'
import Danger from './Danger'
import NewMessage from './NewMessage'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Convo({convo, user, handleBack, rescueId, onLeaveChat}){

    const [messages, setMessages] = useState([])
    const navigate = useNavigate();
    const [danger, setDanger] = useState(false)

    // console.log(convo)

    useEffect(()=>{
        fetch(`/conversations/${convo.id}`)
        .then(res=>res.json())
        .then(data=>{setMessages(data.messages)
            console.log(data.messages)
        })
    },[])

    function handleNewMessage(input){

        console.log(user)
        console.log(convo)
        let newMessage = {"user_id": user.id, "message": input, "conversation_id": 1}
        fetch("/messages",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newMessage)
        }).then(res=>res.json())
        .then(data=>setMessages([...messages, data]))
        if(Math.random() < .3){
            console.log("danger!")
            setDanger(true)
        }
        
    }

    function handleLeave() {
        const memberId = convo.members.filter(member => member.user_id == user.id)
        onLeaveChat(memberId[0])
    }

    return <div id="convo-container">
        {danger?
        <Danger />:
        <div>
        <button className="back-button" onClick={handleBack}>⬅</button>
        <div id="messages-container">
        {messages.map(message=><Message username={user.username} key={message.id} message={message} user={message.user}/>)}
        </div>
        <div id="new-message">
            <NewMessage user={user} convo={convo} sendMessage={handleNewMessage}/>
        </div>
        <button onClick={handleLeave}>Leave Chat</button>
        </div>}

    </div>
}

export default Convo
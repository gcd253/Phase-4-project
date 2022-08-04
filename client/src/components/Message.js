import {useState, useEffect} from 'react'

function Message({message, user, formatDateTime}){

    const [actualMessage, setActualMessage] = useState({user:{username: "..."}})

    useEffect(()=>{
        fetch(`/messages/${message.id}`)
        .then(res=>res.json())
        .then(data=>setActualMessage(data))
    },[message.id])

    return <div id="message-container">
        <div className={`messages-div${message.user_id === user.id ? " user-messages" : ""}`} id={message.id}>
        <p>{actualMessage.user.username} says:</p>
        <p>{message.message}</p>
    </div>
        <div className={`message-time${message.user_id === user.id ? " user-timestamp" : ""}`}>
            <p>{formatDateTime(message.created_at)}</p>
        </div>
    </div> 
}

export default Message
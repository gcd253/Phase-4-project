import {useState, useEffect} from 'react'

function Message({message, user, formatDateTime}){

    console.log(message)

    const [actualMessage, setActualMessage] = useState({user:{username: "loading..."}})

    useEffect(()=>{
        fetch(`/messages/${message.id}`)
        .then(res=>res.json())
        .then(data=>setActualMessage(data))
    },[message.id])

    return <div id="message-container">
        <div className={`messages-div${actualMessage.user.id === user.id ? " user-messages" : ""}`} id={message.id}>
        <p>{actualMessage.user.username} says:</p>
        <p>{message.message}</p>
    </div>
        <div className={`message-time${actualMessage.user.username === user.username ? " user-timestamp" : ""}`}>
            <p>{formatDateTime(message.created_at)}</p>
        </div>
    </div> 
}

export default Message
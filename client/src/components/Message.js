import {useState, useEffect} from 'react'

function Message({message, username}){

    const [actualMessage, setActualMessage] = useState({user:{username: "loading..."}})

    function formatDateTime(dateString) {
        const dateTime = new Date(dateString)
        const array = dateTime.toString().split("", 21)

        return array
    }

    useEffect(()=>{
        fetch(`/messages/${message.id}`)
        .then(res=>res.json())
        .then(data=>setActualMessage(data))
    },[message.id])

    return <div id="message-container">
        <div className={`messages-div${actualMessage.user.username === username ? " user-messages" : ""}`} id={message.id}>
        <p>{actualMessage.user.username} says:</p>
        <p>{message.message}</p>
    </div>
        <div className={`message-time${actualMessage.user.username === username ? " user-timestamp" : ""}`}>
            <p>{formatDateTime(message.created_at)}</p>
        </div>
    </div> 
}

export default Message
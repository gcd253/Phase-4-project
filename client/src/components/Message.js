import {useState, useEffect} from 'react'

function Message({message, username}){

    const [actualMessage, setActualMessage] = useState({user:{username: "loading..."}})

    useEffect(()=>{
        fetch(`/messages/${message.id}`)
        .then(res=>res.json())
        .then(data=>setActualMessage(data))
    },[message.id])

    return <div className={`messages-div${actualMessage.user.username === username ? " user-messages" : ""}`} id={message.id}>
        <p>{actualMessage.user.username} says:</p>
        <p>{message.message}</p>
        <p>{message.created_at}</p>
    </div>
}

export default Message
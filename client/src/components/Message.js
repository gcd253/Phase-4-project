import {useState, useEffect} from 'react'

function Message({message, username}){

    const [actualMessage, setActualMessage] = useState({user:{username: "loading..."}})

    useEffect(()=>{
        fetch(`/messages/${message.id}`)
        .then(res=>res.json())
        .then(data=>setActualMessage(data))
    },[])
    
    // console.log(username.username)
    // console.log('------separate------')
    // console.log(actualMessage.user.username)

    return <div className={`messages-div${actualMessage.user.username === username ? " user-messages" : ""}`} id={message.id}>
        <p>{actualMessage.user.username} says:</p>
        <p>{message.message}</p>
        <p>{message.created_at}</p>
    </div>
}

export default Message
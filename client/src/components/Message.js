import {useState, useEffect} from 'react'

function Message({message}){

    const [actualMessage, setActualMessage] = useState({user:{username: "loading..."}})

    useEffect(()=>{
        fetch(`/messages/${message.id}`)
        .then(res=>res.json())
        .then(data=>setActualMessage(data))
    },[])
    

    return <div id={message.id}>
        <p>{actualMessage.user.username} says:</p>
        <p>{message.message}</p>
        <p>{message.created_at}</p>
    </div>
}

export default Message
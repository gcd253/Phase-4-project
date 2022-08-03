import {useState, useEffect} from 'react'

function Message({message, username}){

    const [actualMessage, setActualMessage] = useState({user:{username: "loading..."}})

    useEffect(()=>{
        fetch(`/messages/${message.id}`)
        .then(res=>res.json())
        .then(data=>setActualMessage(data))
    },[])
    
<<<<<<< HEAD
    // console.log(username.username)
    // console.log('------separate------')
    // console.log(actualMessage.user.username)
=======
    console.log(username.username)
    console.log(actualMessage.user.username)
>>>>>>> 0a80c54472f69469d9ed0bc2fe9257d753145405

    return <div className={`messages-div${actualMessage.user.username === username ? " user-messages" : ""}`} id={message.id}>
        <p>{actualMessage.user.username} says:</p>
        <p>{message.message}</p>
        <p>{message.created_at}</p>
    </div>
}

export default Message
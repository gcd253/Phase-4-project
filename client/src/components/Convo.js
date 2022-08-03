import Message from './Message'
import NewMessage from './NewMessage'
import {useState, useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'

function Convo({convo, user, handleBack, rescueId}){

    const [messages, setMessages] = useState([])
    // const navigate = useNavigate();

    useEffect(()=>{
        fetch(`/conversations/1`)
        .then(res=>res.json())
        .then(data=>{setMessages(data.messages)
            console.log(data.messages)
        })
    },[])

    function handleNewMessage(input){

        console.log(user)
        console.log(convo)
        let newMessage = {user: user, message: input, conversation_id: 1}
        fetch("/messages",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newMessage)
        }).then(res=>res.json())
        .then(data=>setMessages([...messages, data]))
        // if(Math.random < .3){
        //     navigate('/danger')
        // }
        
    }

    return <div>
        <button className="back-button" onClick={handleBack}>⬅</button>
        <div id="messages-container">
        {messages.map(message=><Message username={user.username} key={message.id} message={message} user={message.user}/>)}
        </div>
        <div id="new-message">
            <NewMessage user={user} convo={convo} sendMessage={handleNewMessage}/>
        </div>
    </div>
}

export default Convo
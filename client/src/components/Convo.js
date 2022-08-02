import Message from './components/Message'
import NewMessage from './components/NewMessage'
import {useState, useEffect} from 'react'

function Convo({convo, user}){

    const [messages, setMessages] = useState([])

    useEffect(()=>{
        fetch(`/conversations/${convo.id}/messages`)
        .then(res=>res.json())
        .then(data=>setMessages(data.messages))
    },[])

    function handleNewMessage(newMessage){
        fetch("/messages",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newMessage)
        })
        if(Math.random < .3){
            navigate.push('/danger')
        }
        setMessages([...messages, newMessage])
    }

    return <div>
        <div id="messages-container">
        {messages.map(message=><Message id={message.id} message={message} user={user}/>)}
        </div>
        <div id="new-message">
            <NewMessage convo={convo} sendMessage={handleNewMessage}/>
        </div>
    </div>
}

export default Convo
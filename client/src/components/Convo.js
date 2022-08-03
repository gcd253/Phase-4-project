import Message from './Message'
import NewMessage from './NewMessage'
import {useState, useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'

function Convo({convo, user, handleBack}){

    const [messages, setMessages] = useState([])
    // const navigate = useNavigate();

    useEffect(()=>{
        fetch(`/conversations/${convo.id}`)
        .then(res=>res.json())
        .then(data=>setMessages(data.messages))
    },[])

    function fetchMessages() {
        fetch(`/conversations/${convo.id}`)
        .then(res=>res.json())
        .then(data=>setMessages(data.messages))
    }

    function handleNewMessage(newMessage){
        fetch("/messages",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newMessage)
        })
        // if(Math.random < .3){
        //     navigate('/danger')
        // }
        setMessages([...messages, newMessage])
    }

    return <div>
        <button className="back-button" onClick={handleBack}>⬅</button>
        <div id="messages-container">
        {messages.map(message=><Message id={message.id} message={message} user={user}/>)}
        </div>
        {/* <div id="new-message">
            <NewMessage user={user} convo={convo} sendMessage={handleNewMessage}/>
        </div> */}
    </div>
}

export default Convo
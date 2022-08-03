import {useState, useEffect} from 'react'

function NewMessage({user, convo, sendMessage}){

    const [newMessage, setNewMessage] = useState({})

    useEffect(()=>{
        setNewMessage({user_id: user.id, message: "", conversation_id: 1})
    },[])

    function handleSubmit(){
        sendMessage(newMessage)
    }

    function handleChange(e){
        setNewMessage(e.target.value)
    }

    return <div>
        <h3>New message:</h3>
        <form onSubmit={handleSubmit}>
        <input type="text" value={newMessage.message} onChange={handleChange}/>
        <input type="submit" value="Submit" />
    </form></div>
}


export default NewMessage
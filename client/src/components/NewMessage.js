import {useEffect, useState} from 'react'

function NewMessage({convo, sendMessage}){

    const [newMessage, setNewMessage] = useState({author: user, content: "", convo: convo})

    function handleSubmit(){
        sendMessage(newMessage)
    }

    function handleChange(e){
        setNewMessage(e.target.value)
    }

    return <form onSubmit={handleSubmit}>
        <text-input value={newMessage.content} onChange={handleChange}></text-input>
    </form>
}


export default NewMessage
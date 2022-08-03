import {useState, useEffect} from 'react'

function NewMessage({sendMessage}){

    const [newMessage, setNewMessage] = useState("")

    function handleSubmit(e){
        e.preventDefault()
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
import {useState} from 'react'

function NewMessage({sendMessage}){

    const [newMessage, setNewMessage] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        sendMessage(newMessage)
        setNewMessage("")
    }

    function handleChange(e){
        setNewMessage(e.target.value)
    }

    return <div id="message-container">
        <h3 id="new-message-lable">New message:</h3>
        <form onSubmit={handleSubmit}>
        <input id="text-input" type="text" value={newMessage} onChange={handleChange}/>
        <input className="form-button" type="submit" value="Send" />
    </form></div>
}


export default NewMessage
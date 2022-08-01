import {useEffect, useState} from 'react'

function NewMessage({convo, sendMessage}){

    const [newMessage, setNewMessage] = useState({author: user, content: "", convo: convo})

    function handleSubmit(){
        sendMessage(newMessage)
    }

    return <form>
        <text-input></text-input>
    </form>
}


export default NewMessage
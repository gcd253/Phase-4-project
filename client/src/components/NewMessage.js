import {useState, useEffect} from 'react'

function NewMessage({user, convo, sendMessage}){

    const [newMessage, setNewMessage] = useState({})

    console.log(convo)

    useEffect(()=>{
        setNewMessage = {user_id: user.id, message: "", conversation_id: convo.id}
    },[])

    function handleSubmit(){
        sendMessage(newMessage)
    }

    function handleChange(e){
        setNewMessage(e.target.value)
    }

    return <form onSubmit={handleSubmit}>
        <text-input value={newMessage.message} onChange={handleChange}></text-input>
    </form>
}


export default NewMessage
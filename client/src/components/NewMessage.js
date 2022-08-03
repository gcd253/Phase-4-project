import {useState, useEffect} from 'react'

function NewMessage({sendMessage, user}){

    const [newMessage, setNewMessage] = useState("")

    // useEffect(()=>{
    //     setNewMessage({user_id: user.id, message: "", conversation_id: 1})
    // },[])

    function handleSubmit(e){
        e.preventDefault()
        sendMessage(newMessage)
        setNewMessage("")
    }

    // console.log(convo) number 1

    function handleChange(e){
        setNewMessage(e.target.value)
    }

    return <div>
        <h3>New message:</h3>
        <form onSubmit={handleSubmit}>
        <input type="text" value={newMessage} onChange={handleChange}/>
        <input type="submit" value="Send" />
    </form></div>
}


export default NewMessage
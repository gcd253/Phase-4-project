import ConvoCard from './ConvoCard'
import Convo from './Convo'
import {useState, useEffect} from 'react'

function Inbox({user}){

    const [convos, setConvos] = useState([])
    const [selectedMessage, setSelectedMessage] = useState([])

    //fix this
    useEffect(()=>{
        fetch('/inbox')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setConvos(data)
        })
    },[])

    function handleBack(){
        setSelectedMessage([])
    }

    return (
        <div>
        {(selectedMessage.length === 1)?
            <div id="container">
                <h1>Welcome, {user.username}</h1>
                <div id="inbox">{convos.map(convo=><ConvoCard key={convo.id} convo={convo} user={user}/>)}
                </div>
            </div>:
            <Convo convo={selectedMessage[0]} user={user} handleBack={handleBack}/>
        }</div>)
}

export default Inbox
import ConvoCard from './ConvoCard'
import {useState, useEffect} from 'react'

function Inbox({user}){

    const [convos, setConvos] = useState([])

    //fix this
    useEffect(()=>{
        fetch('/inbox')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setConvos(data)
        })
    },[])

    return <div id="container">
        <h1>Welcome, {user.username}</h1>
        <div id="inbox">{convos.map(convo=><ConvoCard key={convo.id} convo={convo} user={user}/>)}
        </div>
        </div>;
}

export default Inbox
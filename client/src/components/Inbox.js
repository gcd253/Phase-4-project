import ConvoCard from './ConvoCard'
import {useState, useEffect} from 'react'

function Inbox({user}){

    const [convos, setConvos] = useState([])

    //fix this
    useEffect(()=>{
        fetch('http://localhost:3000/conversations')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setConvos(data)
        })
    },[])

    return <div id="container">
        <h1>Welcome, {user.name}</h1>
        <div id="inbox">{convos.map(convo=><ConvoCard id={convo.id} convo={convo} user={user}/>)}
        </div>
        </div>;
}

export default Inbox
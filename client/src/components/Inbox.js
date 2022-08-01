import ConvoCard from './components/ConvoCard'
import {useState, useEffect} from 'react'

function Inbox({user}){

    const [convos, setConvos] = useState([])

    useEffect(()=>{
        fetch(`.../users/${user.id}/convos`)
        .then(res=>res.json)
        .then(data=>setConvos(data))
    },[])

    return <div id="container">
        <h1>Welcome, {user.name}</h1>
        <div id="inbox">{convos.map(convo=><ConvoCard id={convo.id} convo={convo} user={user}/>)}
        </div>
        </div>;
}

export default Inbox
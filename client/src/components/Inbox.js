import Convo from './components/Convo'
import {useState, useEffect} from 'react'

function Inbox({user}){

    const [convos, setConvos] = useState([])

    useEffect(()=>{
        fetch("/convos")
        .then(res=>res.json)
        .then(data=>setConvos(data))
    },[])

    return <div id="container">
        <h1>Welcome, {user.name}</h1>
        <div id="inbox">{convos.map(convo=><Convo id={convo.id} convo={convo} />)}
        </div>
        </div>;
}

export default Inbox
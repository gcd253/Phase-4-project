import ConvoCard from './ConvoCard'
import Convo from './Convo'
import {useState, useEffect} from 'react'
import Loader from './Loader'

function Inbox({user}){

    const [convos, setConvos] = useState([])
    const [selected, setSelected] = useState([])

    //fix this
    useEffect(()=>{
        fetch('/inbox')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setConvos(data)
        })
    },[])

    function handleSelect(convo){
        setSelected(selected.push(convo))
        console.log(convo)
    }

    function handleBack(){
        setSelected([])
    }
    // console.log(selected) number 1
    return (
        <div>
        {(selected.length === 0)?
            <div id="container">
                <h1 className="welcome-banner" >Welcome, {user.username}</h1>
                <div id="inbox">{convos.map(convo=><ConvoCard key={convo.id} convo={convo} user={user} handleSelect={handleSelect}/>)}
                </div>
            </div>:
           <Convo convo={selected} user={user} handleBack={handleBack}/>
        }</div>)
}

export default Inbox
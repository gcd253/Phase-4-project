import ConvoCard from './ConvoCard'
import Convo from './Convo'
import {useState, useEffect} from 'react'

function Inbox({user}){

    const [convos, setConvos] = useState([])
    const [selected, setSelected] = useState([])
    // let selection = false;

    //fix this
    useEffect(()=>{
        fetch('/inbox')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setConvos(data)
        })
    },[])

    // useEffect(()=>{
    //     console.log("triggered")
    //     if(selected.length > 0){
    //         selection = true
    //     }else{
    //         selection = false
    //     }
    // },[selected])

    function handleSelect(convo){
        setSelected([convo])
    }

    function handleBack(){
        setSelected([])
    }

    return (
        <div>
        {(selected.length == 0)?
            <div id="container">
                <h1 className="welcome-banner" >Welcome, {user.username}</h1>
                <div id="inbox">{convos.map(convo=><ConvoCard key={convo.id} convo={convo} user={user} handleSelect={handleSelect} rescueId={convo.id}/>)}
                </div>
            </div>:
           <Convo convo={selected[0]} user={user} handleBack={handleBack}/>
        }</div>)
}

export default Inbox
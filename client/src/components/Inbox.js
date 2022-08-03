import ConvoCard from './ConvoCard'
import Convo from './Convo'
import {useState, useEffect} from 'react'
import Loader from './Loader'

function Inbox({user}){

    const [convos, setConvos] = useState([])
    const [selected, setSelected] = useState([])
    // let selection = false;

    //fix this
    useEffect(()=>{
        fetch('/inbox')
        .then(res=>res.json())
        .then(data=>{
            setConvos(data)
        })
    },[])

    function handleSelect(convo){
        setSelected([convo])
    }

    function handleBack(){
        setSelected([])
    }

    function handleClick() {
        console.log('Create a new conversation and invite members')
    }

    function handleLeave(member) {
        fetch(`/members/${member.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
            }
        }).then(r => r.json())
        .then(data => {
            setConvos(convos.filter(convo => convo.id !== data.convo_id))
        })
        
        handleBack()
    }

    return (
        <div>
        {(selected.length == 0)?
            <div id="container">
                <h1 className="welcome-banner" >Welcome, {user.username}</h1>
                <button className="back-button add-new" onClick={handleClick}>+</button>
                <div id="inbox">{convos.map(convo=><ConvoCard key={convo.id} convo={convo} user={user} handleSelect={handleSelect} rescueId={convo.id}/>)}
                </div>
            </div>:
           <Convo convo={selected[0]} user={user} handleBack={handleBack} onLeaveChat={handleLeave} />
        }</div>)
}

export default Inbox
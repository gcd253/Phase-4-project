import ConvoCard from './ConvoCard'
import Convo from './Convo'
import {useState, useEffect} from 'react'
import NewConvo from './NewConvo'

function Inbox({user, onLogout}){

    const [convos, setConvos] = useState([])
    const [selected, setSelected] = useState([])
    const [newConvo, setNewConvo] = useState(false)
    const [danger, setDanger] = useState(false)
    const [fire, setFire] = useState(false)

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

    function handleLogout(){
        danger?
        console.log("no escape"):
        fetch('/logout', {
            method: "DELETE",
            headers:{"Content-Type":"application/json"}})
        .then(onLogout())
    }

    function handleAddConvo(newConvo) {
        setConvos([...convos, newConvo])
        setNewConvo(false)
    }

    function handleCreateConvo(){
        setNewConvo(true)
    }

    function handleDanger(){
        setDanger(true)
    }

    function formatDateTime(dateString) {
        const dateTime = new Date(dateString)
        const array = dateTime.toString().split("", 21)

        return array
    }

    function handleFire(){
        setFire(!fire)
    }

    return (
        <div id="inbox-container">
            <h1 id="banner" onClick={handleFire}><img className={fire?"fire-gif":"fire-gif-off"} src="https://blog.joypixels.com/content/images/2019/06/fire_1024.gif" alt="rad freakin' flames"/> DANGER CHAT <img className={fire?"fire-gif":"fire-gif-off"} src="https://blog.joypixels.com/content/images/2019/06/fire_1024.gif" alt="rad freakin' flames"/></h1>
            <button id="logout" className="logout-button" onClick={handleLogout}>Logout</button>
        {(newConvo === true)?
        <NewConvo user={user} onAddConvo={handleAddConvo} />:
        ((selected.length === 0)?
            <div id="container">
                <h1 className="welcome-banner" >Welcome, {user.username}</h1>
                <button className="back-button add-new" onClick={handleCreateConvo}>+</button>
                <div className="inbox" id="inbox">{convos.map(convo=>
                    <ConvoCard
                        key={convo.id}
                        convo={convo}
                        handleSelect={handleSelect}
                        formatDateTime={formatDateTime}
                    />)}
                </div>
            </div>:
           <Convo
                convo={selected[0]}
                user={user}
                handleBack={handleBack}
                onLeaveChat={handleLeave}
                handleLogout={onLogout}
                danger={danger}
                onDanger={handleDanger}
                formatDateTime={formatDateTime}
            />
        )}</div>)
}

export default Inbox
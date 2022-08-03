import ConvoCard from './ConvoCard'
import Convo from './Convo'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Loader from './Loader'
import NewConvo from './NewConvo'

function Inbox({user, onLogout}){

    const [convos, setConvos] = useState([])
    const [selected, setSelected] = useState([])
    // let selection = false;
    const [showForm, setShowForm] = useState(false)

    const navigate = useNavigate()

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
        setShowForm(true)
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
        fetch('/logout').then(onLogout())
    }

    function handleAddConvo(newConvo) {
        setConvos(...convos, newConvo)
    }

    return (
        <div>
            <h1 id="banner">DANGER CHAT</h1>
            <button id="logout" onClick={handleLogout}>Logout</button>
        {(selected.length == 0)?
            <div id="container">
                <h1 className="welcome-banner" >Welcome, {user.username}</h1>
                {/* <NewConvo user={user} onAddConvo={handleAddConvo} /> */}
                <button className="back-button add-new" onClick={handleClick}>+</button>
                <div id="inbox">{convos.map(convo=><ConvoCard key={convo.id} convo={convo} user={user} handleSelect={handleSelect} rescueId={convo.id}/>)}
                </div>
            </div>:
           <Convo convo={selected[0]} user={user} handleBack={handleBack} onLeaveChat={handleLeave} handleLogout={onLogout}/>
        }</div>)
}

export default Inbox
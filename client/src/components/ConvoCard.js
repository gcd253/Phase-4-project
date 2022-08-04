function ConvoCard({convo, handleSelect, formatDateTime}){

    function handleClick(){
        handleSelect(convo)
    }

    return <div className="convo-card" id={convo.id} onClick={handleClick}>
        <p className="convo-title" >{convo.name}</p>
        <p>{convo.users.map(user => user.username).join(", ")}</p>
        <p>{formatDateTime(convo.updated_at)}</p>
    </div>
}

export default ConvoCard
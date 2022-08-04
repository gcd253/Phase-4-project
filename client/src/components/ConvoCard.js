
function ConvoCard({convo, user, handleSelect}){

    function handleClick(){
        handleSelect(convo)
        //navigate to this convo's page
        console.log(convo)

    }

    return <div className="convo-card" id={convo.id} onClick={handleClick}>
        <p>{convo.name}</p>
        <p>{convo.users.map(user => user.username).join(", ")}</p>
        <p>{convo.updated_at}</p>
    </div>
}

export default ConvoCard
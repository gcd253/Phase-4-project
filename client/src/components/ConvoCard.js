

function ConvoCard({convo, user}){


    function handleClick(){
        //navigate to this convo's page
    }

    return <div id={convo.id} onClick={handleClick}>
        <p>{convo.name}</p>
        <p>{convo.users.join(", ")}</p>
        <p>{convo.updated_at}</p>
    </div>
}

export default ConvoCard
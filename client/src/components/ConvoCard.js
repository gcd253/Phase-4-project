

function ConvoCard({convo, user}){


    function handleClick(){
        navigate.push(???)
    }

    return <div id={convo.id} onClick={handleClick}>
        <p>{convo.name}, {convo.users.join(", ")}, {convo.updated_at}</p>
    </div>
}

export default ConvoCard
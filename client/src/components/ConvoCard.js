import { useNavigate } from 'react-router-dom'

function ConvoCard({convo, user}){

    let navigate = useNavigate()

    function handleClick(){
        console.log(convo.id)
        //navigate to this convo's page

    }
    console.log(convo)

    return <div id={convo.id} onClick={handleClick}>
        <p>{convo.name}</p>
        <p>{convo.users.map(user => user.username).join(", ")}</p>
        <p>{convo.updated_at}</p>
    </div>
}

export default ConvoCard
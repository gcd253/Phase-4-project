

function Message({message}){

    return <div>
        <p>{message.author}</p>
        <p>{message.content}</p>
        <p>{message.created_at}</p>
    </div>
}

export default Message
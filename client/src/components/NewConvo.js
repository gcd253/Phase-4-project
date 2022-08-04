import {React, useEffect, useState} from 'react'


const NewConvo = ({user, onAddConvo}) => {
  const [friends, setFriends] = useState([])
  const [added, setAdded] = useState([user])
  const [newConvoName, setNewConvoName] = useState("")

  useEffect(() => {
    fetch('/users')
      .then(res => res.json())
      .then(data => setFriends(data.filter(friend => friend.id !== user.id)))
  }, [user.id])

  function handleAddFriend(friend) {
    console.log(added)
    if(added.includes(friend)){
      setAdded(added.filter(pal => friend.id !== pal.id))
    }
    else{
      setAdded([...added, friend])
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/conversations', {
      method: "POST", 
      headers: {
        "Content-Type" : "application/json"
      }, body: JSON.stringify({"name": newConvoName})
    })
    .then(res => res.json())
    .then(data => {
      console.log("adding members to new convo")
      added.forEach((newMember) => {
      fetch('/members', {
        method: "POST", 
        headers: {
          "Content-Type" : "application/json"
        }, body: JSON.stringify({"user_id": newMember.id, "conversation_id": data.id})
      })
    })

    onAddConvo(data)

    })
  }

  function handleChange(e) {
    setNewConvoName(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>Chat name:</label>
        <input onChange={handleChange} type="text" value={newConvoName}/>
        <label>Add your friends:</label>
        {friends.map((friend) => <button
        type="button" 
        key={friend.id} 
        onClick={() => handleAddFriend(friend)}
        >{friend.username}</button>)}
        <button className="form-button" type="submit">Submit</button>
    </form>
  )
}

export default NewConvo
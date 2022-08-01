


function Profile({user}){

    return <div>
        <div>{user.name}</div>
        <div>{user.email}</div>
        <div>{user.avatar_url}</div>
    </div>
}
export default Profile
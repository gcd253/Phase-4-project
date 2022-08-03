import { useState, useEffect } from "react";

function Danger({user}){

    //todo: code timer
    const [display, setDisplay] = useState("5:00")

    function startTimer(duration) {
        let timer = duration
        setInterval(() => {
            // let minutes = parseInt(timer / 60, 10);
            // let seconds = parseInt(timer % 60, 10);

            // minutes = minutes < 10 ? "0" + minutes : minutes;
            // seconds = seconds < 10 ? "0" + seconds : seconds;

            // setDisplay(minutes + ":" + seconds)
            timer--
            let minutes = parseInt(timer / 60, 10)
            let seconds = parseInt(timer % 60, 10)
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds
            setDisplay(minutes + ":" + seconds)

            if (timer <= 0) {
                timer = 0
                fetch(`/user/${user.id}/`,{
                    method: "DELETE",
                    headers: {"Content-Type": "application/json"}
                })
                // .then(navigate("/signup"))
            }   
        }, 1000)
    }

    useEffect(()=>{
        startTimer(300)
    },[])

    document.body.scrollTop = document.documentElement.scrollTop = 0;

    return <div id="total-danger">
        <h1 id="danger-warning">A Drone Strike Has Been Initiated On Your Present Location</h1>
        <h2 id="danger-timer">{display}</h2>
        <img id="danger-img" src="https://thumbs.dreamstime.com/z/satellite-view-new-york-city-map-d-buildings-manhattan-ground-zero-world-trade-center-site-rendering-streets-199113621.jpg"></img>
    </div>
}

export default Danger
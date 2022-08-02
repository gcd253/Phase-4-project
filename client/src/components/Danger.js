import { useEffect } from "react";

function Danger(){

    //todo: code timer
    const display = <h2 class="timer">5:00</h2>

    function startTimer(duration) {
        let timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
        }   
        }, 1000)
    }

    useEffect(()=>{
        startTimer(300, display)
    },[])

    return <div>
        <h1>A Drone Strike Has Been Initiated On Your Present Location</h1>
        {display}
        <img class="background-image" src=""></img>
    </div>
}

export default Danger



// ____________________

// Timers Functions 

// setiTimeout( (callback), timeInterval)

let interval = setInterval(()=> {
        console.log(Math.random());
    }, 2000)

let stopBtn = document.getElementById("stopInterval");

stopBtn.addEventListener("click", ()=>{
    clearInterval(interval);
})


// __________________















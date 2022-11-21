
export function startTimer(duration, setCounter, setShow) {
    var timer = duration, minutes, seconds;
    if(timer != 0){
        const x= setInterval(function () {
            minutes =  parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            // console.log(minutes, seconds)
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            setCounter(minutes + ":" + seconds);
            if (--timer < 0) {
                // console.log("<: ", timer)
                timer = '00 : 00';
                clearInterval(x)
                setShow(false)
            }
        }, 1000);
    } 
  }

  export function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    console.log(minutes + ":" + (seconds < 10 ? '0' : '') + seconds)
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  
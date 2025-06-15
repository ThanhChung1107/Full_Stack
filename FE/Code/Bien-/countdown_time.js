let minutes = 45;
function countdown(miniutes) {
    alert("thời gian làm bài là " + miniutes + " phút");
    let seconds = miniutes * 60;
    let countdownInterval = setInterval(() => {
        let minutes = Math.floor(seconds / 60);
        let secs = seconds % 60;
        let prefix = secs < 10 ? "0" : "";
        console.clear();    
        console.log(`${minutes}:${prefix}${secs}`);
        if(seconds <= 0) {
            clearInterval(countdownInterval);
            alert("Hết giờ làm bài!");
            return;
        }
        else{
            seconds--;
        }
    }, 1000);
}

countdown(minutes);
function timesence(timestamp){
    let now = new Date();
    let time = new Date(timestamp);
    let diff = now - time;
    let seconds = Math.floor(diff/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24);
    let months = Math.floor(days/30);
    let years = Math.floor(months/12);
    if(years > 0){
        return `online ${years} year ago`;
    }
    else if(months > 0){
        return `online ${months} month ago`;
    }
    else if(days > 0){
        return `online ${days} day ago`;
    }
    else if(hours > 0){
        return `online ${hours} hour ago`;
    }
    else if(minutes > 0){
        return `online ${minutes} minute ago`;
    }
    else{
        return `online ${seconds} second ago`;
    }
}
    let timeoffline = 1749280000000;
    console.log(timesence(timeoffline));
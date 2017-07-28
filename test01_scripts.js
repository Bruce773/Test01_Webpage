function runTheClock() {
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    document.getElementById("date-container").innerHTML = "<h5 style=\"text-align: center;\">Time: " + hourFix(hr) + ":" + min + ": " + sec + "</h5>";
}


function hourFix(hours) {
    return hours >= 13 ? (hours - 12) : hours;
}


var interval = setInterval(runTheClock, 1000);
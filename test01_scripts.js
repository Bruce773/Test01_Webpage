function runTheClock() {
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    document.getElementById("date-container").innerHTML = "<h5 style=\"text-align: center;\">Time: " + hourFix(hr) + ":" + minuteFix(min) + ":" + secondFix(sec) + "</h5>";
}


function hourFix(hours) {
    return hours >= 13 ? (hours - 12) : hours;
}

function minuteFix(min) {
    return min <= 9 ? ("0" + min) : min;
}

function secondFix(sec) {
    return sec <= 9 ? ("0" + sec) : sec;
}

var interval = setInterval(runTheClock, 1000);

// ---------------------------
// Scripts for the To-Do App
// ---------------------------

// Add a "checked" symbol when clicking on a list item
var list = document.getElementById("myUL");
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newToDoItem() {
    var li = document.createElement("li");
    li.className = "to-do-item";
    var inputValue = document.getElementById("myInput").value;
    var inputValueDescr = document.getElementById("myInputDescr").value;
    var t = document.createTextNode(inputValue);
    var tdescr = document.createTextNode(inputValueDescr);
    var br = document.createElement("br");
    li.appendChild(t);
    // .classList.add("to-do-item-title");
    if (inputValueDescr === '') {
        tdescr.nodeValue = "";
    } else {
        li.appendChild(br); //Adds the break when a description is added to the to-do
    }
    li.appendChild(tdescr);
    li.classList.add("formatted-text");
    var span = document.createElement("span");
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    if (inputValue === '') {
        alert("You haven't named the To-Do");
    } else {
        document.getElementById("myUL").appendChild(li);
        document.getElementById("myInput").value = ''; //This clears the input field after submission
    }

    if (inputValueDescr === '') {
        tdescr.nodeValue = "";
    } 
    else if (inputValueDescr === '' && inputValue === '') {
        alert("You haven't named the To-Do");
    }
    else if (inputValue===''){
        alert("You haven't named the To-Do");
    }
    else {
        document.getElementById("myUL").appendChild(li);
        document.getElementById("myInputDescr").value = ''; //This clears the textarea field after submission
    }

    li.onclick = function() {
        var x = document.getElementsByClassName('to-do-item');
        x.classList.add("checked");
        x.classList.toggle("checked");
    }

    var close = document.getElementsByClassName("close");
    span.onclick = function() {
        console.log("Close");
        var div = this.parentElement;
        div.style.display = "none";
    }
}
document.getElementById('submit-fix').addEventListener('submit', function(e) { //This function removes the default reload property of the form
    e.preventDefault();
    newToDoItem();
}, false);
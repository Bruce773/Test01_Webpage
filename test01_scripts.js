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

function newToDoItem() {
    var li = document.createElement("li");//Creates a list item
    li.className = "to-do-item";//Gives the list item a class of to-do-item
    var inputValue = document.getElementById("myInput").value;//Grabs the text value from the element with an ID of myInput and assigns it to inputValue
    var inputValueDescr = document.getElementById("myInputDescr").value;//Grabs the text value from the element with an ID of myInputDecr and assings it to inputValueDescr
    var t = document.createTextNode(inputValue);
    var tdescr = document.createTextNode(inputValueDescr);
    var br = document.createElement("br");
    li.appendChild(t);
    if (inputValueDescr === '') { //If the description field is empty
        tdescr.nodeValue = ""; //Leave the description section in the to-do item blank
    } else { //If the description field isn't empty 
        li.appendChild(br); //Add a break after the title section in the To-Do
    }
    li.appendChild(tdescr);
    li.classList.add("formatted-text");
    var span = document.createElement("span");
    var txt = document.createTextNode("x");
    span.className = "close-x";
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
    } else if (inputValueDescr === '' && inputValue === '') {
        alert("You haven't named the To-Do");
    } else if (inputValue === '') {
        alert("You haven't named the To-Do");
    } else {
        document.getElementById("myUL").appendChild(li);
        document.getElementById("myInputDescr").value = ''; //This clears the textarea field after submission
    }

    var close = document.getElementsByClassName("close-x");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    localStorage.setItem('todos', document.getElementById('myUL').innerHTML); //Will add the entire inner HTML of the element with the ID of myUL to localStorage
    return false;
}

function unorderedListLoad() {
    if (localStorage.getItem('todos')) {
        document.getElementById('myUL').innerHTML = localStorage.getItem('todos');
    }
    var close = document.getElementsByClassName("close-x");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
};

if (document.getElementById("myUL")) {
    var list = document.getElementById("myUL");
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
        localStorage.setItem('todos', document.getElementById('myUL').innerHTML); //will get the element with the ID of myUL and set it's inner HTML to equal what's in localStorage
        return false;
    }, false);

}

if (document.getElementById('submit-fix')) {
    document.getElementById('submit-fix').addEventListener('submit', function(e) { //This function removes the default reload property of the form
        e.preventDefault();
        newToDoItem();
    }, false);

}

// -----------------------------
// Scrpits for the CSS practice 
// -----------------------------

function setCssProperty() {
    var inputValue2 = document.getElementById("myInput2").value;
    document.getElementById("cssTest").setAttribute("style", inputValue2 + 'display: inline-block;padding-left:10px;');
    document.getElementById("myInput2").value = '';

}

if (document.getElementById('cssExcersizeForm')) {
    document.getElementById('cssExcersizeForm').addEventListener('submit', function(e) { //This function removes the default reload property of the form
        e.preventDefault();
        setCssProperty();
    }, false);
}
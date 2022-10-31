var dayTime = moment().format("dddd MM/D/YYYY");
var jumboHour = moment().format("hh:mm A");
var docDay = document.getElementById("currentDay");
var docTime = document.getElementById("currentTime");
var hrTxt = document.getElementById("texthr1");
var saveBtn1 = document.getElementById("saveBtn1");

docDay.textContent = dayTime;
docTime.textContent = jumboHour;

function pastPresentFuture() {
    var hourTime = moment().hour();

    for (let i = 9; i < 18; i++) {
        if (i === hourTime) {
            document.getElementById("texthr" + i).classList.add("present");
        } else if (i > hourTime) {
            document.getElementById("texthr" + i).classList.add("future");  
        } else if (i < hourTime) {
            document.getElementById("texthr" + i).classList.add("past"); 
        }
        document.getElementById(i).addEventListener("click", function() {
            var id = this.getAttribute("id");
            var text = document.getElementById("texthr" + id).value;
            var storage = localStorage.setItem(i, text);
        });
        document.getElementById("texthr" + i).textContent = localStorage.getItem(i);
    }
}

pastPresentFuture();

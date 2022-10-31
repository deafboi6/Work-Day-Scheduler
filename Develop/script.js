var dayTime = moment().format("MM/D/YYYY");
var hourTime = moment().format("hh:mm A");
var docDay = document.getElementById("currentDay");
var docTime = document.getElementById("currentTime");

docDay.textContent = dayTime;
docTime.textContent = hourTime;

function pastPresentFuture() {
    var background = document.getElementById("week");

    if (hourTime >= x) {
        var week = document.getElementById("week");

        week.style.background = "yellow";
}
}

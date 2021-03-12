$(document).ready(function () {

// need current time
function showTime() {
    var date = moment().format('MMMM Do YYYY')
    $('#currentDay').text(date)
}

var times = [9,10,11,12,13,14,15,16,17,18,19,20,21]
function showDay() {
    for (var i=0; i<times.length; i++) {
        createRow(times[i]);
    }
    // renderSavedTasks();
}

function createRow(time) {
    console.log(time);
    var row = $("<div class='row'>")
    var colTime = $("<div class='col-md-2'>");
    var collarge = $("<div class='col-md-8'>");
    var colSave = $("<div class='col-md-2'>");
    var showHour = $("<div class='hour'>")
    var textInput = $("<textarea class='form-control' rows='3' data-time=" + time + ">");
    var saveButton = $("<button class='saveBtn' data-time=" + time + ">");

    if (time > 12) {
        var stdTime = time - 12;
        showHour.text(stdTime + " PM")
    } else {
        showHour.text(time + " AM");
    }

    colSave.append(saveButton);
    collarge.append(textInput);
    colTime.append(showHour);
    row.append(colTime, collarge, colSave);

    $(".container").append(row);

    // each row should display time, textbox, a save button
        // textbox and the save button need to have a data-id / data-time
}

// when we render the rows, we want to see if the data-id is < currentHour, = current hour, or > current current
    // set color classes -- if (curentHour > timeBlockHour) timeBlock.addClass("future")
// variable for saved tasks from local storage (get task)
// renders what's in local storage
var past = localStorage.getItem("past");
var present = localStorage.getItem("present");
var future = localStorage.getItem("future");

function renderRows() {
    localStorage.setItem("present", present);
    localStorage.setItem("past", past);
    localStorage.setItem("future", future); 

    var past = document.querySelector(".past").value;
    var present = document.querySelector(".present").value;
    var future = document.querySelector(".future").value;
    var hour = document.querySelector(".hour").value;

    if (hour > past) {
    displayColor();
    } else if (hour == present) {
    displayColor();
    } else if (hour < future) {
    displayColor();
};
}




    // if (!savedTasks) do one thing, otherwise, loop over and render them
// on save
    // save the new item to local storage
        var newTask = { time: "", task: ""}
// when page loads, we have to check if there's anything in local storage

setInterval(showTime, 1000)
showDay();
renderRows();
});

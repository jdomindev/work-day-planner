// add rows and columns
const hoursOfDay = [
  "9:00AM",
  "10:00AM",
  "11:00AM",
  "12:00AM",
  "1:00PM",
  "2:00PM",
  "3:00PM",
  "4:00PM",
  "5:00PM",
];

const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function setTime() {
  var today = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").text(today);
}

function createBody() {
  // Loop to establish HTML content
  for (var i = 0; i < hoursOfDay.length; i++) {
    var container = $(".container");
    container.addClass("my-5");
    var row = $("<div>");
    row.addClass("row");

    // TimeHeader (first column)
    var timeHeader = $("<div>");
    timeHeader.addClass(
      "hour d-flex justify-content-center align-items-center col-xl-1 col-lg-1 col-md-2 col-3"
    );
    var timeTitle = $("<div>");
    timeTitle.text(hoursOfDay[i]);
    timeHeader.append(timeTitle);

    // TimeBlock (second column)
    var timeBlock = $("<div>");
    timeBlock.addClass(
      "time-block px-0 d-flex justify-content-start align-items-center col-xl-10 col-lg-10 col-md-8 col-6"
    );
    var textArea = $("<textarea>");
    textArea.addClass("textArea h-100 w-100");
    timeBlock.append(textArea);

    // SaveBtn (third column)
    var saveBtn = $("<button onclick='saveTextArea()'>");
    saveBtn.addClass(
      "saveBtn d-flex justify-content-center align-items-center col-xl-1 col-lg-1 col-md-2 col-3"
    );
    saveBtnText = $("<div>");
    saveBtnText.text("Save 💾");
    saveBtn.append(saveBtnText);

    row.append(timeHeader, timeBlock, saveBtn);
    container.append(row);
  }
}

// function to add classes of past present and future based on current hour
function colorTimeBlocks() {
  var todayHour = moment().format("H");
  var timeBlocks = $(".time-block");
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] === parseInt(todayHour)) {
      $(timeBlocks[i]).addClass("present");
    } else if (hours[i] < parseInt(todayHour)) {
      $(timeBlocks[i]).addClass("future");
    } else if (hours[i] > parseInt(todayHour)) {
      $(timeBlocks[i]).addClass("past");
    }
  }
}


// function saveTextArea() {
//   var textAreaEntries = [];
//   var textArea = $("textarea");
// for (let i = 0; i < hours.length; i++) {
//   textAreaEntries.push($(textArea[i]).val().trim());
//   console.log(textAreaEntries);
// }
//   localStorage.setItem("text", JSON.stringify(textAreaEntries));
//   var storedText = JSON.parse(localStorage.getItem(textAreaEntries));
// }

function onLoad() {
  setTime();
  setInterval(setTime, 1000);
  createBody();
  colorTimeBlocks();
}



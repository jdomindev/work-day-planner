var today
function setTime() {
  today = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").text(today);
}

setTime();
setInterval(setTime, 1000);

// add rows and columns
hoursOfDay = ["9:00AM", "10:00AM", "11:00AM", "12:00AM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM"]



for (var i = 0; i < hoursOfDay.length; i++){
var container = $(".container");
var row = $("<div>");
row.addClass("row");

// TimeHeader (first column)
var timeHeader = $("<div>");
timeHeader.addClass("hour d-flex justify-content-center align-items-center col-xl-1 col-lg-1 col-md-2 col-3")
var timeTitle = $("<div>");
timeTitle.text(hoursOfDay[i])
timeTitle.addClass("");
timeHeader.append(timeTitle);

// TimeBlock (second column)
var timeBlock = $("<div>");
timeBlock.addClass("time-block col-xl-10 col-lg-10 col-md-8 col-6");
var textArea = $("<textarea>");
textArea.addClass("d-flex justify-content-start")
timeBlock.append(textArea);

// SaveBtn (third column)
var saveBtn = $("<div>");
saveBtn.addClass("saveBtn d-flex justify-content-center align-items-center col-xl-1 col-lg-1 col-md-2 col-3");
saveBtnText = $("<div>");
saveBtnText.text("Save")
saveBtnText.addClass("");
saveBtn.append(saveBtnText);


row.append(timeHeader, timeBlock, saveBtn)
container.append(row)
}










// function to add classes of past present and future based on time (moment)
// var timeBlockTime = moment("2021-12-15T09:00:00").format("hh:mm a");
// console.log(timeBlockTime);
// var timeBlock = $("#timeBlock");
// $("#timeBlockTime").text(timeBlockTime);

// function colorTimeBlock() {
// //   if (timeBlockTime.isSame(today, "hour")) {
// //     timeBlock.addClass("present");
// //   } else if (timeBlockTime.isBefore(today)) {
// //     timeBlock.addClass("future");
// //   } 
//   if (moment("9:00","hh:mm").isAfter(today)) {
//     console.log("past");
//     timeBlock.addClass("past");
//   }
// }



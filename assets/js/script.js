// Variables
var saveBtn = $('.saveBtn');
var clearBtn = $('#clearBtn');
var currentTime = $('#currentDay');
// Current time variable and display
var timeTracker = dayjs().format('dddd MMMM DD, YYYY - hh:mm A');
currentTime.text(timeTracker);
// function to determine what hour it is to select past present or future
var currentHour = dayjs().format('HH');
$(".time-block").each(function () {
  var timeBlock = $(this).attr("id").split("-")[1];
  console.log("currentHour " + currentHour);

  if (currentHour === timeBlock) {
    $(this).addClass("present");
  } else if (currentHour < timeBlock) {
    $(this).addClass('future');
  } else if (currentHour > timeBlock) {
    $(this).addClass('past');
  }
});
// function that saves input to local storage on save button click
$(saveBtn).on("click", function (event) {
  event.preventDefault();
  var desc = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  console.log(desc + " " + time);
  localStorage.setItem(time, desc);
});
// displays whats saved in local storage on the page
$("#hour-09 .description").val(localStorage.getItem("hour-09"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

// clear local storage on clear button click
$(clearBtn).on("click", clearScheduler);
// clears local storage and displays the now blank storage on the page
function clearScheduler() {
  localStorage.clear();
  $("#hour-09 .description").val(localStorage.getItem("hour-09"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
};
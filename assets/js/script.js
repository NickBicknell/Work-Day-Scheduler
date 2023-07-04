
var saveBtn = $('.saveBtn');
var clearBtn = $('#clearBtn');
var currentTime = $('#currentDay');

var timeTracker = dayjs().format('dddd MMMM DD, YYYY - hh:mm a');
currentTime.text(timeTracker);

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

$(saveBtn).on("click", function (event) {
  event.preventDefault();
  var desc = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  console.log(desc + " " + time);
  localStorage.setItem(time, desc);
});

$("#hour-09 .description").val(localStorage.getItem("hour-09"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

$(clearBtn).on("click", clearScheduler);

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
}

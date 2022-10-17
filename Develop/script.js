$(document).ready(function () {// tells engine to load 1)html & 2)css first.
   //display current day & time.
   $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // use of moment.js
   //assign saveBtn click listener for user input and time stamp??
   $(".saveBtn").on("click", function () {
       //get nearby values.
       console.log(this);
       var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
       var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

       localStorage.setItem(time, text);
   }) 
//    load any saved data, possible 'for' loop?
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

function hourTracker() {
    var currentHour = moment().hour(); 

    $('.time-block').each(function(){
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockHour, currentHour)

        if (blockHour < currentHour) {
            $(this).addClass("past");
        }

        else if (blockHour === currentHour) {
            $(this).addClass("present");
        }

        else {
            $(this).addClass("future");
        }
    })
}
hourTracker();
})
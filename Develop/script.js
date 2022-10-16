$(document).ready(function () {// tells engine to load 1)html & 2)css first.
   //display current day & time.
   $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // use of moment.js
   //assign saveBtn click listener for user input and time stamp??
   $(".saveBtn").on("click", function () {
       //get nearby values.
       console.log(this);
       var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
       var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute


$(document).ready(function () {
   $('.saveBtn').on('click', function () {

   }); 
});

var today = moment();
$("#currentDay").text(today.format("MMMM Do YYYY, h:mm:ss a"));
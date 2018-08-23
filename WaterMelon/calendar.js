"use strict";

// Set the date display in the calendar
var thisDay = new Date();

// Write the calendar to the element with the id "calendar"
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

// Function to generate the calender table
function createCalendar(calDate) {
   
   var calendarHTML = "<table id='calendar_table'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += calWeekdayRow();
   calendarHTML += calDays(calDate);
   calendarHTML += "</table>";
   
   return calendarHTML;
}

// Function to write calendar caption
function calCaption(calDate) {

// monthName array containing the list of the months of the year
  var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Determine the current month
  var thisMonth = calDate.getMonth();

// Determine the current year
  var thisYear = calDate.getFullYear();

// Write the caption
  return /*return is what the function provides*/"<caption>" + monthName[thisMonth] + " " + thisYear + "</caption";

}
function calWeekdayRow() {
// Array of weekday abbreviations
    var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var rowHTML = "<tr>";
    
// Loop through the dayName array
    for (var i = 0; i < dayName.length; i++) {
        rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";
    } // for loop close
    
    rowHTML += "</tr>";
    return rowHTML;
} //function close

/* Funtion to calculate the number of days in the month */
function daysInMonth(calDate) {
// Array of days in each month
   var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];

// Extract the four digits year and month value
   var thisYear = calDate.getFullYear();
   var thisMonth = calDate.getMonth();

// Revise the days in Feburary for leap years
   if (thisYear %4 === 0){
      if ((thisYear % 100 != 0) ||(thisYear % 400 === 0)) {
      dayCount[1] = 29;
         } 
      }  
      return dayCount[thisMonth];
   }

// Return the number of days for the current month


/* Function to write table rows for each day of the month */
   function calDays(calDate) {
// Determine the starting day of the month
   var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
   var weekDay = day.getDay();

// Write blank cells preceding the staring day
   var htmlCode = "<tr>";
   for (var i = 0; i < weekDay; i++) {
       htmlCode += "<td></td>";
      }
   

// Write for each day of the month
   var totalDays = daysInMonth(calDate);

   var highlightDay = calDate.getDate();
   for (var i = 1; i <= totalDays; i++) {
      day.setDate(i);
      weekDay = day.getDay();

   if (weekDay === 0) htmlCode += "<tr>";
   if (i === highlightDay){
      htmlCode += "<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i] + "</td>";
     } else {
      htmlCode += "<td class='calendar_dates'>" + i + dayEvent[i] +"</td>";
     }
   if (weekDay === 6) htmlCode += "</tr>";
   } // Ends the loop

   return htmlCode;
   // Ends Function of cal days

}

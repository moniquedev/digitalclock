// how to add zero in front of numbers < 10
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    };
    // Return the new value of 'i' - this may be changed or unchanged, depending on if the conditional statement evaluated as 'true'
    return i;
};

function startTime () {
  var currentTime = new Date();
  var hours   = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var timeDiv = document.getElementById('totalTime');

  if(hours > 12) {
    hours = hours - 12;
  }

  // For displaying time with zeros (ie: 11:09am is displayed as 11:9am), minutes/seconds values need to be less than 10 are displayed with a leading 0. Use the checkTime() function
   hours = checkTime(hours);
   minutes = checkTime(minutes);
   seconds = checkTime(seconds);


  timeDiv.textContent = hours + ':' + minutes + ':' + seconds;

  setTimeout(startTime, 1000);
}

// id='time' to start the function when it loads, then the time will be displayed.
document.getElementById('totalTime').addEventListener('onLoad', startTime(), false );

$(document).ready(function () {
  var day = [0, 1, 2, 3, 4, 5, 6];
  var daysInOrder = [0, 1, 2, 3, 4, 5, 6];
  var curr = new Date; // get current date
  var first = curr.getDate(); // set date to starting day
  var today = curr.getDay(); // set day number (i.e. 0-6) today
  var subday = 0; // set start point for days before today
  // set 7 days into array day
  for (var i = 0; i < 7; i++) {
    var next = new Date(curr.getTime());
    next.setDate(first + i);
    day[i] = next.getDate();
  }
  // set daysInOrder from start day to day 6 then set subdays to next week dates
  for (var i = 0; i < 7; i++) {
    if (today < 7) {
      daysInOrder[today] = day[i];
      today++;
    } else {
      daysInOrder[subday] = day[i];
      subday++;
    }
  }
  document.getElementById("mon-date").innerHTML = daysInOrder[1];
  document.getElementById("tue-date").innerHTML = daysInOrder[2];
  document.getElementById("wed-date").innerHTML = daysInOrder[3];
  document.getElementById("thu-date").innerHTML = daysInOrder[4];
  document.getElementById("fri-date").innerHTML = daysInOrder[5];
  document.getElementById("sat-date").innerHTML = daysInOrder[6];
  document.getElementById("sun-date").innerHTML = daysInOrder[0];
});


var hourHand = document.getElementById('hour');
var minuteHand = document.getElementById('minute');
var secondHand = document.getElementById('second');

function moveClock () {
   let currentTime = new Date();
   let h = currentTime.getHours() % 12;
   let m = currentTime.getMinutes();
   let s = currentTime.getSeconds();

   let hourDeg = (h * 30) + (0.5 * m);
   let minuteDeg = (m * 6)  + (0.1 * s);
   let secondDeg = s * 6;

   hourHand.style.transform = 'rotate( ' + hourDeg + 'deg)';
   minuteHand.style.transform = 'rotate( ' + minuteDeg + 'deg)';
   secondHand.style.transform = 'rotate( ' + secondDeg + 'deg)';

setTimeout(moveClock,1000);

};

moveClock();

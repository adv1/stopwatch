
var status = 0;
var time = 0; 
var GeneralTime; 
var LableTimeLap = document.getElementById('timeLap');
var LableTime = document.getElementById('timer');





function startStop() {
	if (status == 0) {
		status = 1;
		increment();
		document.getElementById('startBtn').innerHTML = 'Стоп';
		document.getElementById('startBtn').style.color = 'red';
	} else {
		status = 0;
		document.getElementById('startBtn').style.color = 'green';
		document.getElementById('startBtn').innerHTML = 'Старт';
		document.getElementById('resetBtn').innerHTML = 'Сброс';
	}
	
}


function resetLap() {
		if (status == 1) {
			saveLap();
		} else {
			time = 0;
			resetTimeLap();
			counter();
		}
		LableTime.innerHTML = '00:00,00';
		LableTimeLap.innerHTML = '00:00,00';
		document.getElementById('resetBtn').innerHTML = 'Круг';
}

function resetTimeLap() {
 	document.getElementById('tbody').innerHTML = '&nbsp';
 }

function increment() {
	if (status == 1) {
		setTimeout(function() {
			time++;
		var min = Math.floor(time/100/60);
		var sec = Math.floor(time/100);
		var mSec = time % 100;

			if (min < 10) {
				min = '0' + min;
			}
			if (sec >= 60) {
				sec = sec % 60;
			}
			if (sec < 10) {
				sec = '0' + sec;
			}

			if (mSec < 10) {
				mSec = '0' + mSec;
			}
			
			GeneralTime = min + ":" + sec + "," + mSec;
			LableTime.innerHTML = GeneralTime;
			LableTimeLap.innerHTML = GeneralTime;
			increment();
			
		}, 10)
	}
}

 function saveLap() {
 	if (status == 1) {
 		var ArrLap = [GeneralTime];
 		document.getElementById('tbody').innerHTML += '<th>' + "Круг" + " " + counter() + " " + ArrLap + " ";	
 	}
 }

function makeCounter() {
		var currentCount = 1;
			return function () {
				if (status == 1) {
 					return currentCount++;
 				} else {
					currentCount = 1;
 				}
		 	}
 }
 		var counter = makeCounter();

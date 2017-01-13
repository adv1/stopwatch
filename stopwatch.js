
var status = 0;
var time = 0;
var LapTime;

 // on = 1; off = 0


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
		}
		document.getElementById('timer').innerHTML = '00:00,00';
		document.getElementById('timeLap').innerHTML = '00:00,00';
		document.getElementById('resetBtn').innerHTML = 'Круг';
}

function resetTimeLap() {
 	document.getElementById('th1').innerHTML = '&nbsp';
 	document.getElementById('th2').innerHTML = '&nbsp';
 	document.getElementById('th3').innerHTML = '&nbsp';
 	document.getElementById('th4').innerHTML = '&nbsp';
 	document.getElementById('th5').innerHTML = '&nbsp';
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
			
			document.getElementById('timer').innerHTML = min + ":" + sec + ":" + mSec;
			document.getElementById('timeLap').innerHTML = min + ":" + sec + ":" + mSec;
			increment();
			LapTime = min + ":" + sec + "," + mSec;
		}, 10)
	}
}

 function saveLap() {
 	if (status == 1) {
 		var ArrLap = [];
 		ArrLap.push(LapTime);
 		var value = document.getElementById('table').value;
 		if (value == undefined) {
 			for (var i = 1;i < 2;) {
 				document.getElementById('tbody').innerHTML += '<th>' + "Круг" + " " + i + " " + ArrLap;
 				i++;
 			}		
 		}
 	}
 } 
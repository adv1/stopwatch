function Timer() {
	var timerStatus = false,
    currentLapNumber = 0,
    timerCurrentTime = 0,
    lapCurrentTime = 0,
    labelTimeLap = document.getElementById('timeLap'),
    labelTime = document.getElementById('timer'),
    startButton = document.getElementById('startBtn'),
    resetButton = document.getElementById('resetBtn'),
    lapResults = document.querySelector('.lap-results'),
    lapIntervalId,
    mainTimerIntervalId;


    this.onStartButtoClick = function() {
    	if (!timerStatus) {
    		onStartTimer()
    	} else {
    		onStopTimer()
    	}
    }

    function onStartTimer() {
    	timerStatus = true;
    	mainTimerIntervalId = initMainTimer(labelTime, 10);
    	lapIntervalId = initLapTimer(labelTimeLap, 10);

    	startButton.innerHTML = 'Стоп';
    	startButton.style.color = 'red';
    	resetButton.innerHTML = 'Круг';
    }

    function onStopTimer() {
    	timerStatus = false;
    	startButton.style.color = 'green';
    	startButton.innerHTML = 'Старт';
    	resetButton.innerHTML = 'Сброс';
    	clearTimers();
    }

    function clearTimers() {
    	clearInterval(mainTimerIntervalId);
    	clearInterval(lapIntervalId);
    }

    this.onResetButtonClick = function() {
    	if (timerStatus) {
    		saveLap()
    	} else {
    		reset()
    	}
    }

    function saveLap() {
    	currentLapNumber++;
    	lapResults.innerHTML += '<dd>' + "Круг " + " " + currentLapNumber +  " " + prepareDisplayedTime(lapCurrentTime) + " " + '</dd>';
    	lapCurrentTime = 0;
    }

    function reset() {
    	labelTime.innerHTML = '00:00,00';
    	labelTimeLap.innerHTML = '00:00,00';
    	resetButton.innerHTML = 'Круг';
    	lapResults.innerHTML = '';
    	currentLapNumber = 0;
    	timerCurrentTime = 0;
    	lapCurrentTime = 0;
    	clearTimers()
    }

    function initMainTimer(timerElement, interval) {
    	return setInterval(function() {
    		timerCurrentTime += interval;

    		timerElement.innerHTML = prepareDisplayedTime(timerCurrentTime);
    	}, interval)
    }

    function initLapTimer(timerElement, interval) {
    	return setInterval(function() {
    		lapCurrentTime += interval;

    		timerElement.innerHTML = prepareDisplayedTime(lapCurrentTime);
    	}, interval)
    }

    function prepareDisplayedTime(time) {
    	var milliSeconds = time % 1000,
    		seconds = Math.floor((time / 1000) % 60) ,
    		minutes = Math.floor((time / 1000 / 60) % 60);

    		if (minutes < 10) {
    			minutes = '0' + minutes;
    		}
			if (seconds >= 60) {
				seconds = seconds % 60;
			}
    		if (seconds < 10) {
    			seconds = '0' + seconds;
    		}
    		if (milliSeconds < 10) {
    			milliSeconds = '0' + milliSeconds;
    		}
    		if (milliSeconds > 99 ) {
    			milliSeconds = milliSeconds / 10;
    		}
    	return minutes + ':' + seconds + ',' + milliSeconds;
    }

};

var stopWatch = new Timer();

function startClick() {
	stopWatch.onStartButtoClick();
}

function resetClick() {
	stopWatch.onResetButtonClick();
}







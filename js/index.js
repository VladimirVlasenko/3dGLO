
window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // timer
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60).toString(),
                minutes = Math.floor((timeRemaining / 60) % 60).toString(),
                hours = Math.floor(timeRemaining / 60 / 60).toString();
            return {timeRemaining, hours, minutes, seconds};
        }
        let timer = getTimeRemaining();
        function updateClock() {
            timer = getTimeRemaining();
            if (timer.hours.length <= 1) {
                timerHours.textContent = '0' + timer.hours;
            } else {
                timerHours.textContent = timer.hours;
            }
            
            if (timer.minutes.length <= 1) {
                timerMinutes.textContent = '0' + timer.minutes;
            } else {
                timerMinutes.textContent = timer.minutes;
            }

            if (timer.seconds.length <= 1) {
                timerSeconds.textContent = '0' + timer.seconds;
            } else {
                timerSeconds.textContent = timer.seconds;
            }
        }
        if(timer.timeRemaining > 0) {
            setInterval(updateClock, 1000);
        } else {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00',
            timerSeconds.textContent = '00';
        }
        
    }

    countTimer('2 march 2020');
    // setInterval(countTimer, 1000, '2 march 2020');
});

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

    countTimer('4 march 2020');

    // Меню
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu');
        const menu = document.querySelector('menu');
        const closeBtn = document.querySelector('.close-btn');
        const menuItems = menu.querySelectorAll('ul>li');
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
        
    };
    toggleMenu();

    // Popup окно
    
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
              popupBtn = document.querySelectorAll('.popup-btn'),
              popupClose = document.querySelector('.popup-close'); 
              popup.style.opacity = 0;
        let count = 0;
        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                if (window.screen.width > 768) {
                    let animatePopup = () => {
                        count++;
                        if(count < 100) {
                         popup.style.opacity = count / 100;
                        } else {
                            clearInterval(idInterval);
                            count = 0;
                        }
                     };
                     let idInterval = setInterval(animatePopup, 16);
                }  
            });
        });
        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };
    togglePopup();


});

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
        const body = document.querySelector('body');
        const btnMenu = document.querySelector('.menu');
        const menu = document.querySelector('menu');
        const closeBtn = document.querySelector('.close-btn');
        const menuItems = menu.querySelectorAll('ul>li');
        const menuList = menu.querySelector('ul');
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        body.addEventListener('click', (event) => {
            let target = event.target;
            if (target.closest('.menu') || target.matches('a.menuLi, .close-btn')) {
                handlerMenu();
            } else if (menu.classList.contains('active-menu') && !target.closest('.menu')) {
                handlerMenu();
            }
        });  

        // btnMenu.addEventListener('click', handlerMenu);
        
    };
    toggleMenu();

    // Popup окно
    
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
              popupBtn = document.querySelectorAll('.popup-btn'),
              popupClose = document.querySelector('.popup-close');  
        let count = 0;
        let docWidth = document.documentElement.clientWidth;
        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                docWidth = document.documentElement.clientWidth;
                if (docWidth > 768) {
                    popup.style.opacity = 0;
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

        popup.addEventListener('click', (event) => {
            let target = event.target;
            if(target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if(!target) {
                    popup.style.display = 'none';
                }
            }
        });
    };
    togglePopup();
    //  Табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
              tab = tabHeader.querySelectorAll('.service-header-tab'),
              tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length;  i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest( '.service-header-tab');
            
                if(target.classList.contains('service-header-tab')) {
                    tab.forEach((item, i) => {
                        if(item === target) {
                            toggleTabContent(i);
                        }
                    });
                }
        });     
    };
    tabs();
    // слайдер
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
              btn = document.querySelectorAll('.portfolio-btn'),
              slider = document.querySelector('.portfolio-content');
              let dot;
              
              
        let ulDots = document.querySelector('.portfolio-dots');
        let createDots = () => {
            for(let i = 0; i < slide.length; i++) {
                let li = document.createElement('li');
                li.classList.add('dot');
                ulDots.appendChild(li); 
            }
            dot = document.querySelectorAll('.dot');
            dot[0].classList.add('dot-active');
        };
        createDots();


        let currentSlide = 0;
        let interval;
        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };
        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active' );
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if(currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active' );
            nextSlide(dot, currentSlide, 'dot-active');
        };
        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };
        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            

            if(!target.matches('.portfolio-btn, .dot')) {
                return;
            }
            
            prevSlide(slide, currentSlide, 'portfolio-item-active' );
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if(target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1 ;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active' );
            nextSlide(dot, currentSlide, 'dot-active');
        });
        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(2000);


    };
    slider();
// Замена картинок
    let images = document.querySelectorAll('.command__photo');
    let command = document.querySelector('.command');
    let previousSrc;
    command.addEventListener('mouseover', (event) => {
        let target = event.target;
        if (target.classList.contains('command__photo')) {
            previousSrc = target.src;
            target.src = target.dataset.img;
        } 
    });
    command.addEventListener('mouseout', (event) => {
        let target = event.target;
        if (target.classList.contains('command__photo')) {
            target.dataset.img = target.src;
            target.src = previousSrc;
        } 
    });
// Калькулятор на сайте(1)
    let calc = document.querySelector('.calc');
    let inputCalc = document.querySelectorAll('.calc-item');
    calc.addEventListener('input', (event) => {
        let target = event.target;
        let value = target.value;
        if(target.type === 'number') {
            let newValue = target.value;
            if(newValue.match(/[0-9]/g)) {
                target.value = value;

                return;
            }
            value = newValue;
        }
    });


});
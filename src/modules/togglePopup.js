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
                let idInterval;
                let animatePopup = () => {
                    count++;
                    if(count < 100) {
                        popup.style.opacity = count / 100;
                    } else {
                        clearInterval(idInterval);
                        count = 0;
                    }
                };
                idInterval = setInterval(animatePopup, 16);
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
export  default togglePopup;
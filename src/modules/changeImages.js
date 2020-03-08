const changeImages = () => {
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
};
export  default changeImages;
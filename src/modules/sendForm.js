const sendForm = () => {
        
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };

    const loadMessage = 'Загрузка...';
    let bodyTag = document.querySelector('body');
    let allInputs = document.querySelectorAll('input');
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';
    
    bodyTag.addEventListener('submit', (event) => {
        event.preventDefault();
        let target = event.target;
        let successMessage = () => {
            statusMessage.textContent = 'Данные успешно отправлены!';

            let img = document.createElement('IMG');
            img.src = './images/recall.jpg';
            img.style.height = '200px';
            target.appendChild(img);

            allInputs.forEach((item) => {
                item.value = '';
            });
            setTimeout(() => {
                console.log(';alsdjf;aj');
                target.removeChild(img);
                statusMessage.textContent = '';
            }, 5000);
                
        };

        const formData = new FormData(target);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        let errorMessage = () => {
            statusMessage.textContent = 'Что-то пошло не так...';
            console.error("Что-то пошло ...");
        };

        if (target.matches('form')) {
            statusMessage.textContent = loadMessage;
            statusMessage.style.color = 'white';
            target.appendChild(statusMessage);
        }

        postData(body)
        .then((response) => {
            if(response.status !== 200) {
                throw new Error('Network status is not 200');
            }
            successMessage();
        })
        .catch(errorMessage);

    });
};
export  default sendForm;
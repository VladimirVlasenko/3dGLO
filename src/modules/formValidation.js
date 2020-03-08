const formValidation = () => {
    let bodyTag = document.querySelector('body');
    bodyTag.addEventListener('input', (event) => {
        event.preventDefault();
        let target = event.target;
        if (target.matches('input[name="user_phone"]')) {
            target.value = target.value.replace(/[^\+\d]/g, '');
        } else if (target.matches('input[name="user_name"]') || target.matches('input[name="user_message"]')) {
            target.value = target.value.replace(/[^а-яА-Яa-zA-Z,.!?"';: ]/, '');
        } else if (target.matches('input[name="user_email"]')) {
            target.value = target.value.replace(/[а-яА-Я]/gi, '');
        }

    });
};
export  default formValidation;
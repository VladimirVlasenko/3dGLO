const calcMod = () => {
    let calc = document.querySelector('.calc');
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

    const calcIt = (price = 100) => {

        const calcBlock = document.querySelector('.calc-block');
        const calcType = document.querySelector('.calc-type');
        const calcSquare = document.querySelector('.calc-square');
        const calcDay = document.querySelector('.calc-day');
        const calcCount = document.querySelector('.calc-count');
        const totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;

            let typeValue = calcType.options[calcType.selectedIndex].value;
            let squareValue = +calcSquare.value;


            if(calcCount.value > 1) {
                countValue += (+calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if(typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }

            totalValue.textContent = total;
        };


        calcBlock.addEventListener('change', (event) => {
            let target = event.target;
            if (target.matches('.calc-type') || target.matches('.calc-square') ||
            target.matches('.calc-day') || target.matches('.calc-count')) {
                countSum();
            }
        });
        
    };
    calcIt(100);
};
export  default calcMod;
const content = document.querySelector('.content');
let selectedNumber;
let randomNumber;

function handleNumbersRecursive(randomNumberActivate = false) {

    if(randomNumberActivate) {
        numbers = getNumbersCreatedDiv();
        selectedNumber = getRandomNumber();
        randomNumber = selectedNumber;
        numbers[selectedNumber].style.backgroundColor = 'red';
    }

    numbers[selectedNumber].addEventListener("click", () => {

        if(!numbers[selectedNumber].previousElementSibling && randomNumber === numbers.length - 1) {
            handleNumbersRecursive({randomNumberActivate: true});
            return;
        }

        checkClikedNumber();

    }, false);
    
}

function checkClikedNumber() {
    if(!numbers[selectedNumber].previousElementSibling) {
        selectedNumber = ++randomNumber;
        content.removeChild(numbers[selectedNumber]); 
    } else {
        content.removeChild(numbers[selectedNumber]);
        selectedNumber = selectedNumber - 1;
    }
    setColor(selectedNumber);
    handleNumbersRecursive();
}

function getRandomNumber() {
    const untilTen = 10;
    return Math.floor(Math.random() * untilTen);
}

function setColor(selectedNumber) {
    numbers[selectedNumber].style.backgroundColor = 'red';
}

function getNumbersCreatedDiv() {
    content.innerHTML = '';
    const requiredNumbers =10;
    for(let i = 0 ; i < requiredNumbers; i++) {
        const div = document.createElement("div");
        div.innerHTML = i + 1;
        content.appendChild(div);
    }

    return document.querySelectorAll('.content div');
}

handleNumbersRecursive({randomNumberActivate: true});

var textInput = document.querySelector('.text-input');
var message = document.querySelector('.message');
var changeMessage = document.querySelector('.message-change');
var checkBtn = document.querySelector('.check-btn');

let random = Math.floor(Math.random() * 100);
console.log(random);
var change = 10;

var startGame = () => {
    change--;
    changeMessage.innerText = `You have ${change} changes`;
    var userNumber = parseInt(textInput.value);
    if (change == 0) {
        checkBtn.style.pointerEvents = 'none';
        textInput.style.pointerEvents = 'none';
        textInput.value = '';
    }
    else if (userNumber === random) {
        message.classList.add('active');
        message.innerText = 'Congrats, You guessed the right number';
        message.style.color = 'green';
    }
    else if (random < userNumber) {
        message.classList.add('active');
        message.innerText = `Number is less then ${userNumber}`;
        message.style.color = 'red';
    }
    else if (random > userNumber) {
        message.classList.add('active');
        message.innerText = `Number is greater then ${userNumber}`;
        message.style.color = 'red';
    }
}
checkBtn.addEventListener('click', startGame);
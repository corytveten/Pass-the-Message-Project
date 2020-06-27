
const submitBtn = document.getElementById('submitBtn');
const message = document.querySelector('.message-content');
const input = document.getElementById('message');


function printMessage(e) {
    e.preventDefault()
    message.textContent = input.value;
}

document.addEventListener('submit', printMessage)


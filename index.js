
const button = document.querySelector('.btn');
console.log(button);

const dialog = document.querySelector('.dialog-message');
console.log(dialog);

button.addEventListener('click', function () {
    console.log('clicked');
    dialog.style.visibility = 'visible';
});
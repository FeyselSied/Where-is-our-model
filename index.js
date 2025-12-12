
const button = document.querySelector('.btn');
console.log(button);

const dialog = document.querySelector('.dialog-message');
console.log(dialog);

const dialogButton = document.querySelector('.dialog-btn');
console.log(dialogButton);

button.addEventListener('click', function () {
    button.style.backgroundColor = 'transparent';

    if (dialog.classList.contains('hide')) {
        dialog.classList.remove('hide');
        dialog.style.transform = 'translateY(50vh)';
        dialog.style.transition = '0.25s';

    }
    else 
        dialog.classList.add('hide');
});

dialogButton.addEventListener('click', function() {
    dialog.classList.add('hide');
})

const button = document.querySelector('.btn');
console.log(button);

const dialog = document.querySelector('.dialog-message');
console.log(dialog);

button.addEventListener('click', function () {
    if (dialog.classList.contains('hide')) {
        dialog.classList.remove('hide');
        dialog.style.transform = 'translateY(50vh)';
        dialog.style.transition = '0.25s';

    }
    else 
        dialog.classList.add('hide');
});
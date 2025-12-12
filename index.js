
const button = document.querySelector('.btn');
console.log(button);

const dialog = document.querySelector('.dialog-message');
console.log(dialog);

button.addEventListener('click', function () {
    if (dialog.classList.contains('hide'))
        dialog.classList.remove('hide');
    else
        dialog.classList.add('hide');
    // dialog.style.visibility = 'visible';
});
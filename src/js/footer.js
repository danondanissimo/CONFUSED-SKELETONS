import iziToast from "izitoast";

const form = document.querySelector('.feedback-form');
const inputEmail = form.querySelector('input[name="email"]');

form.addEventListener('input', onInpuTargetValue);
form.addEventListener('submit', onBtnClick);

const localStorageKey = 'Email';

function onInpuTargetValue(e) {
    const targetValue = e.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(targetValue))
}
function onBtnClick(e) {
    e.preventDefault();
    if (inputEmail.value === '') {
        iziToast.error({
            message: 'Please fill in all  the fields!',
        })
    }
    form.reset()
}
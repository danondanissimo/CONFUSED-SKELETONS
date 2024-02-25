const form = document.querySelector('.feedback-form');
const inputEmail = form.querySelector('input[name="email"]');


const currentObj = {
    email: '',
};

const localStorageKey = "feedback-form-state";
let localStorageData = '';

try {
    localStorageData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    
    if (localStorageData && typeof localStorageData === 'object') {
        currentObj.email = localStorageData.email || '';
        inputEmail.value = currentObj.email;
    }
} catch (error) {
    console.error('Error parsing JSON:', error);
}

const upLoadNewDate = (event) => {
    const target = event.target;
    if (target === inputEmail) {
        currentObj.email = target.value.trim();

    }
    localStorageData = JSON.stringify(currentObj);
    localStorage.setItem(localStorageKey, localStorageData);
};

form.addEventListener('input', upLoadNewDate);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));
    localStorage.removeItem(localStorageKey);
    currentObj.email = '';
    form.reset();
});
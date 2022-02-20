import throttle from "lodash.throttle";

const KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);


initForm();




function initForm() {
    const saveData = localStorage.getItem(KEY);
    if (saveData) {
        const { email, message } = JSON.parse(saveData);
        form.email.value = email;

        form.message.value = message;

        formData.email = email;
        formData.message = message;
    }
}

function onFormInput(event) {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  localStorage.setItem(KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();

    const formDataSend = new FormData(event.currentTarget);
    formDataSend.forEach((value, name) => {
        formData[name] = value;
    });
    event.currentTarget.reset();
    localStorage.removeItem(KEY);

    console.log(formData);
}
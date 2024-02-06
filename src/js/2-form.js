'use strict';

const feedbackForm = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const formEl = feedbackForm.elements;

function getFormData() {
    const email = formEl.email.value.trim();
    const message = formEl.message.value.trim();
    return {
        email,
        message
    };
}

const savedState = localStorage.getItem(localStorageKey);
if (savedState) {
    const { email, message } = JSON.parse(savedState);
    formEl.email.value = email || '';
    formEl.message.value = message || '';
}

feedbackForm.addEventListener("input", (evt) => {
    const formData = getFormData();

    localStorage.setItem(localStorageKey, JSON.stringify(formData));

});

feedbackForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    console.log(getFormData());

    localStorage.removeItem(localStorageKey);
    feedbackForm.reset();
});

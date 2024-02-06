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

function isFormDataValid(formData) {
    return formData.email && formData.message;
}

function handleSubmit(evt) {
    evt.preventDefault();

    const formData = getFormData();

    if (isFormDataValid(formData)) {
        console.log(formData);

        localStorage.removeItem(localStorageKey);
        feedbackForm.reset();
    } else {
        return
    }
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

feedbackForm.addEventListener("submit", handleSubmit);

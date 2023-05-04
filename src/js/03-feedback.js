
import throttle from "lodash.throttle";

const refs = {
  form: document.querySelector(".feedback-form"),
  textarea: document.querySelector("textarea"),
  input: document.querySelector("input"),
};

const savedInputs = localStorage.getItem('feedback-form-state');
const parsInputs = JSON.parse(savedInputs);

if (parsInputs) {
  refs.input.value = parsInputs.email;
  refs.textarea.value = parsInputs.message;
}

refs.form.addEventListener('input', throttle(input, 500));
refs.form.addEventListener('submit', submit);

function input() {
  const inputFromForm = {
      email: refs.input.value,
      message: refs.textarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(inputFromForm));
  // console.log(inputFromForm);
}
function submit(event) {
  event.preventDefault();
  if (refs.input.value && refs.textarea.value) {
    const dataLog = {
      email: refs.input.value,
      message: refs.textarea.value,
  };
  console.log(dataLog);
  refs.form.reset();
  localStorage.removeItem('feedback-form-state')
  } else {
    alert('!Всі поля мають бути заповнені!');
  }
  
}
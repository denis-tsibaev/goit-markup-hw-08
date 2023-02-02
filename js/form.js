const formEl = document.querySelector(".js-form");

const data = new FormData();

formEl.addEventListener("submit", data);

console.log(data);

// function onFormSubmit(e) {
//   e.preventDefault();

//   const emailValue = e.currentTarget.elements.email.value;
//   const phoneValue = e.currentTarget.elements.tel.value;
//   const formData = { emailValue, phoneValue };

//   console.log("formData", formData);
// }

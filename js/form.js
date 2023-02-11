const refs = {
  modal: document.querySelector("[data-modal]"),
  form: document.querySelector(".js-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const nameValue = e.currentTarget.elements.name.value;
  const phoneValue = e.currentTarget.elements.phone.value;
  const emailValue = e.currentTarget.elements.email.value;
  const messageValue = e.currentTarget.elements.message.value;

  const formData = { nameValue, phoneValue, emailValue, messageValue };

  console.log("formData", formData);
  refs.form.reset();
  refs.modal.classList.toggle("is-hidden");
}

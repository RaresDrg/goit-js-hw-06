const inputEl = document.getElementById("validation-input");

const handleValidation = (event) => {
  const inputValue = event.currentTarget.value;
  const conditionValue = event.currentTarget.dataset.length;

  if (inputValue.length == conditionValue) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
    return;
  }

  if (inputValue.length != conditionValue && inputValue.length > 0) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
    return;
  }

  inputEl.classList.remove("valid");
  inputEl.classList.remove("invalid");
};

inputEl.addEventListener("blur", handleValidation);

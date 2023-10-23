const formEl = document.querySelector(".login-form");

const handleSumbit = (event) => {
  event.preventDefault();

  const { elements: { email, password }, } = event.currentTarget;
  const inputEmailValue = email.value;
  const inputPasswordValue = password.value;

  if (inputEmailValue === "" || inputPasswordValue === "") {
    alert("All fields must be completed.");
    return;
  }

  const formValuesObj = {
    email: inputEmailValue,
    password: inputPasswordValue,
  };
  console.log(formValuesObj);

  formEl.reset();
};

formEl.addEventListener("submit", handleSumbit);
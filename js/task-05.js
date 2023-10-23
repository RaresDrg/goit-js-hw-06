const inputEl = document.getElementById("name-input");
const output = document.getElementById("name-output");

const outputInitialValue = output.textContent;

const handleInput = (event) => {
  const inputValue = event.currentTarget.value;

  if (inputValue.length > 0) {
    output.textContent = inputValue;
    return;
  }

  output.textContent = outputInitialValue;
};

inputEl.addEventListener("input", handleInput);
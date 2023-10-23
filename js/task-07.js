const inputEl = document.getElementById("font-size-control");
const text = document.getElementById("text");

const handleTextSize = (event) => {
  const inputValue = event.currentTarget.value;
  const textSizeValue = inputValue + "px";

  text.style.fontSize = textSizeValue;
};

inputEl.addEventListener("input", handleTextSize);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const colorValue = document.querySelector(".color");

const handleBodyColor = (event) => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = bodyEl.style.backgroundColor;
};

changeColorBtn.addEventListener("click", handleBodyColor);
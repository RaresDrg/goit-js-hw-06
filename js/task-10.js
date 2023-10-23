function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

let amount;

// Input event //
const handleInputValue = (event) => {
  const inputValue = event.currentTarget.value;
  amount = Number(inputValue);
};
inputEl.addEventListener("input", handleInputValue);


// Destruction event //
const handleDivDestruction = (event) => {
  divBoxes.innerHTML = "";
  inputEl.value = "";
};
destroyBtn.addEventListener("click", handleDivDestruction);


// Construction event //
const handleDivCreation = (event) => {
  createBoxes(amount);
};
createBtn.addEventListener("click", handleDivCreation);

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const divBox = document.createElement("div");
    divBoxes.append(divBox);
    
    const divSize = 30 + 10 * i;
    divBox.style.width = divSize + "px";
    divBox.style.height = divSize + "px";

    divBox.style.backgroundColor = getRandomHexColor();
  }

  divBoxes.style.display = "flex";
  divBoxes.style.flexDirection = "column";
  divBoxes.style.alignItems = "center";
};

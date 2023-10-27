function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");


// Construction event //
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


const handleDivCreation = () => {
  let amount = inputEl.value 
  createBoxes(amount);
};
createBtn.addEventListener("click", handleDivCreation);


// Destruction event //
const handleDivDestruction = () => {
  divBoxes.innerHTML = "";
  inputEl.value = "";
};
destroyBtn.addEventListener("click", handleDivDestruction);
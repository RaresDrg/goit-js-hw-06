const decrementBtn = document.querySelector('[data-action="decrement"]');
const incementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");

let value = Number(counterValue.textContent);

const handleClickOnDecrement = () => {
  value -= 1;
  counterValue.textContent = value;
};

const handleClickOnIncrement = () => {
  value += 1;
  counterValue.textContent = value;
};

decrementBtn.addEventListener("click", handleClickOnDecrement);
incementBtn.addEventListener("click", handleClickOnIncrement);



/*
  *object literal version :
*/

// const counter = {
//   value: Number(counterValue.textContent),

//   handleClickOnDecrement() {
//     this.value -= 1;
//     counterValue.textContent = this.value;
//   },

//   handleClickOnIncrement() {
//     this.value += 1;
//     counterValue.textContent = this.value;
//   },
// };

// decrementBtn.addEventListener(
//   "click",
//   counter.handleClickOnDecrement.bind(counter)
// );

// incementBtn.addEventListener(
//   "click",
//   counter.handleClickOnIncrement.bind(counter)
// );
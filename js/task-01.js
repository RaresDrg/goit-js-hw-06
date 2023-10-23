const listItemsArray = document.querySelectorAll(".item");
console.log("Number of categories:", listItemsArray.length);

listItemsArray.forEach((item) => {
  const titleEl = item.querySelector("h2");
  console.log("Category:", titleEl.textContent);

  const liEl = item.querySelectorAll("li");
  console.log("Elements:", liEl.length);
});

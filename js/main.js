// 2. change h2 element color
const h2collection = document.getElementsByTagName("h2");
for (let i = 0; i < h2collection.length; i++) {
  h2collection[i].style.color = "#264e70";
}

//3. backpack id baackgroundColor Change
const backpack = document.getElementById("backpack");
backpack.style.boxSizing = "borderBox";
backpack.style.borderRadius = "5px";
backpack.style.backgroundColor = "#B6E2D3";
backpack.style.padding = "20px 20px 30px";

//4. card borderRadius chnage
const cards = document.getElementsByClassName("card");
for (let card of cards) {
  card.style.borderRadius = "30px";
}

//5. console.log function
function print() {
  console.log("print() function is working");
}
const consolePrint = document.getElementById("console");
consolePrint.addEventListener("click", print);

//6. remove Buy Now>> button
function removeButton() {
  const removeBuyButton = document.getElementById("removeButton");
  removeBuyButton.style.display = "none";
}
const removeBuyButton = document.getElementById("removeButton");
console.log(removeBuyButton);
removeBuyButton.addEventListener("click", removeButton);

//7. Submit button active only when type exactly "email" without quotation
function submitEnable() {
  const inputField = document.getElementById("email");
  const submitButton = document.getElementById("submit");
  if (inputField.value === "email") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
const inputField = document.getElementById("email");
inputField.addEventListener("keyup", submitEnable);

//8. change shoe-1 image when mouseenter
const firstShoe = document.getElementById("shoe-1");
firstShoe.addEventListener("mouseenter", function () {
  const firstShoe = document.getElementById("shoe-1");

  firstShoe.src = "./images/shoes/shoe-1_rotate.png";
  // firstShoe.style.transform = "scaleX(-1)";
  // firstShoe.style.transitionDuration = ".5s";
  console.log("enter mouse");
});
firstShoe.addEventListener("mouseout", function () {
  const firstShoe = document.getElementById("shoe-1");
  firstShoe.src = "./images/shoes/shoe-1.png";
  // firstShoe.style.transform = "scaleX(1)";
  // firstShoe.style.transitionDuration = ".5s";

  console.log("enter leave");
});

// 9. change LET'S STAY IN TOUCH backgrount color change while double chilk in background
const subscribe = document.getElementById("subscribe");
subscribe.addEventListener("dblclick", function () {
  subscribe.style.backgroundColor = "#B6E2D3";
});
subscribe.addEventListener("click", function () {
  subscribe.style.backgroundColor = "#fceae8";
});

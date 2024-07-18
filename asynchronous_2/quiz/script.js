const buttonContainer = document.getElementById("buttonContainer");
var isClicked = false;

buttonContainer.addEventListener("click", (event) => {
  let targeted = event.target;
  isClicked = !isClicked;
  let currentText = targeted.innerText;
  console.log(currentText);

  if (isClicked) {
    targeted.textContent = "Clicked!";
  } else {
    targeted.textContent = currentText;
  }
});

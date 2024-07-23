const buttonContainer = document.getElementById("buttonContainer");
var isClicked = false;

buttonContainer.addEventListener("click", (event) => {
  let targeted = event.target;
  isClicked = !isClicked;

  console.log(event);

  if (isClicked) {
    targeted.textContent = "Clicked!";
  } else {
    targeted.textContent = targeted.innerText;
  }
});

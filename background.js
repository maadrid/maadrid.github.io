
function paintBack() {
  const NUM_IMG = 5;
  const chosenImage = Math.floor(Math.random() * (NUM_IMG));
  const bgImage = document.createElement("img");

  bgImage.classList.add("backgroundImg");
  bgImage.src = `bgImage/${chosenImage}.jpeg`;
  document.body.appendChild(bgImage);

}

function initBackgroundImg() {
  paintBack();
}

initBackgroundImg();
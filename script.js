const noBtn = document.querySelector(".no-btn");
const noWrapper = document.querySelector(".no-wrapper");
const yesBtn = document.querySelector(".yes-btn");
const finalText = document.getElementById("final-text");

function moveNoButton() {
  const btnRect = noWrapper.getBoundingClientRect();

  const padding = 20;

  const maxX = window.innerWidth - btnRect.width - padding;
  const maxY = window.innerHeight - btnRect.height - padding;

  const randomX = Math.max(
    padding,
    Math.random() * maxX
  );

  const randomY = Math.max(
    padding,
    Math.random() * maxY
  );

  noWrapper.style.position = "fixed";
  noWrapper.style.left = randomX + "px";
  noWrapper.style.top = randomY + "px";
  noWrapper.style.transition = "all 0.3s ease";
}

// Desktop + Mobile safe
noWrapper.addEventListener("mouseenter", moveNoButton);
noWrapper.addEventListener("touchstart", moveNoButton);

// YES button behavior
yesBtn.addEventListener("click", () => {
  finalText.style.display = "block";
  noWrapper.style.display = "none";
});

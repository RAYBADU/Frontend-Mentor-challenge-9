const input = document.getElementById("input");
const button = document.getElementById("btn");
const hiddenText = document.getElementById("text");
button.addEventListener("click", () => {
  if (input.value.includes("@")) {
    alert("Welcome User !");
  } else if (input.value === "") {
    alert("Enter your email first");
  } else {
    hiddenText.classList.remove("hidden");
    input.style.borderColor = "red";
  }
});

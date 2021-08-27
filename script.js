let enterInput = document.getElementById("message-input");
let output = document.getElementById("message-output");

document.getElementById("click-input").addEventListener("click", function () {
  let check = enterInput.value;
  output.textContent = check;
  enterInput.value = "";
});

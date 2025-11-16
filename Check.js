const btn = document.getElementById("checkButton");
const popup = document.getElementById("accountPopup");

btn.addEventListener("click", () => {
  popup.style.display = popup.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", (e) => {
  if (!popup.contains(e.target) && e.target !== btn) {
    popup.style.display = "none";
  }
});

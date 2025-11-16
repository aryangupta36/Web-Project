const learnSection = document.getElementById("learnSection");
const modal = document.getElementById("learnModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".close-btn");

fetch("learnMore.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("info-card");
      card.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.description}</p>
      `;
      learnSection.appendChild(card);

      card.addEventListener("click", () => {
        modalTitle.textContent = item.title;
        modalText.textContent = item.details;
        modal.style.display = "block";
      });
    });
  })
  .catch(err => console.error("❌ Error loading JSON:", err));

closeBtn.addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

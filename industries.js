function displayIndustries(data) {
  const container = document.getElementById("industries");
  container.innerHTML = ""; 

  data.forEach(ind => {
    const card = document.createElement("div");
    card.classList.add("industry-card");
    card.innerHTML = `
      <div class="industry-head">
        <div class="industry-icon" style="background:${ind.bg}; color:${ind.color};">⚙️</div>
        <span class="industry-name">${ind.name}</span>
      </div>
      <div class="industry-stats">
        <div><span class="industry-main">${ind.companies}</span><br>Companies</div>
        <div><span class="industry-main">${ind.avgValue}</span><br>Avg. Value</div>
        <div><span class="industry-growth">${ind.growth}</span><br>Growth</div>
      </div>
      <button class="industry-btn">Explore ${ind.name}</button>
    `;
    container.appendChild(card);
  });
}

fetch('industries.json')
  .then(response => {
    if (!response.ok) throw new Error("Failed to load industries.json");
    return response.json();
  })
  .then(data => {
    displayIndustries(data);
  })
  .catch(error => console.error("Error fetching industries data:", error));

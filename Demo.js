const ipoData = [
  {
    name: "Tata Technologies Ltd",
    openDate: "22-Nov-2023",
    closeDate: "24-Nov-2023",
    issuePrice: "₹500 - ₹525",
    lotSize: "30 shares",
    listingDate: "05-Dec-2023",
    status: "Listed",
    exchange: "NSE & BSE"
  },
  {
    name: "Ola Electric Mobility Ltd",
    openDate: "10-Jan-2025",
    closeDate: "12-Jan-2025",
    issuePrice: "₹75 - ₹80",
    lotSize: "180 shares",
    listingDate: "22-Jan-2025",
    status: "Upcoming",
    exchange: "NSE & BSE"
  },
  {
    name: "Swiggy Ltd",
    openDate: "15-Feb-2025",
    closeDate: "17-Feb-2025",
    issuePrice: "₹320 - ₹340",
    lotSize: "45 shares",
    listingDate: "28-Feb-2025",
    status: "Upcoming",
    exchange: "NSE"
  }
];

function searchIPO() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = "";

  const found = ipoData.filter(ipo => ipo.name.toLowerCase().includes(searchInput));

  if (found.length === 0) {
    resultContainer.innerHTML = `<p>No IPOs found for "<b>${searchInput}</b>"</p>`;
    return;
  }

  found.forEach(ipo => {
    const card = document.createElement("div");
    card.className = "result-card";
    card.innerHTML = `
      <h2>${ipo.name}</h2>
      <p><strong>Open Date:</strong> ${ipo.openDate}</p>
      <p><strong>Close Date:</strong> ${ipo.closeDate}</p>
      <p><strong>Issue Price:</strong> ${ipo.issuePrice}</p>
      <p><strong>Lot Size:</strong> ${ipo.lotSize}</p>
      <p><strong>Listing Date:</strong> ${ipo.listingDate}</p>
      <p><strong>Status:</strong> ${ipo.status}</p>
      <p><strong>Exchange:</strong> ${ipo.exchange}</p>
    `;
    resultContainer.appendChild(card);
  });
}

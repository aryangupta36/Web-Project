const ipoData = [
   {
    company: "Ola Electric Mobility",
    ticker: "OLAEL",
    date: "Nov 25, 2025",
    price: "₹70-₹85",
    cap: "₹45,000 Cr",
    sector: "Electric Vehicles",
    status: "Upcoming",
    perf: ""
  },
  {
    company: "MobiKwik Systems",
    ticker: "MOBIK",
    date: "Nov 18, 2025",
    price: "₹350-₹375",
    cap: "₹5,800 Cr",
    sector: "Fintech",
    status: "Upcoming",
    perf: ""
  },
  {
    company: "FirstCry (BrainBees Solutions)",
    ticker: "FCRY",
    date: "Nov 5, 2025",
    price: "₹450-₹490",
    cap: "₹18,000 Cr",
    sector: "E-Commerce",
    status: "Upcoming",
    perf: ""
  },
  {
    company: "Aakash Educational Services (Byju’s)",
    ticker: "AAKSH",
    date: "Oct 22, 2025",
    price: "₹550-₹610",
    cap: "₹25,000 Cr",
    sector: "EdTech",
    status: "Active",
    perf: "+1.48%"
  },
  {
    company: "HDB Financial Services",
    ticker: "HDBFS",
    date: "Oct 10, 2025",
    price: "₹950-₹1020",
    cap: "₹90,000 Cr",
    sector: "Financial Services",
    status: "Completed",
    perf: "+3.25%"
  },
  {
    company: "Tata Autocomp Systems",
    ticker: "TACOMP",
    date: "Sep 15, 2025",
    price: "₹400-₹440",
    cap: "₹12,500 Cr",
    sector: "Automotive Components",
    status: "Completed",
    perf: "-0.92%"
  },
  {
    company: "Swiggy Ltd",
    ticker: "SWGY",
    date: "Dec 5, 2025",
    price: "₹500-₹550",
    cap: "₹45,000 Cr",
    sector: "Food Delivery",
    status: "Upcoming",
    perf: ""
  },
  {
    company: "OYO Rooms Pvt Ltd",
    ticker: "OYO",
    date: "Nov 29, 2025",
    price: "₹80-₹95",
    cap: "₹35,000 Cr",
    sector: "Hospitality",
    status: "Upcoming",
    perf: ""
  },
  {
    company: "Zomato Payments",
    ticker: "ZPAY",
    date: "Oct 12, 2025",
    price: "₹120-₹140",
    cap: "₹8,900 Cr",
    sector: "Fintech",
    status: "Active",
    perf: "+2.10%"
  },
  {
    company: "Delhivery Logistics",
    ticker: "DELIV",
    date: "Sep 30, 2025",
    price: "₹600-₹640",
    cap: "₹18,500 Cr",
    sector: "Logistics",
    status: "Completed",
    perf: "+0.75%"
  },
  {
    company: "Reliance Retail Ventures",
    ticker: "RRV",
    date: "Aug 25, 2025",
    price: "₹1100-₹1250",
    cap: "₹1.2 Lakh Cr",
    sector: "Retail",
    status: "Completed",
    perf: "+4.12%"
  }
];

function renderTable(data) {
  const tableBody = document.getElementById("ipoTableBody");
  tableBody.innerHTML = "";

  if (data.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:#999;">No IPOs found</td></tr>`;
    return;
  }

  data.forEach(ipo => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${ipo.company}</td>
      <td>${ipo.ticker}</td>
      <td>${ipo.date}</td>
      <td>${ipo.price}</td>
      <td>${ipo.cap}</td>
      <td>${ipo.sector}</td>
      <td>${ipo.status}</td>
      <td>${ipo.perf}</td>
    `;
    tableBody.appendChild(row);
  });
}

renderTable(ipoData);

const searchInput = document.getElementById("search");
searchInput.addEventListener("keyup", () => {
  const query = searchInput.value.toLowerCase().trim();
  const filtered = ipoData.filter(
    ipo =>
      ipo.company.toLowerCase().includes(query) ||
      ipo.ticker.toLowerCase().includes(query) ||
      ipo.sector.toLowerCase().includes(query) ||
      ipo.status.toLowerCase().includes(query)
  );
  renderTable(filtered);
});


new Chart(document.getElementById("activityChart"), {
  type: "bar",
  data: {
    labels: ["Sep 2025", "Oct 2025", "Nov 2025"],
    datasets: [
      { label: "Completed", data: [3, 1, 0], backgroundColor: "#3b82f6" },
      { label: "Active", data: [0, 1, 1], backgroundColor: "#10b981" },
      { label: "Upcoming", data: [0, 0, 3], backgroundColor: "#f59e0b" },
    ],
  },
  options: {
    responsive: true,
    plugins: { legend: { position: "bottom" } },
  },
});

new Chart(document.getElementById("sectorChart"), {
  type: "pie",
  data: {
    labels: ["Technology", "Semiconductors", "Cybersecurity", "Finance", "Aerospace"],
    datasets: [
      {
        data: [25, 15, 20, 25, 15],
        backgroundColor: ["#3b82f6", "#f59e0b", "#ef4444", "#10b981", "#8b5cf6"],
      },
    ],
  },
});

new Chart(document.getElementById("performanceChart"), {
  type: "bar",
  data: {
    labels: ["DSS", "FRD", "SLX"],
    datasets: [
      {
        label: "First Day Return (%)",
        data: [2.62, 1.25, -0.74],
        backgroundColor: ["#10b981", "#10b981", "#ef4444"],
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true },
    },
  },
});

new Chart(document.getElementById("marketChart"), {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "Market Cap",
        data: [
          { x: "Sep 20", y: 9 },
          { x: "Oct 11", y: 9.4 },
          { x: "Oct 26", y: 7.1 },
          { x: "Nov 3", y: 9.2 },
          { x: "Nov 14", y: 11.6 },
          { x: "Nov 20", y: 10.2 },
        ],
        backgroundColor: "#3b82f6",
      },
    ],
  },
  options: {
    scales: {
      x: { title: { display: true, text: "Date" } },
      y: { title: { display: true, text: "Market Cap ($B)" } },
    },
  },
});

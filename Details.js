class Company {
  constructor(name, location, valuation, growth, stage, desc) {
    this.name = name;
    this.location = location;
    this.valuation = valuation;
    this.growth = growth;
    this.stage = stage;
    this.desc = desc;
  }

  getDetails() {
    return `
      <div class="company-card">
        <div class="company-header">
          <span class="company-name">${this.name}</span>
          <span class="badge series">${this.stage}</span>
        </div>
        <div class="company-location">${this.location}</div>
        <div class="company-desc">${this.desc}</div>
        <div class="company-stats">
          <span class="stat-value">${this.valuation}</span>
          <span class="stat-label">Valuation</span>
          <span class="stat-growth">${this.growth}</span>
          <span class="stat-label">Growth</span>
        </div>
        <button class="details-btn">View Details</button>
      </div>
    `;
  }
}

class CompanyManager {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.companies = [];
  }

  addCompany(company) {
    this.companies.push(company);
  }

  displayCompanies() {
    this.container.innerHTML = "";  
    this.companies.forEach(c => {
      this.container.insertAdjacentHTML('beforeend', c.getDetails());
    });
  }
}

fetch('companies.json')
  .then(response => {
    if (!response.ok) throw new Error("Failed to load JSON");
    return response.json();
  })
  .then(data => {
    const featuredSection = new CompanyManager("companies-row");
    data.forEach(item => {
      const company = new Company(item.name, item.location, item.valuation, item.growth, item.stage, item.desc);
      featuredSection.addCompany(company);
    });
    featuredSection.displayCompanies();
  })
  .catch(error => console.error("Error fetching company data:", error));

/*
  Edit this file first when you publish another validated project.
  Set published: true only after the project is genuinely ready for recruiters.
*/
window.PORTFOLIO_CONFIG = {
  profile: {
    github: "https://github.com/RishiRatnakarData",
    email: "torishiratnakar@gmail.com",
    linkedin: "https://www.linkedin.com/in/rishi-ratnakar/",
    resume: "assets/Rishi_Ratnakar_Resume.pdf"
  },
  projects: [
    {
      id: "consumer-complaint-intelligence",
      published: true,
      featured: true,
      status: "Published · v1.0.0",
      title: "Consumer Finance Complaint Intelligence",
      description: "An end-to-end analytics workflow for CFPB consumer complaints: reproducible ingestion, weekly-stratified sampling, DuckDB/SQL analysis, leakage-aware relief modeling, automated tests, and executive Power BI reporting.",
      tags: ["Python", "SQL", "DuckDB", "scikit-learn", "Power BI", "pytest"],
      repo: "https://github.com/RishiRatnakarData/consumer-complaint-intelligence",
      caseStudy: "projects/consumer-complaint-intelligence.html"
    },
    {
      id: "nyc-mobility-analytics-engineering",
      published: false,
      featured: false,
      status: "Validation in progress",
      title: "NYC Mobility Analytics Engineering Platform",
      description: "A production-style mobility analytics platform using Microsoft Fabric, PySpark, Delta, dbt, SQL, data-quality checks, CI/CD, and Power BI.",
      tags: ["Microsoft Fabric", "PySpark", "Delta", "dbt", "SQL", "Power BI"],
      repo: "https://github.com/RishiRatnakarData/nyc-mobility-analytics-engineering",
      caseStudy: "projects/nyc-mobility-analytics-engineering.html"
    },
    {
      id: "product-experimentation-analytics",
      published: false,
      featured: false,
      status: "Validation in progress",
      title: "Product Experimentation & Customer Analytics",
      description: "A product analytics case study covering funnels, cohorts, retention, experiment analysis, statistical uncertainty, and decision communication using BigQuery, Python, and Power BI.",
      tags: ["BigQuery", "SQL", "Python", "Statistics", "Power BI", "GitHub Actions"],
      repo: "https://github.com/RishiRatnakarData/product-experimentation-analytics",
      caseStudy: "projects/product-experimentation-analytics.html"
    }
  ]
};

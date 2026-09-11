(() => {
  const cfg = window.PORTFOLIO_CONFIG || { profile: {}, projects: [] };
  const grid = document.querySelector('#project-grid');
  const published = cfg.projects.filter(p => p.published);

  const art = (index) => `
    <div class="project-art">
      <span class="project-number">PROJECT ${String(index + 1).padStart(2, '0')}</span>
      <div class="mock-dashboard" aria-hidden="true">
        <div class="mock-panel wide"><div class="mock-bars"><i></i><i></i><i></i><i></i><i></i></div></div>
        <div class="mock-panel"><div class="mock-line"></div></div>
        <div class="mock-panel mock-stat"><strong>9</strong><span>AUTOMATED TESTS</span></div>
      </div>
    </div>`;

  if (!published.length) {
    grid.innerHTML = '<p>No projects are marked published yet. Update <code>site-config.js</code> after validation.</p>';
  } else {
    grid.innerHTML = published.map((p, i) => `
      <article class="project-card ${p.featured ? 'featured' : ''}">
        ${art(i)}
        <div class="project-body">
          <span class="project-status">${p.status}</span>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="project-tags">${p.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
          <div class="project-links">
            <a href="${p.caseStudy}">Read case study →</a>
            <a href="${p.repo}" target="_blank" rel="noopener">Source code ↗</a>
          </div>
        </div>
      </article>`).join('');
  }

  document.querySelectorAll('.github-profile').forEach(a => a.href = cfg.profile.github || '#');
  document.querySelectorAll('.email-link').forEach(a => a.href = `mailto:${cfg.profile.email || ''}`);
  document.querySelectorAll('.resume-link').forEach(a => a.href = cfg.profile.resume || '#');
  const linkedin = document.querySelector('.linkedin-link');
  if (linkedin && cfg.profile.linkedin) {
    linkedin.href = cfg.profile.linkedin;
    linkedin.hidden = false;
  }
  document.querySelector('#year').textContent = new Date().getFullYear();
});

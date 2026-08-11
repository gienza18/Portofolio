/**
 * Main Application Logic & Interactivity Controller
 */
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.setAttribute('data-theme', 'dark');
  initPreloader();
  initCustomCursor();
  
  // If using async loader (index.html), wait for sectionsLoaded event
  if (window.isAsyncLoader) {
    document.addEventListener('sectionsLoaded', initAllSections);
  } else {
    // If using PHP (index.php), sections are already in the DOM
    initAllSections();
  }
});

function initAllSections() {
  initScrollReveal();
  initSkillsTabs();
  renderSkills('all');
  renderProjects();
  initExperienceTabs();
  renderExperiences('all');
  initProjectModal();
  initStatsCounter();
  initScrollSpy();
  initContactForm();
  initSoundToggle();
  initMobileMenu();
  initSlideTransitions();
  initCopyEmail();

  // Trigger initial slide animation for the active section on page load
  const initialHash = window.location.hash || '#hero';
  const initialSection = document.querySelector(initialHash);
  if (initialSection) {
    initialSection.classList.add('section-slide-active');
  }
}

/* ==========================================================================
   SLIDE TRANSITION CONTROLLER FOR SECTION NAVIGATION & ANCHORS
   ========================================================================== */
function initSlideTransitions() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#' || targetId.length <= 1) return;

    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    e.preventDefault();

    // Close mobile menu if active
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
    }

    if (window.SoundFX) window.SoundFX.click();

    // Prevent Scroll Spy from overriding the active state while smooth scrolling
    window.isAutoScrolling = true;
    clearTimeout(window.autoScrollTimeout);
    window.autoScrollTimeout = setTimeout(() => {
      window.isAutoScrolling = false;
    }, 850); // 850ms should cover the smooth scroll duration

    // 1. Smooth scroll to target section
    const targetPos = targetEl.offsetTop - 70;
    window.scrollTo({
      top: targetPos,
      behavior: 'smooth'
    });

    // 2. Trigger Section Content Slide Animation (Outside -> Inside)
    document.querySelectorAll('section[id]').forEach(sec => sec.classList.remove('section-slide-active'));
    targetEl.classList.remove('section-slide-active');
    void targetEl.offsetWidth; // Force reflow
    targetEl.classList.add('section-slide-active');

    // 3. Re-trigger reveal elements inside target section
    const revealItems = targetEl.querySelectorAll('.reveal-on-scroll');
    revealItems.forEach((item, index) => {
      item.classList.remove('revealed');
      setTimeout(() => {
        item.classList.add('revealed');
      }, 50 + (index * 40));
    });
  });
}

function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  setTimeout(() => {
    preloader.classList.add('fade-out');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600);
  }, 1800);
}

/* ==========================================================================
   CINEMATIC SCROLL REVEAL OPENING ANIMATION
   ========================================================================== */
function initScrollReveal() {
  const selectors = '.section-header, .about-card, .stat-box, .skill-card, .project-card, .timeline-item, .contact-info-card, .contact-form, .ticker-ribbon, .cert-card, .hero-content, .avatar-container';
  const elements = document.querySelectorAll(selectors);
  
  elements.forEach((el) => {
    el.classList.add('reveal-on-scroll');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      } else {
        // Reset animation when scrolling away so it animates again when coming back
        entry.target.classList.remove('revealed');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   CUSTOM DUAL GLOWING MAGNETIC CURSOR
   ========================================================================== */
function initCustomCursor() {
  const dot = document.getElementById('custom-cursor-dot');
  const ring = document.getElementById('custom-cursor-ring');
  if (!dot || !ring) return;

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  const interactiveSelector = 'a, button, .btn, .project-card, .skill-card, .stat-box, .about-card, .social-icon, .tab-btn, input, textarea, .timeline-card';
  
  function attachHoverListeners() {
    document.querySelectorAll(interactiveSelector).forEach(el => {
      if (!el.dataset.cursorBound) {
        el.dataset.cursorBound = 'true';
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
      }
    });
  }

  attachHoverListeners();
  const observer = new MutationObserver(() => attachHoverListeners());
  observer.observe(document.body, { childList: true, subtree: true });
}

/* ==========================================================================
   TYPING TEXT ANIMATION
   ========================================================================== */
function initTypingEffect() {
  const target = document.getElementById('typing-text');
  if (!target) return;

  const words = [
    "Mahasiswa S1 Sistem Informasi",
    "Pengembang Sistem & Analisis Bisnis",
    "Spesialis Jaringan Komputer (BNSP)",
    "Customer Service & Event Specialist"
  ];
  let wordIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIdx];
    
    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIdx - 1);
      charIdx--;
    } else {
      target.textContent = currentWord.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === currentWord.length) {
      speed = 2200; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      wordIdx = (wordIdx + 1) % words.length;
      speed = 400;
    }

    setTimeout(type, speed);
  }

  type();
}

/* ==========================================================================
   SKILLS RENDER & TAB FILTER
   ========================================================================== */
function initSkillsTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.getAttribute('data-category');
      renderSkills(cat);
      if (window.SoundFX) window.SoundFX.click();
    });
  });
}

function getSkillSvgIcon(name) {
  const icons = {
    globe: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
    lightbulb: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
    spreadsheet: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M8 13h8"/><path d="M8 17h8"/><path d="M10 9h4"/></svg>`,
    clipboard: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>`,
    sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
    code: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    database: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`
  };
  return icons[name] || `<i data-lucide="${name}"></i>`;
}

function renderSkills(categoryFilter = 'all') {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  const filtered = categoryFilter === 'all' 
    ? PortfolioData.skills 
    : PortfolioData.skills.filter(s => s.category === categoryFilter);

  grid.innerHTML = filtered.map(skill => `
    <div class="skill-card tilt-card">
      <div class="skill-icon">
        ${getSkillSvgIcon(skill.icon)}
      </div>
      <div class="skill-info">
        <span class="skill-name">${skill.name}</span>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
  if (window.initTiltEffects) window.initTiltEffects();
  initScrollReveal();
}

function triggerSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  setTimeout(() => {
    bars.forEach(bar => {
      const level = bar.getAttribute('data-level');
      bar.style.width = level + '%';
    });
  }, 100);
}

/* ==========================================================================
   EXPERIENCE TAB FILTER & RENDER BY CATEGORY
   ========================================================================== */
function initExperienceTabs() {
  const tabs = document.querySelectorAll('.exp-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      const btn = e.target.closest('.exp-tab-btn');
      if (!btn) return;
      btn.classList.add('active');
      const cat = btn.getAttribute('data-exp-category');
      renderExperiences(cat);
      if (window.SoundFX) window.SoundFX.click();
    });
  });
}

function renderExperiences(categoryFilter = 'all') {
  const timeline = document.getElementById('experience-timeline');
  if (!timeline || !PortfolioData.experiences) return;

  timeline.classList.add('timeline-sliding-out');

  setTimeout(() => {
    const filtered = categoryFilter === 'all'
      ? PortfolioData.experiences
      : PortfolioData.experiences.filter(exp => exp.category === categoryFilter);

    timeline.innerHTML = filtered.map((exp, idx) => `
      <div class="timeline-item reveal-on-scroll revealed exp-slide-item" style="animation-delay: ${idx * 0.06}s">
        <div class="timeline-dot"></div>
        <div class="timeline-card tilt-card glass-panel">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.4rem;">
            <span class="timeline-date">${exp.period}</span>
            <span class="tag-badge ${exp.category}-badge">
              <i data-lucide="${exp.icon}"></i> ${exp.type}
            </span>
          </div>
          <h3 class="timeline-role">${exp.role}</h3>
          <div class="timeline-company">${exp.company}</div>
          <p style="color:var(--text-muted); font-size:0.95rem; line-height:1.6; ${exp.certImage ? 'margin-bottom:1rem;' : ''}">
            ${exp.description}
          </p>
          ${exp.certImage ? `
            <button class="btn btn-secondary btn-sm" onclick="openCertModal('${exp.certImage}', '${exp.role}')">
              <i data-lucide="eye"></i> Lihat Sertifikat
            </button>
          ` : ''}
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
    if (window.initTiltEffects) window.initTiltEffects();
    timeline.classList.remove('timeline-sliding-out');
  }, 160);
}

/* ==========================================================================
   PROJECTS RENDER (No filter - all 3 role views shown)
   ========================================================================== */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = PortfolioData.projects.map(project => `
    <div class="project-card tilt-card" data-project-id="${project.id}">
      <div class="project-img-wrapper">
        <img src="${project.image}" alt="${project.title}" />
        <div class="project-overlay">
          <button class="btn btn-primary open-modal-btn" data-id="${project.id}">
            <i data-lucide="eye"></i> Lihat Detail
          </button>
        </div>
      </div>
      <div class="project-content">
        <div class="project-tags">
          ${project.tags.map(t => `<span class="tag-badge">${t}</span>`).join('')}
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.shortDesc}</p>
        <div class="project-footer">
          <button class="view-details-btn open-modal-btn" data-id="${project.id}">
            Lihat Detail <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
  if (window.initTiltEffects) window.initTiltEffects();

  // Attach modal openers
  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pId = btn.getAttribute('data-id');
      openModal(pId);
      if (window.SoundFX) window.SoundFX.click();
    });
  });
}

/* ==========================================================================
   MODAL DETAIL VIEWER
   ========================================================================== */
function initProjectModal() {
  const backdrop = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && backdrop) {
    closeBtn.addEventListener('click', () => {
      backdrop.classList.remove('active');
      if (window.SoundFX) window.SoundFX.click();
    });
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('active');
      }
    });
  }
}

function openModal(projectId) {
  const backdrop = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body-content');
  const project = PortfolioData.projects.find(p => p.id === projectId);

  if (!project || !backdrop || !modalBody) return;

  modalBody.innerHTML = `
    <div style="margin-bottom:1.5rem; text-align:center;">
      <img src="${project.image}" alt="${project.title}" style="width:100%; max-height:440px; object-fit:contain; background:#f2f7ff; border-radius:var(--radius-md); border:1px solid var(--border-color); padding:0.5rem; box-shadow:0 4px 16px rgba(0,0,0,0.15);" />
    </div>
    <div class="project-tags" style="margin-bottom:1rem;">
      ${project.tags.map(t => `<span class="tag-badge">${t}</span>`).join('')}
    </div>
    <h2 style="font-size:1.8rem; font-weight:800; margin-bottom:1rem; color:var(--text-main);">${project.title}</h2>
    <div style="color:var(--text-muted); font-size:1.02rem; line-height:1.75; margin-bottom:1.5rem;">${project.fullDesc}</div>
    <div style="padding:1rem 1.25rem; border-radius:var(--radius-md); background:var(--bg-tertiary); border:1px solid var(--border-color); display:flex; align-items:center; gap:0.75rem;">
      <i data-lucide="info" style="color:var(--accent-primary); flex-shrink:0;"></i>
      <span style="color:var(--text-muted); font-size:0.92rem; line-height:1.5;">Tampilan ini merupakan <strong>screenshot output interface asli</strong> dari Sistem Loading & Unloading PT. Metinca Prima Industrial Works (Metinca-Starter-App-2).</span>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
  backdrop.classList.add('active');
}

function openCertModal(imageSrc, title) {
  const backdrop = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body-content');
  if (!backdrop || !modalBody) return;

  modalBody.innerHTML = `
    <div style="margin-bottom:1rem; text-align:center;">
      <h3 style="font-size:1.2rem; font-weight:700; margin-bottom:0.75rem;">${title}</h3>
      <a href="${imageSrc}" target="_blank" title="Buka dalam ukuran asli">
        <img src="${imageSrc}" alt="${title}" style="width:100%; max-height:70vh; object-fit:contain; border-radius:var(--radius-md); border:1px solid var(--border-color); background:var(--bg-tertiary);" />
      </a>
    </div>
    <div style="display:flex; justify-content:center; gap:0.75rem; margin-top:1rem;">
      <a href="${imageSrc}" target="_blank" class="btn btn-primary btn-sm">
        <i data-lucide="external-link"></i> Buka Gambar Asli
      </a>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
  backdrop.classList.add('active');
  if (window.SoundFX) window.SoundFX.click();
}

window.openCertModal = openCertModal;

/* ==========================================================================
   STATS COUNTER ANIMATION
   ========================================================================== */
function initStatsCounter() {
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const rawTarget = counter.getAttribute('data-target') || '0';
    const suffix = counter.getAttribute('data-suffix') || '';
    if (rawTarget.includes('.')) {
      counter.textContent = parseFloat(rawTarget).toFixed(2).replace('.', ',') + suffix;
    } else {
      counter.textContent = rawTarget + suffix;
    }
  });
}

/* ==========================================================================
   SCROLL SPY & NAVBAR ACTIVE LINK
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  function updateActiveNav() {
    if (window.isAutoScrolling) return;
    
    const scrollPos = window.scrollY || window.pageYOffset;
    let currentSectionId = 'hero';

    sections.forEach(section => {
      const top = section.offsetTop - 150;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  window.addEventListener('resize', updateActiveNav, { passive: true });
  updateActiveNav();

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

/* ==========================================================================
   CONTACT FORM & TOAST ALERTS
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit-btn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value.trim() || 'Pengunjung';
      const email = document.getElementById('form-email')?.value.trim();
      const message = document.getElementById('form-message')?.value.trim();

      if (!email || !message) return;

      const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i data-lucide="loader"></i> Mengirim Pesan...';
        if (window.lucide) window.lucide.createIcons();
      }

      fetch('https://formsubmit.co/ajax/gienzazdn@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `Pesan Baru dari ${name} (Portofolio Gienza Zidan)`
        })
      })
      .then(res => res.json())
      .then(data => {
        showToast(`Terima kasih ${name}! Pesan Anda telah terkirim ke gienzazdn@gmail.com.`);
        if (window.SoundFX) window.SoundFX.success();
        form.reset();
      })
      .catch(err => {
        showToast(`Membuka aplikasi email untuk mengirim ke gienzazdn@gmail.com...`);
        window.location.href = `mailto:gienzazdn@gmail.com?subject=Pesan dari ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
          if (window.lucide) window.lucide.createIcons();
        }
      });
    });
  }
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i data-lucide="check-circle" style="color:var(--accent-secondary)"></i> <span>${message}</span>`;
  
  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   SOUND TOGGLE
   ========================================================================== */
function initSoundToggle() {
  const soundBtn = document.getElementById('sound-toggle-btn');
  const soundIcon = document.getElementById('sound-icon');

  if (!soundBtn || !window.SoundFX) return;

  function updateIcon() {
    if (SoundFX.isMuted()) {
      soundIcon.setAttribute('data-lucide', 'volume-x');
    } else {
      soundIcon.setAttribute('data-lucide', 'volume-2');
    }
    if (window.lucide) window.lucide.createIcons();
  }

  updateIcon();

  soundBtn.addEventListener('click', () => {
    SoundFX.toggleMute();
    updateIcon();
    if (!SoundFX.isMuted()) SoundFX.click();
  });
}

/* ==========================================================================
   MOBILE MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
      });
    });
  }
}



function initCopyEmail() {
  const btn = document.getElementById('copy-email-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText('gienzazdn@gmail.com').then(() => {
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<i data-lucide=" check\></i> Disalin!';
 lucide.createIcons();
 showToast('Email gienzazdn@gmail.com disalin ke clipboard!');
 if (window.SoundFX) window.SoundFX.success();
 setTimeout(() => { btn.innerHTML = originalHtml; lucide.createIcons(); }, 2000);
 });
 });
 }
}

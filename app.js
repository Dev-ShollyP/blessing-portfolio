// =============================================================================
// BLESSING | AI VIDEO CREATOR — MAIN APPLICATION SCRIPT
// Theme: Champion Blue (#151130) & Lavender Tonic (#C8BEFA)
// Handles theme switching, video rendering, lightbox modal, filtering, and interactions
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initHeroParticles();
  renderStats();
  renderCategoryTabs();
  renderProjects('all');
  renderServices();
  initModalListeners();
  initContactForm();
  initScrollNav();
  lucide.createIcons();
});

/* ==========================================================================
   1. Theme Toggle System (Local Storage + System Preference)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  
  function applyTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('blessing_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('blessing_theme', 'light');
    }
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const isDark = document.documentElement.classList.contains('dark');
      applyTheme(!isDark);
      lucide.createIcons();
    });
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('blessing_theme')) {
      applyTheme(e.matches);
    }
  });
}

/* ==========================================================================
   2. Hero Canvas Ambient Particle Motion (Champion Blue & Lavender Tonic)
   ========================================================================== */
function initHeroParticles() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener('resize', () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const count = Math.min(Math.floor((width * height) / 18000), 45);
  const particles = [];

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2.2 + 1,
      alpha: Math.random() * 0.45 + 0.15,
      color: Math.random() > 0.5 ? '200, 190, 250' : '122, 98, 232'
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
      ctx.fill();
    }
    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   3. Quick Stats Bar
   ========================================================================== */
function renderStats() {
  const container = document.getElementById('hero-stats-container');
  if (!container || !PORTFOLIO_DATA.stats) return;

  container.innerHTML = PORTFOLIO_DATA.stats.map(stat => `
    <div class="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-[#1E1945]/70 backdrop-blur-md border border-[rgba(200,190,250,0.3)] shadow-sm">
      <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[rgba(200,190,250,0.25)] text-[#151130] dark:text-[#C8BEFA] flex items-center justify-center shrink-0">
        <i data-lucide="${stat.icon}" class="w-4 h-4 sm:w-5 sm:h-5"></i>
      </div>
      <div class="min-w-0 flex-1">
        <div class="text-base sm:text-2xl font-extrabold text-[#151130] dark:text-white tracking-tight leading-none">
          ${stat.value}
        </div>
        <div class="text-[11px] sm:text-xs font-medium text-slate-600 dark:text-[#C8BEFA]/80 mt-0.5 sm:mt-1 truncate">
          ${stat.label}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   4. Category Filter Tabs
   ========================================================================== */
function renderCategoryTabs() {
  const container = document.getElementById('category-tabs-container');
  if (!container || !PORTFOLIO_DATA.categories) return;

  container.innerHTML = PORTFOLIO_DATA.categories.map(cat => `
    <button 
      class="filter-tab ${cat.id === 'all' ? 'active' : ''}" 
      data-category="${cat.id}"
      aria-label="Filter by ${cat.name}">
      <i data-lucide="${cat.icon}" class="w-4 h-4"></i>
      <span>${cat.name}</span>
      <span class="text-xs px-1.5 py-0.5 rounded-full bg-[rgba(200,190,250,0.25)] text-[#151130] dark:text-[#C8BEFA] font-mono font-bold">${cat.count}</span>
    </button>
  `).join('');

  container.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      container.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const categoryId = tab.getAttribute('data-category');
      renderProjects(categoryId);
    });
  });
}

/* ==========================================================================
   5. Projects Grid Rendering
   ========================================================================== */
function renderProjects(categoryFilter = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = categoryFilter === 'all' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === categoryFilter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgba(200,190,250,0.25)] text-[#151130] dark:text-[#C8BEFA] flex items-center justify-center">
          <i data-lucide="video-off" class="w-8 h-8"></i>
        </div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white">No projects found</h3>
        <p class="text-slate-600 dark:text-[#C8BEFA]/80 mt-1">Check back soon for new videos in this category.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(project => `
    <article class="video-card glass-card overflow-hidden flex flex-col group" data-project-id="${project.id}">
      <!-- 9:16 Video Preview Frame -->
      <div class="p-2.5 sm:p-3 pb-0">
        <div class="video-preview-wrapper relative">
          <!-- Thumbnail Poster -->
          <img 
            src="${project.poster}" 
            alt="${project.title}" 
            class="video-poster-img"
            loading="lazy"
          />

          <!-- Top Badge -->
          <div class="video-badge">
            ${project.badge}
          </div>

          <!-- Bottom Duration -->
          <div class="video-duration">
            <i data-lucide="clock" class="w-3 h-3"></i>
            <span>${project.duration}</span>
          </div>

          <!-- Center Play Button Overlay -->
          <button 
            type="button" 
            class="play-overlay-btn" 
            onclick="openCinemaModal('${project.id}')"
            aria-label="Play ${project.title}">
            <i data-lucide="play" class="w-5 h-5 sm:w-6 sm:h-6 fill-[#C8BEFA] ml-0.5"></i>
          </button>
        </div>
      </div>

      <!-- Card Body Content -->
      <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <!-- Category & Aspect Ratio Tags -->
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="text-xs font-bold uppercase tracking-wider text-[#7A62E8] dark:text-[#C8BEFA]">
              ${project.categoryLabel}
            </span>
            <span class="text-xs font-mono text-slate-500 dark:text-[#C8BEFA]/70 flex items-center gap-1">
              <i data-lucide="smartphone" class="w-3 h-3"></i> 9:16
            </span>
          </div>

          <!-- Project Title -->
          <h3 class="text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-[#7A62E8] dark:group-hover:text-[#C8BEFA] transition-colors">
            ${project.title}
          </h3>

          <!-- Core Skill Demonstration -->
          <p class="text-xs text-slate-600 dark:text-slate-300 mt-2.5 line-clamp-2 leading-relaxed">
            <strong class="text-slate-900 dark:text-white font-semibold">Demonstrates:</strong> ${project.demonstrates}
          </p>

          <!-- Tools Used Pills -->
          <div class="flex flex-wrap gap-1.5 mt-3.5">
            ${project.tools.map(tool => `
              <span class="tool-pill">
                ${tool}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2">
          <button 
            type="button"
            class="btn-primary w-full text-xs py-2.5 flex items-center justify-center gap-1.5 shadow-sm"
            onclick="openCinemaModal('${project.id}')">
            <i data-lucide="play" class="w-3.5 h-3.5 fill-current"></i>
            <span>Watch Full Video</span>
          </button>
          
          <a 
            href="https://wa.me/2349011364204?text=Hi%20Blessing,%20I'm%20interested%20in%20a%20video%20similar%20to%20'${encodeURIComponent(project.shortTitle)}'"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary text-xs p-2.5 shrink-0" 
            title="Inquire about this style on WhatsApp">
            <i data-lucide="message-circle" class="w-4 h-4 text-emerald-500"></i>
          </a>
        </div>
      </div>
    </article>
  `).join('');

  lucide.createIcons();
}

/* ==========================================================================
   6. Cinema Lightbox Modal System
   ========================================================================== */
let activeModalVideo = null;

function openCinemaModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const backdrop = document.getElementById('cinema-modal');
  const container = document.getElementById('cinema-modal-body');
  if (!backdrop || !container) return;

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 p-3.5 sm:p-6 lg:p-8">
      <!-- Left Column: 9:16 Video Player -->
      <div class="lg:col-span-5 flex flex-col items-center justify-center">
        <div class="video-preview-wrapper w-full max-w-[260px] sm:max-w-[340px] shadow-2xl border-2 border-[rgba(200,190,250,0.4)]">
          <video 
            id="modal-active-video"
            src="${project.videoFile}" 
            poster="${project.poster}"
            controls 
            autoplay 
            playsinline 
            class="w-full h-full object-cover"
          ></video>
        </div>
        <div class="text-xs text-slate-500 dark:text-[#C8BEFA]/80 mt-2.5 flex items-center gap-1.5">
          <i data-lucide="info" class="w-3.5 h-3.5"></i>
          <span>Native 9:16 vertical render · 60fps mobile-ready</span>
        </div>
      </div>

      <!-- Right Column: Project Breakdown & Client Verdict -->
      <div class="lg:col-span-7 flex flex-col justify-between">
        <div>
          <!-- Header & Badge -->
          <div class="flex items-center gap-2 mb-2">
            <span class="video-badge !static !m-0 !inline-block !bg-[rgba(200,190,250,0.2)] !text-[#151130] dark:!text-[#C8BEFA] !border-[rgba(200,190,250,0.4)] font-bold">
              ${project.specialization}
            </span>
            <span class="text-xs font-mono text-slate-500 dark:text-[#C8BEFA]/80">
              Duration: ${project.duration}
            </span>
          </div>

          <!-- Title -->
          <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            ${project.title}
          </h2>

          <!-- Tagline -->
          <p class="text-sm font-semibold text-[#7A62E8] dark:text-[#C8BEFA] mt-1">
            ${project.tagline}
          </p>

          <!-- Summary / Plot -->
          <div class="mt-4 p-3.5 rounded-xl bg-slate-50 dark:bg-[#151130]/80 border border-slate-200/80 dark:border-[rgba(200,190,250,0.2)]">
            <h4 class="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-[#C8BEFA]/80 mb-1">
              Project Synopsis
            </h4>
            <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              ${project.summary}
            </p>
          </div>

          <!-- What This Specialization Demonstrates -->
          <div class="mt-4">
            <h4 class="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i data-lucide="sparkles" class="w-3.5 h-3.5 text-[#C8BEFA]"></i>
              What This Skill Demonstrates
            </h4>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
              ${project.demonstrates}
            </p>
          </div>

          <!-- Key Technical & Storytelling Highlights -->
          <div class="mt-4">
            <h4 class="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-500"></i>
              Key Technical & Storytelling Highlights
            </h4>
            <ul class="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              ${project.whyRecommended.map(pt => `
                <li class="flex items-start gap-2">
                  <span class="text-[#7A62E8] dark:text-[#C8BEFA] font-bold shrink-0">✓</span>
                  <span>${pt}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- My Role & Production Tools -->
          <div class="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800">
            <div class="text-xs text-slate-500 dark:text-slate-400 mb-1">
              <strong>Blessing's Role:</strong> ${project.role}
            </div>
            <div class="flex flex-wrap gap-1.5 mt-2">
              ${project.tools.map(tool => `<span class="tool-pill">${tool}</span>`).join('')}
            </div>
          </div>
        </div>

        <!-- Call to Action Footer -->
        <div class="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
          <a 
            href="https://wa.me/2349011364204?text=Hi%20Blessing,%20I%20just%20watched%20your%20'${encodeURIComponent(project.shortTitle)}'%20video%20and%20I'd%20love%20to%20discuss%20a%20similar%20project!"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary btn-whatsapp flex-1 text-center justify-center py-3 text-sm">
            <i data-lucide="message-circle" class="w-4 h-4"></i>
            <span>Hire Blessing for This Video Style</span>
          </a>

          <button 
            type="button" 
            onclick="closeCinemaModal()"
            class="btn-secondary py-3 px-5 text-sm justify-center">
            Close
          </button>
        </div>
      </div>
    </div>
  `;

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  activeModalVideo = document.getElementById('modal-active-video');
  lucide.createIcons();
}

function closeCinemaModal() {
  const backdrop = document.getElementById('cinema-modal');
  if (!backdrop) return;
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
  if (activeModalVideo) {
    activeModalVideo.pause();
    activeModalVideo.src = '';
    activeModalVideo = null;
  }
}

function initModalListeners() {
  const backdrop = document.getElementById('cinema-modal');
  if (!backdrop) return;

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeCinemaModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeCinemaModal();
    }
  });
}

/* ==========================================================================
   7. Services Grid Rendering
   ========================================================================== */
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container || !PORTFOLIO_DATA.services) return;

  container.innerHTML = PORTFOLIO_DATA.services.map(svc => `
    <div class="glass-card p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all">
      <div>
        <div class="w-12 h-12 rounded-2xl bg-[rgba(200,190,250,0.25)] text-[#151130] dark:text-[#C8BEFA] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-sm">
          <i data-lucide="${svc.icon}" class="w-6 h-6"></i>
        </div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
          ${svc.title}
        </h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
          ${svc.description}
        </p>

        <ul class="mt-4 space-y-2">
          ${svc.highlights.map(hl => `
            <li class="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
              <i data-lucide="check" class="w-3.5 h-3.5 text-[#7A62E8] dark:text-[#C8BEFA] shrink-0"></i>
              <span>${hl}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
        <a 
          href="https://wa.me/2349011364204?text=Hi%20Blessing,%20I'd%20like%20to%20inquire%20about%20your%20'${encodeURIComponent(svc.title)}'%20service."
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs font-bold text-[#7A62E8] dark:text-[#C8BEFA] hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-all">
          <span>Request Quote & Timeline</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   8. Interactive Contact & WhatsApp Form
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('project-inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('client-name')?.value.trim() || 'Client';
    const email = document.getElementById('client-email')?.value.trim() || 'Not provided';
    const service = document.getElementById('client-service')?.value || 'AI Video Production';
    const budget = document.getElementById('client-budget')?.value || 'Flexible';
    const message = document.getElementById('client-message')?.value.trim() || 'I would like to discuss an AI video project.';

    const waText = `Hi Blessing,\n\nMy name is ${name} (${email}).\nI'm interested in: ${service}\nBudget range: ${budget}\n\nProject details:\n${message}\n\nLooking forward to working together!`;

    const encoded = encodeURIComponent(waText);
    const waUrl = `https://wa.me/2349011364204?text=${encoded}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  });

  // Copy Email Buttons
  document.querySelectorAll('.copy-email-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const email = PORTFOLIO_DATA.profile.contacts.email;
      navigator.clipboard.writeText(email).then(() => {
        const span = btn.querySelector('span');
        const originalText = span ? span.textContent : '';
        if (span) span.textContent = 'Email Copied!';
        setTimeout(() => {
          if (span) span.textContent = originalText;
        }, 2000);
      });
    });
  });
}

/* ==========================================================================
   11. Smooth Navigation & Header Shadow
   ========================================================================== */
function initScrollNav() {
  const header = document.querySelector('.glass-nav');
  window.addEventListener('scroll', () => {
    if (!header) return;
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

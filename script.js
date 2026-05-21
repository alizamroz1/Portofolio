/* ═══════════════════════════════════════
   MUHAMMAD ALI ZAMROZI — PORTFOLIO JS
   ═══════════════════════════════════════ */

'use strict';

// ══════════════════════════════════════
// 1. LANGUAGE DATA (BILINGUAL)
// ══════════════════════════════════════
const LANG = {
  id: {
    'nav-home':       'Home',
    'nav-about':      'Tentang',
    'nav-skills':     'Keahlian',
    'nav-exp':        'Pengalaman',
    'nav-projects':   'Proyek',
    'nav-contact':    'Kontak',
    'hero-badge':     'Terbuka untuk Kolaborasi',
    'hero-tagline':   'Menghubungkan Presisi Manufaktur dengan Inovasi Digital',
    'stat-exp':       'Tahun Pengalaman',
    'stat-sem':       'Semester Aktif',
    'stat-proj':      'Proyek Selesai',
    'btn-cv':         'Unduh CV',
    'btn-projects':   'Lihat Proyek',
    'btn-contact':    'Hubungi Saya',
    'scroll-down':    'Gulir ke Bawah',
    'about-tag':      '// Tentang Saya',
    'about-title':    'Siapa Saya',
    'about-greeting': 'Halo, Saya Ali 👋',
    'about-bio':      'Saya adalah <strong>CNC Programmer</strong> dengan pengalaman sekitar <strong>4 tahun</strong> di bidang manufaktur dan machining. Saat ini saya juga menempuh pendidikan <strong>S1 Sistem Informasi di Universitas Terbuka</strong> semester 7.',
    'about-bio2':     'Saya memiliki minat pada <strong>pengembangan teknologi digital</strong>, web development, engineering workflow, serta integrasi antara industri manufaktur dan sistem informasi. Saya terbiasa bekerja secara <strong>detail, teknis, dan problem-solving oriented</strong>.',
    'info-edu':       'Pendidikan',
    'info-loc':       'Lokasi',
    'info-work':      'Pekerjaan',
    'info-work-val':  'Industri Manufaktur',
    'skills-tag':     '// Arsenal Teknis',
    'skills-title':   'Keahlian & Kompetensi',
    'skill-cat1':     'Manufaktur & CNC',
    'skill-cat2':     'Web Development',
    'skill-cat3':     'AI & Tools Digital',
    'exp-tag':        '// Riwayat Kerja',
    'exp-title':      'Pengalaman',
    'exp1-role':      'CNC Programmer',
    'exp1-company':   'Industri Manufaktur',
    'exp1-status':    'Aktif',
    'exp1-desc':      'Bertanggung jawab pada programming mesin CNC, setup produksi, optimasi proses machining, serta troubleshooting teknis di area workshop. Mengembangkan workflow produksi yang efisien dan menjaga kualitas komponen sesuai spesifikasi teknik.',
    'exp2-role':      'S1 Sistem Informasi',
    'exp2-period':    '2022 – Sekarang (Sem. 7)',
    'exp2-status':    'Aktif',
    'exp2-desc':      'Menempuh pendidikan S1 di bidang Sistem Informasi sambil bekerja penuh waktu. Fokus pada pengembangan kompetensi digital, analisis sistem, dan integrasi teknologi informasi dalam dunia industri.',
    'proj-tag':       '// Karya Saya',
    'proj-title':     'Proyek',
    'filter-all':     'Semua',
    'filter-digital': 'Digital',
    'filter-eng':     'Teknik',
    'proj1-title':    'Website Portfolio Personal',
    'proj1-desc':     'Website portfolio modern dengan desain industrial-futuristic untuk menampilkan profil, skill, dan project engineering/digital. Dibangun dengan HTML, CSS, dan JavaScript murni.',
    'proj2-title':    'Desain Logo Workshop Engineering',
    'proj2-desc':     'Pembuatan identitas visual profesional untuk divisi internal perusahaan industri baja. Mencakup desain logo, panduan warna, dan elemen branding yang mencerminkan presisi dan kekuatan industri.',
    'proj3-title':    'Gambar Teknik & Riset Bearing',
    'proj3-desc':     'Dokumentasi dan analisis teknis komponen bearing SKF/NTN/NSK untuk kebutuhan engineering. Meliputi technical drawing detail, spesifikasi dimensi, toleransi, dan rekomendasi penggunaan komponen.',
    'proj4-title':    'Dokumentasi CNC & Manufaktur',
    'proj4-desc':     'Pembuatan gambar teknik terstandar, dimensi komponen mesin, dan workflow produksi machining yang terdokumentasi. Mencakup setup sheet, tool list, dan prosedur quality control.',
    'link-code':      'Kode',
    'view-github':    'Lihat di GitHub',
    'ach-tag':        '// Kredensial',
    'ach-title':      'Pencapaian & Sertifikasi',
    'ach1-title':     'Webinar & Training Engineering Manufaktur',
    'ach1-desc':      'Aktif mengikuti seminar dan pelatihan di bidang engineering manufaktur untuk terus meningkatkan kompetensi teknis di industri.',
    'ach1-cat':       'Engineering',
    'ach2-title':     'Belajar Mandiri Web Development',
    'ach2-desc':      'Menguasai dasar-dasar web development (HTML, CSS, JavaScript) secara mandiri sebagai langkah integrasi industri dengan teknologi digital.',
    'ach2-cat':       'Digital',
    'ach3-title':     'AI Workflow & Prompt Engineering',
    'ach3-desc':      'Mempelajari dan mengimplementasikan AI tools dalam workflow sehari-hari, termasuk prompt engineering untuk meningkatkan produktivitas kerja.',
    'ach3-cat':       'AI & Tech',
    'contact-tag':    '// Hubungi Saya',
    'contact-title':  'Kontak',
    'contact-subtitle': 'Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi saya!',
    'contact-info-title': 'Ayo Terhubung',
    'form-name-label':    'Nama',
    'form-subject-label': 'Subjek',
    'form-msg-label':     'Pesan',
    'form-send':      'Kirim Pesan',
    'footer-copy':    '© 2024 Muhammad Ali Zamrozi. Semua hak cipta dilindungi.',
    'footer-made':    'Dibuat dengan ❤️ — Presisi Bertemu Digital',
  },
  en: {
    'nav-home':       'Home',
    'nav-about':      'About',
    'nav-skills':     'Skills',
    'nav-exp':        'Experience',
    'nav-projects':   'Projects',
    'nav-contact':    'Contact',
    'hero-badge':     'Available for Collaboration',
    'hero-tagline':   'Bridging Manufacturing Precision with Digital Innovation',
    'stat-exp':       'Years Experience',
    'stat-sem':       'Semester Active',
    'stat-proj':      'Projects Done',
    'btn-cv':         'Download CV',
    'btn-projects':   'View Projects',
    'btn-contact':    'Contact Me',
    'scroll-down':    'Scroll Down',
    'about-tag':      '// About Me',
    'about-title':    'Who I Am',
    'about-greeting': 'Hello, I\'m Ali 👋',
    'about-bio':      'I am a <strong>CNC Programmer</strong> with approximately <strong>4 years</strong> of experience in manufacturing and machining. I am also pursuing a <strong>Bachelor\'s degree in Information Systems at Universitas Terbuka</strong>, semester 7.',
    'about-bio2':     'I have a passion for <strong>digital technology development</strong>, web development, engineering workflow, and integration between the manufacturing industry and information systems. I am accustomed to working in a <strong>detail-oriented, technical, and problem-solving</strong> manner.',
    'info-edu':       'Education',
    'info-loc':       'Location',
    'info-work':      'Work',
    'info-work-val':  'Manufacturing Industry',
    'skills-tag':     '// Technical Arsenal',
    'skills-title':   'Skills & Expertise',
    'skill-cat1':     'Manufacturing & CNC',
    'skill-cat2':     'Web Development',
    'skill-cat3':     'AI & Digital Tools',
    'exp-tag':        '// Work History',
    'exp-title':      'Experience',
    'exp1-role':      'CNC Programmer',
    'exp1-company':   'Manufacturing Industry',
    'exp1-status':    'Active',
    'exp1-desc':      'Responsible for CNC machine programming, production setup, machining process optimization, and technical troubleshooting in the workshop area. Developed efficient production workflows and maintained component quality to engineering specifications.',
    'exp2-role':      'B.S. Information Systems',
    'exp2-period':    '2022 – Present (Sem. 7)',
    'exp2-status':    'Active',
    'exp2-desc':      'Pursuing a Bachelor\'s degree in Information Systems while working full-time. Focused on developing digital competencies, systems analysis, and information technology integration in the industrial world.',
    'proj-tag':       '// My Work',
    'proj-title':     'Projects',
    'filter-all':     'All',
    'filter-digital': 'Digital',
    'filter-eng':     'Engineering',
    'proj1-title':    'Personal Portfolio Website',
    'proj1-desc':     'Modern portfolio website with an industrial-futuristic design to showcase profile, skills, and engineering/digital projects. Built with pure HTML, CSS, and JavaScript.',
    'proj2-title':    'Engineering Workshop Logo Design',
    'proj2-desc':     'Creation of professional visual identity for an internal division of a steel industry company. Includes logo design, color guidelines, and branding elements reflecting precision and industrial strength.',
    'proj3-title':    'Technical Drawing & Bearing Research',
    'proj3-desc':     'Technical documentation and analysis of SKF/NTN/NSK bearing components for engineering needs. Includes detailed technical drawings, dimensional specifications, tolerances, and component usage recommendations.',
    'proj4-title':    'CNC & Manufacturing Documentation',
    'proj4-desc':     'Creation of standardized technical drawings, machine component dimensions, and documented machining production workflows. Includes setup sheets, tool lists, and quality control procedures.',
    'link-code':      'Code',
    'view-github':    'View on GitHub',
    'ach-tag':        '// Credentials',
    'ach-title':      'Achievements & Certifications',
    'ach1-title':     'Webinar & Engineering Manufacturing Training',
    'ach1-desc':      'Actively participating in seminars and training in the field of engineering manufacturing to continuously improve technical competency in the industry.',
    'ach1-cat':       'Engineering',
    'ach2-title':     'Self-Learning Web Development',
    'ach2-desc':      'Independently mastered the fundamentals of web development (HTML, CSS, JavaScript) as a step toward integrating industry with digital technology.',
    'ach2-cat':       'Digital',
    'ach3-title':     'AI Workflow & Prompt Engineering',
    'ach3-desc':      'Studying and implementing AI tools in daily workflow, including prompt engineering to improve work productivity.',
    'ach3-cat':       'AI & Tech',
    'contact-tag':    '// Get In Touch',
    'contact-title':  'Contact Me',
    'contact-subtitle': 'Interested in collaborating or have a question? Feel free to reach out!',
    'contact-info-title': 'Let\'s Connect',
    'form-name-label':    'Name',
    'form-subject-label': 'Subject',
    'form-msg-label':     'Message',
    'form-send':      'Send Message',
    'footer-copy':    '© 2024 Muhammad Ali Zamrozi. All rights reserved.',
    'footer-made':    'Crafted with ❤️ — Precision meets Digital',
  }
};

// ══════════════════════════════════════
// 2. TYPEWRITER TITLES
// ══════════════════════════════════════
const TITLES = {
  id: ['CNC Programmer', 'IS Student — Sem 7', 'Web Developer', 'Problem Solver', 'Digital Enthusiast'],
  en: ['CNC Programmer', 'IS Student — Sem 7', 'Web Developer', 'Problem Solver', 'Digital Enthusiast']
};

// ══════════════════════════════════════
// 3. STATE
// ══════════════════════════════════════
let currentLang  = 'id';
let currentTheme = 'dark';
let titleIndex   = 0;
let charIndex    = 0;
let isDeleting   = false;
let typeTimeout  = null;

// ══════════════════════════════════════
// 4. DOM READY
// ══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initCursor();
  initNavbar();
  initThemeToggle();
  initLangToggle();
  initCanvas();
  initTypewriter();
  initScrollReveal();
  initSkillBars();
  initProjectFilter();
  initContactForm();
  initScrollTop();
  initSmoothScroll();
});

// ══════════════════════════════════════
// 5. PRELOADER
// ══════════════════════════════════════
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const preText   = document.getElementById('preloader-text');
  const msgs      = ['Initializing...', 'Loading Assets...', 'Calibrating System...', 'Ready.'];
  let idx = 0;

  const interval = setInterval(() => {
    preText.textContent = msgs[Math.min(idx++, msgs.length - 1)];
    if (idx >= msgs.length) clearInterval(interval);
  }, 450);

  setTimeout(() => {
    preloader.classList.add('done');
    setTimeout(() => preloader.remove(), 700);
  }, 1900);
}

// ══════════════════════════════════════
// 6. CUSTOM CURSOR
// ══════════════════════════════════════
function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .project-card, .ach-card, .contact-item').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
  });
}

// ══════════════════════════════════════
// 7. NAVBAR
// ══════════════════════════════════════
function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const hamburger= document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const links    = document.querySelectorAll('.nav-link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveNav();
  });

  // Hamburger
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close on link click (mobile)
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });
}

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const links    = document.querySelectorAll('.nav-link');
  let current    = 'home';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

// ══════════════════════════════════════
// 8. THEME TOGGLE
// ══════════════════════════════════════
function initThemeToggle() {
  const btn  = document.getElementById('theme-toggle');
  const icon = btn.querySelector('.theme-icon');
  const html = document.documentElement;

  // Load saved theme
  const saved = localStorage.getItem('maz-theme') || 'dark';
  applyTheme(saved);

  btn.addEventListener('click', () => {
    const next = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('maz-theme', next);
  });

  function applyTheme(theme) {
    currentTheme = theme;
    html.setAttribute('data-theme', theme);
    icon.textContent = theme === 'dark' ? '🌙' : '☀️';
  }
}

// ══════════════════════════════════════
// 9. LANGUAGE TOGGLE
// ══════════════════════════════════════
function initLangToggle() {
  const btn  = document.getElementById('lang-toggle');
  const html = document.documentElement;

  const saved = localStorage.getItem('maz-lang') || 'id';
  applyLang(saved);

  btn.addEventListener('click', () => {
    const next = currentLang === 'id' ? 'en' : 'id';
    applyLang(next);
    localStorage.setItem('maz-lang', next);
  });

  function applyLang(lang) {
    currentLang = lang;
    html.setAttribute('data-lang', lang);
    const data = LANG[lang];

    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (data[key] !== undefined) {
        el.innerHTML = data[key];
      }
    });

    // Reset typewriter on lang change
    titleIndex = 0; charIndex = 0; isDeleting = false;
    clearTimeout(typeTimeout);
    const tw = document.getElementById('typewriter');
    if (tw) tw.textContent = '';
    typewriter();
  }
}

// ══════════════════════════════════════
// 10. HERO CANVAS (PARTICLE NETWORK)
// ══════════════════════════════════════
function initCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let W, H, animFrame;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); buildParticles(); });

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.r  = Math.random() * 1.5 + 0.5;
      this.alpha = Math.random() * 0.5 + 0.2;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > W) this.vx *= -1;
      if (this.y < 0 || this.y > H) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(187, 32, 32, ${this.alpha})`;
      ctx.fill();
    }
  }

  function buildParticles() {
    const count = Math.floor((W * H) / 14000);
    particles = Array.from({ length: Math.min(count, 80) }, () => new Particle());
  }
  buildParticles();

  function drawLines() {
    const maxDist = 140;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.25;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(187, 32, 32, ${alpha})`;
          ctx.lineWidth   = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    animFrame = requestAnimationFrame(loop);
  }
  loop();
}

// ══════════════════════════════════════
// 11. TYPEWRITER EFFECT
// ══════════════════════════════════════
function initTypewriter() { typewriter(); }

function typewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const titles = TITLES[currentLang];
  const current = titles[titleIndex];
  const speed   = isDeleting ? 50 : 100;

  if (!isDeleting) {
    el.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      typeTimeout = setTimeout(typewriter, 2200);
      return;
    }
  } else {
    el.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }
  }
  typeTimeout = setTimeout(typewriter, speed);
}

// ══════════════════════════════════════
// 12. SCROLL REVEAL (INTERSECTION OBSERVER)
// ══════════════════════════════════════
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ══════════════════════════════════════
// 13. SKILL BARS ANIMATION
// ══════════════════════════════════════
function initSkillBars() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll('.skill-fill');
        fills.forEach((fill, i) => {
          const pct = fill.getAttribute('data-pct');
          setTimeout(() => {
            fill.style.width = pct + '%';
          }, i * 120);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skill-category').forEach(cat => observer.observe(cat));
}

// ══════════════════════════════════════
// 14. PROJECT FILTER
// ══════════════════════════════════════
function initProjectFilter() {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const match = filter === 'all' || card.getAttribute('data-category') === filter;
        card.style.transition = 'opacity 0.3s, transform 0.3s';
        if (match) {
          card.classList.remove('hidden');
          card.style.opacity = '1';
          card.style.transform = '';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => card.classList.add('hidden'), 300);
        }
      });
    });
  });
}

// ══════════════════════════════════════
// 15. CONTACT FORM (Web3Forms)
// ══════════════════════════════════════
function initContactForm() {
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const submit = document.getElementById('form-submit');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name    = document.getElementById('form-name').value.trim();
    const email   = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !subject || !message) {
      showStatus('error', currentLang === 'id'
        ? '⚠️ Mohon lengkapi semua kolom.'
        : '⚠️ Please fill in all fields.');
      return;
    }

    // Update hidden subject field with actual subject input
    const hiddenSubject = document.getElementById('form-subject-hidden');
    if (hiddenSubject) hiddenSubject.value = `[Portfolio] ${subject}`;

    // Disable button & show loading
    submit.disabled = true;
    submit.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation:spin 1s linear infinite"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>
      <span>${currentLang === 'id' ? 'Mengirim...' : 'Sending...'}</span>`;

    try {
      const formData = new FormData(form);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        showStatus('success', currentLang === 'id'
          ? '✅ Pesan berhasil terkirim! Saya akan segera menghubungi kamu.'
          : '✅ Message sent successfully! I will get back to you soon.');
        form.reset();
      } else {
        throw new Error(result.message || 'Failed to send');
      }
    } catch (err) {
      showStatus('error', currentLang === 'id'
        ? '❌ Gagal mengirim pesan. Silakan coba lagi atau hubungi via WhatsApp.'
        : '❌ Failed to send message. Please try again or contact via WhatsApp.');
    } finally {
      submit.disabled = false;
      submit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> <span data-key="form-send">${currentLang === 'id' ? 'Kirim Pesan' : 'Send Message'}</span>`;
    }
  });

  function showStatus(type, msg) {
    status.className = 'form-status ' + type;
    status.textContent = msg;
    setTimeout(() => { status.className = 'form-status'; }, 6000);
  }
}

// ══════════════════════════════════════
// 16. SCROLL TO TOP
// ══════════════════════════════════════
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ══════════════════════════════════════
// 17. SMOOTH SCROLL (ANCHOR LINKS)
// ══════════════════════════════════════
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH = document.getElementById('navbar').offsetHeight;
        const top  = target.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ══════════════════════════════════════
// 18. COUNTER ANIMATION (Stats)
// ══════════════════════════════════════
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = Math.floor(start) + (el.dataset.suffix || '');
  }, 16);
}

// Trigger counters when hero stats are visible
const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat-num').forEach(num => {
        const val = parseInt(num.textContent);
        if (!isNaN(val)) animateCounter(num, val);
      });
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
  const statsEl = document.querySelector('.hero-stats');
  if (statsEl) statsObserver.observe(statsEl);
});

// ══════════════════════════════════════
// 19. PARALLAX SUBTLE (Hero)
// ══════════════════════════════════════
window.addEventListener('scroll', () => {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent && window.scrollY < window.innerHeight) {
    const y = window.scrollY * 0.25;
    heroContent.style.transform = `translateY(${y}px)`;
    heroContent.style.opacity   = 1 - (window.scrollY / (window.innerHeight * 0.7));
  }
});

// ══════════════════════════════════════
// 20. ACTIVE NAV ON LOAD
// ══════════════════════════════════════
window.addEventListener('load', updateActiveNav);

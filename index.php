<!DOCTYPE html>
<html lang="id" data-theme="dark">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gienza Zidan Athalah | S1 Sistem Informasi</title>
  <meta name="description"
    content="Portofolio Profesional Gienza Zidan Athalah - Mahasiswa S1 Sistem Informasi Universitas Darma Persada. Spesialis Pengembangan Sistem, Analisis Kebutuhan Bisnis, & Jaringan Komputer." />
  <meta name="theme-color" content="#090d16" />

  <!-- Google Fonts: Outfit & JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet" />

  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <!-- Main Custom CSS -->
  <link rel="stylesheet" href="css/styles.css" />
</head>

<body>

  <!-- CUSTOM GLOWING MAGNETIC CURSOR -->
  <div id="custom-cursor-dot" class="cursor-dot"></div>
  <div id="custom-cursor-ring" class="cursor-ring"></div>

  <!-- INITIAL PRELOADER SCREEN -->
  <div id="preloader" class="preloader">
    <div class="preloader-content">
      <h1 class="preloader-brand">Gienza Zidan Athalah</h1>
      <p class="preloader-sub">Mahasiswa S1 Sistem Informasi</p>
      <div class="preloader-bar-bg">
        <div class="preloader-bar-fill"></div>
      </div>
    </div>
  </div>

  <canvas id="particle-canvas"></canvas>

  <!-- Ambient Light Glowing Orbs -->
  <div class="ambient-glow ambient-glow-1"></div>
  <div class="ambient-glow ambient-glow-2"></div>

  <!-- Toast Notification Container -->
  <div id="toast-container"></div>

  <!-- NAVIGATION BAR -->
  <nav class="navbar">
    <a href="#hero" class="nav-brand">
      <span>Gienza Zidan Athalah</span>
    </a>

    <ul class="nav-links">
      <li><a href="#hero" class="nav-link active">Beranda</a></li>
      <li><a href="#about" class="nav-link">Tentang</a></li>
      <li><a href="#skills" class="nav-link">Keahlian</a></li>
      <li><a href="#projects" class="nav-link">Proyek</a></li>
      <li><a href="#experience" class="nav-link">Pengalaman</a></li>
      <li><a href="#contact" class="nav-link">Kontak</a></li>
    </ul>

    <div class="nav-actions">
      <button id="mobile-menu-toggle" class="mobile-nav-toggle">
        <i data-lucide="menu"></i>
      </button>
    </div>
  </nav>

  <!-- MOBILE MENU OVERLAY -->
  <div id="mobile-menu" class="mobile-menu">
    <ul style="list-style:none; display:flex; flex-direction:column; gap:1.25rem;">
      <li><a href="#hero" class="mobile-nav-link nav-link">Beranda</a></li>
      <li><a href="#about" class="mobile-nav-link nav-link">Tentang</a></li>
      <li><a href="#skills" class="mobile-nav-link nav-link">Keahlian</a></li>
      <li><a href="#projects" class="mobile-nav-link nav-link">Proyek</a></li>
      <li><a href="#experience" class="mobile-nav-link nav-link">Pengalaman</a></li>
      <li><a href="#contact" class="mobile-nav-link nav-link">Kontak</a></li>
    </ul>
  </div>

  <!-- MAIN SECTIONS (Modular Included Files) -->
  <main>
    <?php include 'sections/hero.html'; ?>
    <?php include 'sections/about.html'; ?>
    <?php include 'sections/skills.html'; ?>
    <?php include 'sections/projects.html'; ?>
    <?php include 'sections/experience.html'; ?>
    <?php include 'sections/contact.html'; ?>
  </main>

  <!-- FLOATING CHAT WA BUTTON -->
  <a href="https://wa.me/6285718704571" target="_blank" class="floating-wa-btn" title="Chat via WhatsApp">
    <img src="images/icons/wa-icon.svg" alt="WhatsApp" />
    <span>Chat WA</span>
  </a>

  <!-- PROJECT DETAIL MODAL -->
  <div id="project-modal" class="modal-backdrop">
    <div class="modal-box">
      <button id="modal-close-btn" class="modal-close" title="Tutup Modal">
        <i data-lucide="x"></i>
      </button>
      <div id="modal-body-content">
        <!-- Dynamically injected by JS -->
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <footer>
    <div class="container">
      <div class="footer-content">
        <p>© 2026 Gienza Zidan Athalah. Built with passion, HTML5, Vanilla CSS, & JavaScript ES6+.</p>
      </div>
    </div>
  </footer>

  <!-- JavaScript Modules -->
  <script src="js/projects-data.js"></script>
  <script src="js/audio.js"></script>
  <script src="js/tilt.js"></script>
  <script src="js/particles.js"></script>
  <script src="js/main.js"></script>

</body>

</html>

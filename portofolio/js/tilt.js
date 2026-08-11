/**
 * 3D Parallax Tilt & Spotlight Cursor Effect
 */
(function() {
  function initTiltEffects() {
    const tiltElements = document.querySelectorAll('.tilt-card, .project-card, .stat-box, .skill-card');

    tiltElements.forEach(el => {
      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);
      el.addEventListener('mouseenter', handleMouseEnter);
    });
  }

  function handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Smoother tilt: max 4.5 deg rotation & 1.01 scale
    const rotateX = ((y - centerY) / centerY) * -4.5;
    const rotateY = ((x - centerX) / centerX) * 4.5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`;
    
    // Dynamic radial gradient background spotlight
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(99, 102, 241, 0.12), var(--card-bg) 75%)`;
  }

  function handleMouseEnter(e) {
    // Smooth transition interpolation on enter & movement to remove abrupt snapping/jitter
    e.currentTarget.style.transition = 'transform 0.15s cubic-bezier(0.2, 0, 0.2, 1), background 0.25s ease';
  }

  function handleMouseLeave(e) {
    const card = e.currentTarget;
    card.style.transition = 'transform 0.5s cubic-bezier(0.2, 0, 0.2, 1), background 0.5s ease';
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.background = 'var(--card-bg)';
  }

  window.initTiltEffects = initTiltEffects;
  document.addEventListener('DOMContentLoaded', initTiltEffects);
})();

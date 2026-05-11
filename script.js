// ─── ANIMACIONES DE SCROLL ───────────────────────────────
// Hace que los elementos aparezcan suavemente al hacer scroll

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

// Aplica el efecto a secciones, cards y elementos del timeline
const elementosAnimados = document.querySelectorAll(
  '.section, .project-card, .timeline-item, .skills-list li, .learning-list li'
);

elementosAnimados.forEach((el) => {
  el.classList.add('fade-in');
  observador.observe(el);
});


// ─── NAV ACTIVA AL HACER SCROLL ──────────────────────────
// Cambia el enlace activo en la barra de navegación

const secciones = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let actual = '';

  secciones.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 90) {
      actual = sec.id;
    }
  });

  navLinks.forEach((link) => {
    link.style.color = link.getAttribute('href') === `#${actual}`
      ? '#fff'
      : '';
  });
});


// ─── CONFIRMACIÓN EN CONSOLA ─────────────────────────────
console.log('%c Portfolio cargado ✓',
  'background:#3b82f6;color:white;padding:4px 10px;border-radius:6px;font-weight:600'
);
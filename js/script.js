document.addEventListener('DOMContentLoaded', () => {

  const glowAmber = document.getElementById('glowAmber');
  const glowPurple = document.getElementById('glowPurple');
  const prefersReducedMotionBg = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (glowAmber && glowPurple && !prefersReducedMotionBg) {
    let targetX = 0, targetY = 0;
    window.addEventListener('mousemove', (e) => {
      targetX = (e.clientX / window.innerWidth) - 0.5;
      targetY = (e.clientY / window.innerHeight) - 0.5;
    });
    function animateGlow() {
      glowAmber.style.transform = `translate(${targetX * 60}px, ${targetY * 60}px)`;
      glowPurple.style.transform = `translate(${targetX * -50}px, ${targetY * -50}px)`;
      requestAnimationFrame(animateGlow);
    }
    requestAnimationFrame(animateGlow);
  }

  if (window.particlesJS) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 70, density: { enable: true, value_area: 900 } },
        color: { value: ['#00f5d4', '#7c3aed'] },
        shape: { type: 'circle' },
        opacity: { value: 0.4, random: true },
        size: { value: 2.5, random: true },
        line_linked: { enable: true, distance: 130, color: '#00f5d4', opacity: 0.15, width: 1 },
        move: { enable: true, speed: 1.2, direction: 'none', random: true, out_mode: 'out' }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 0.4 } },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: true
    });
  }

  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 20 ? '0 4px 30px rgba(0,0,0,0.4)' : 'none';
  });

  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.setAttribute('aria-expanded', navLinks.classList.contains('active') ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
  });

  const translations = {
    es: {
      logo: 'Dilan Fonseca',
      skip_link: 'Saltar al contenido principal',
      nav_home: 'Inicio',
      nav_about: 'Sobre mí',
      nav_skills: 'Habilidades',
      nav_experience: 'Trayectoria',
      nav_projects: 'Proyectos',
      nav_faq: 'FAQ',
      nav_contact: 'Contacto',
      contact_me: 'Contact Me',
      greeting: 'Hola, soy',
      role: 'Software Developer <span>(en formación)</span>',
      hero_desc: 'Construyendo experiencias digitales limpias, funcionales y con propósito.',
      view_projects: 'Ver Proyectos',
      photo_fallback: 'Coloca tu foto/gif aquí',
      eyebrow_about: '// sobre-mi',
      eyebrow_skills: '// habilidades',
      eyebrow_experience: '// trayectoria',
      eyebrow_projects: '// proyectos',
      eyebrow_contact: '// contacto',
      faq_title: 'Preguntas <span>Frecuentes</span>',
      faq2_q: '¿Qué modalidad de trabajo prefieres?',
      faq2_a: 'Prefiero trabajar de forma remota.',
      faq3_q: '¿Qué tecnologías manejas?',
      faq3_a: 'Trabajo con HTML5, CSS3, JavaScript, Python, Git y Firebase, todas en nivel intermedio. Puedes ver el detalle en la sección de Habilidades.',
      faq4_q: '¿Puedo ver proyectos que hayas desarrollado?',
      faq4_a: 'Sí, en la sección de Proyectos encuentras la Fundación Patitas Felices y el sistema de Gestión de Producción ACME, ambos con demo en vivo y repositorio.',
      faq5_q: '¿Cómo puedo contactarte?',
      faq5_a: 'Puedes escribirme usando el formulario de contacto más abajo o a través de mi perfil de GitHub.',
      eyebrow_faq: '// preguntas-frecuentes',
      skills_title: 'Nivel <span>Técnico</span>',
      experience_title: 'Formación <span>&</span> Hitos',
      tag_education: 'Educación',
      tag_project: 'Proyecto',
      tl1_date: '2026 — Actualidad',
      tl1_title: 'Campuslands',
      tl1_desc: 'Formación en Desarrollo de Software, con énfasis en Frontend y Backend.',
      tl2_date: '2026',
      tl2_title: 'Fundación Patitas Felices',
      tl2_desc: 'Sitio web para una fundación de bienestar animal, desarrollado con HTML5 y CSS3.',
      tl3_date: '2026',
      tl3_title: 'Gestión de Producción — ACME',
      tl3_desc: 'Aplicación web para el control de usuarios, inventario y producción, con JavaScript y Firebase.',
      level_basic: 'Básico',
      level_intermediate: 'Intermedio',
      level_intermediate_adv: 'Intermedio-Avanzado',
      level_advanced: 'Avanzado',
      about_title: 'Sobre mí <span>&</span> Tecnologías',
      about_typed: 'Estudiante de Desarrollo de Software en Colombia 🇨🇴.\n\n💻 Enfocado en fortalecer mis habilidades en Frontend y Backend.\n📚 Siempre explorando nuevas tecnologías y buenas prácticas.\n🛠️ Construyendo proyectos reales para ganar experiencia práctica.\n🚀 Trabajando para convertirme en desarrollador Full Stack.',
      projects_title1: 'Proyectos',
      projects_title2: 'Destacados',
      proj1_desc: 'Sitio web desarrollado para una fundación dedicada al cuidado y bienestar animal.',
      proj2_desc: 'Aplicación web para gestionar usuarios, inventario y producción de la empresa ACME.',
      proj3_desc: 'Sistema de pedidos para una cafetería, operado por bot de Telegram con IA, n8n y Google Sheets.',
      view_project: 'Ver Proyecto',
      contact_title: 'Contáctame',
      form_name: 'Nombre',
      form_email: 'Correo Electrónico',
      form_message: 'Mensaje',
      form_submit: 'Enviar Mensaje',
      footer_text: '2026 · Estudiante de Desarrollo de Software en Colombia 🇨🇴 · Construyendo, uno commit a la vez.',
      sent: 'Enviado ✓'
    },
    en: {
      logo: 'Dilan Fonseca',
      skip_link: 'Skip to main content',
      nav_home: 'Home',
      nav_about: 'About',
      nav_skills: 'Skills',
      nav_experience: 'Journey',
      nav_projects: 'Projects',
      nav_faq: 'FAQ',
      nav_contact: 'Contact',
      contact_me: 'Contact Me',
      greeting: "Hi, I'm",
      role: 'Software Developer <span>(in training)</span>',
      hero_desc: 'Building clean, functional digital experiences with purpose.',
      view_projects: 'View Projects',
      photo_fallback: 'Add your photo/gif here',
      eyebrow_about: '// about-me',
      eyebrow_skills: '// skills',
      eyebrow_experience: '// journey',
      eyebrow_projects: '// projects',
      eyebrow_contact: '// contact',
      faq_title: 'Frequently Asked <span>Questions</span>',
      faq2_q: 'What work setup do you prefer?',
      faq2_a: 'I prefer to work remotely.',
      faq3_q: 'What technologies do you work with?',
      faq3_a: 'I work with HTML5, CSS3, JavaScript, Python, Git and Firebase, all at an intermediate level. See the Skills section for details.',
      faq4_q: 'Can I see projects you have built?',
      faq4_a: 'Yes, the Projects section features Fundación Patitas Felices and the ACME Production Management system, both with a live demo and repository.',
      faq5_q: 'How can I reach you?',
      faq5_a: 'You can write to me using the contact form below or through my GitHub profile.',
      eyebrow_faq: '// faq',
      skills_title: 'Technical <span>Level</span>',
      experience_title: 'Education <span>&</span> Milestones',
      tag_education: 'Education',
      tag_project: 'Project',
      tl1_date: '2026 — Present',
      tl1_title: 'Campuslands',
      tl1_desc: 'Software Development training, with emphasis on Frontend and Backend.',
      tl2_date: '2026',
      tl2_title: 'Fundación Patitas Felices',
      tl2_desc: 'Website for an animal welfare foundation, built with HTML5 and CSS3.',
      tl3_date: '2026',
      tl3_title: 'ACME Production Management',
      tl3_desc: 'Web application for user, inventory, and production control, using JavaScript and Firebase.',
      level_basic: 'Basic',
      level_intermediate: 'Intermediate',
      level_intermediate_adv: 'Intermediate-Advanced',
      level_advanced: 'Advanced',
      about_title: 'About Me <span>&</span> Technologies',
      about_typed: 'Software Development student in Colombia 🇨🇴.\n\n💻 Focused on strengthening my Frontend and Backend skills.\n📚 Always exploring new technologies and best practices.\n🛠️ Building real projects to gain hands-on experience.\n🚀 Working towards becoming a Full Stack developer.',
      projects_title1: 'Featured',
      projects_title2: 'Projects',
      proj1_desc: 'Website built for a foundation dedicated to animal care and welfare.',
      proj2_desc: 'Web application to manage users, inventory, and production for ACME.',
      proj3_desc: 'Coffee shop ordering system, run through a Telegram bot with AI, n8n, and Google Sheets.',
      view_project: 'View Project',
      contact_title: 'Contact Me',
      form_name: 'Name',
      form_email: 'Email Address',
      form_message: 'Message',
      form_submit: 'Send Message',
      footer_text: '2026 · Software Development Student in Colombia 🇨🇴 · Building, one commit at a time.',
      sent: 'Sent ✓'
    }
  };

  const i18nEls = document.querySelectorAll('[data-i18n]');
  const langBtns = document.querySelectorAll('.lang-btn');
  let currentLang = localStorage.getItem('portfolio-lang') || 'es';

  function applyLang(lang) {
    const dict = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = dict[key];
      if (value === undefined) return;
      if (value.includes('<')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });
    langBtns.forEach(btn => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    document.documentElement.lang = lang;
    localStorage.setItem('portfolio-lang', lang);
    currentLang = lang;
    if (typeof aboutTyped !== 'undefined' && aboutTyped) typeAbout();
  }

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
  });

  const aboutTerminal = document.getElementById('aboutTerminal');
  const aboutTypedText = document.querySelector('#aboutTyped .term-output-text');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let aboutTyped = false;
  let aboutTypeTimeout = null;

  function typeAbout() {
    if (!aboutTypedText) return;
    clearTimeout(aboutTypeTimeout);
    const text = (translations[currentLang] && translations[currentLang].about_typed) || '';
    if (prefersReducedMotion) {
      aboutTypedText.textContent = text;
      return;
    }
    let i = 0;
    aboutTypedText.textContent = '';
    (function step() {
      aboutTypedText.textContent = text.slice(0, i);
      i++;
      if (i <= text.length) {
        aboutTypeTimeout = setTimeout(step, 18);
      }
    })();
  }

  applyLang(currentLang);

  if (aboutTerminal) {
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !aboutTyped) {
          aboutTyped = true;
          typeAbout();
          aboutObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    aboutObserver.observe(aboutTerminal);
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = translations[currentLang].sent;
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        contactForm.reset();
      }, 2500);
    });
  }

  const proyectos = [
    {
      titulo: "Fundación Patitas Felices",
      descI18n: "proj1_desc",
      tags: ["HTML", "CSS"],
      link: "https://fundaci-n-patitas-felices-ixwp.vercel.app/",
      imagenes: [
        "img/patitas1.webp",
        "img/patitas2.webp",
        "img/patitas3.webp"
      ]
    },
    {
      titulo: "Gestión de Producción - ACME",
      descI18n: "proj2_desc",
      tags: ["HTML", "CSS", "JavaScript", "Firebase"],
      link: "https://dafcgg.github.io/Gestion-de-produccion-Acme/pages/login.html",
      imagenes: [
        "img/acme1.webp",
        "img/acme2.webp",
        "img/acme3.webp",
        "img/acme4.webp"
      ]
    },
    {
      titulo: "DeliveryBot",
      descI18n: "proj3_desc",
      tags: ["n8n", "Telegram Bot API", "Google Sheets", "IA / Gemini"],
      link: "https://github.com/Dafcgg/DeliveryBot",
      imagenes: [
        "img/deliverybot1.webp",
        "img/deliverybot2.webp",
        "img/deliverybot3.webp"
      ]
    }
  ];

  function crearCarruselHTML(imagenes, tituloProyecto) {

    const slides = imagenes.map((src, i) => `
      <div class="carousel-slide">
        <img src="${src}" alt="${tituloProyecto} - imagen ${i + 1}" loading="lazy">
      </div>
    `).join('');

    const dots = imagenes.map((_, i) => `
      <button type="button" class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Ir a la imagen ${i + 1}"></button>
    `).join('');

    const controles = imagenes.length > 1 ? `
      <button type="button" class="carousel-btn prev" aria-label="Imagen anterior">&#10094;</button>
      <button type="button" class="carousel-btn next" aria-label="Siguiente imagen">&#10095;</button>
      <div class="carousel-dots">${dots}</div>
    ` : '';

    return `
      <div class="carousel" data-total="${imagenes.length}">
        <div class="carousel-track">${slides}</div>
        ${controles}
      </div>
    `;
  }

  function crearTarjetaProyecto(proyecto) {
    const dict = translations[currentLang];
    const tagsHTML = proyecto.tags.map(t => `<span>${t}</span>`).join('');

    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      ${crearCarruselHTML(proyecto.imagenes, proyecto.titulo)}
      <div class="project-body">
        <h3>${proyecto.titulo}</h3>
        <p data-i18n="${proyecto.descI18n}">${dict[proyecto.descI18n]}</p>
        <div class="tags">${tagsHTML}</div>
        <a href="${proyecto.link}" target="_blank" rel="noopener" class="btn btn-outline btn-sm" data-i18n="view_project">${dict.view_project}</a>
      </div>
    `;
    return card;
  }

  function inicializarCarrusel(carouselEl) {
    const track = carouselEl.querySelector('.carousel-track');
    const slides = carouselEl.querySelectorAll('.carousel-slide');
    const dots = carouselEl.querySelectorAll('.carousel-dot');
    const btnPrev = carouselEl.querySelector('.carousel-btn.prev');
    const btnNext = carouselEl.querySelector('.carousel-btn.next');
    const total = slides.length;
    let index = 0;

    function irA(i) {

      index = (i + total) % total;
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, di) => dot.classList.toggle('active', di === index));
    }

    if (btnNext) btnNext.addEventListener('click', () => irA(index + 1));
    if (btnPrev) btnPrev.addEventListener('click', () => irA(index - 1));
    dots.forEach(dot => {
      dot.addEventListener('click', () => irA(parseInt(dot.getAttribute('data-index'), 10)));
    });

    carouselEl._irA = irA;
  }

  const projectsGrid = document.getElementById('projectsGrid');
  if (projectsGrid) {
    proyectos.forEach(proyecto => {
      const tarjeta = crearTarjetaProyecto(proyecto);
      projectsGrid.appendChild(tarjeta);
    });
    projectsGrid.querySelectorAll('.carousel').forEach(inicializarCarrusel);

    applyLang(currentLang);
  }

  const revealEls = document.querySelectorAll('.tech-badge, .project-card, .glass-card, .skill-item, .timeline-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

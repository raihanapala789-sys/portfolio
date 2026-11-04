/**
 * RAIHANATH — AI CONTENT CREATOR PORTFOLIO
 * Main JavaScript Controller
 */

// Project Showcase Data
const PROJECTS_DATA = {
  abba: {
    title: "Abba Perfume",
    category: "High-Fashion Cinematic Commercial",
    tagline: "Sensory Olfactory Visual Storytelling via Generative Motion",
    videoUrl: "assets/abba-perfume.mp4",
    tools: ["Seedance", "ChatGPT", "CapCut"],
    overview: "A premium fragrance commercial project designed to evoke scent through visual motion. Using advanced AI image synthesis and video generation models, the commercial captures glowing amber liquid physics, golden particles, and macro bottle reflections in cinematic 4K detail.",
    promptStrategy: "Ultra-detailed prompt crafting with negative prompt refinement for raytraced reflections, slow-motion viscous fluid simulation, and warm cinematic golden hour backlighting.",
    highlights: [
      "Viscous amber fluid dynamics rendered purely through generative AI",
      "Macro lens depth-of-field simulation with golden dust bokeh",
      "Sound-designed tempo matched to CapCut rhythmic audio cuts"
    ]
  },
  pluspoint: {
    title: "Plus Point Cleaning Service",
    category: "Professional Cleaning Commercial",
    tagline: "Spotless Spaces & Dynamic Visual Storytelling for Cleaning Services",
    videoUrl: "assets/plus-point.mp4",
    tools: ["Wan", "Claude", "CapCut"],
    overview: "A crisp, high-impact commercial tailored for Plus Point professional cleaning services. Showcasing pristine home and corporate environments, spotless surface transformations, and dependable hygiene standards engineered to inspire client trust and drive booking inquiries.",
    promptStrategy: "Precise prompt generation focused on gleaming interior lighting, immaculate surface clarity, architectural depth, and energetic camera glides emphasizing pristine cleanliness.",
    highlights: [
      "Gleaming surface reflections and dust-free interior simulations",
      "Dynamic pacing showcasing seamless before-and-after transformations",
      "High-converting call-to-actions tailored for service booking growth"
    ]
  },
  evostyle: {
    title: "Evostyle Ad",
    category: "High-Fashion Cinematic Commercial",
    tagline: "Haute Couture Editorial Aesthetics & AI Fabric Simulation",
    tools: ["Kling AI", "ChatGPT", "CapCut"],
    overview: "A luxury fashion concept film highlighting futuristic clothing silhouettes, draped silk motion, and editorial runway models. It explores how generative artificial intelligence can replace traditional high-cost studio photo/video shoots with runway-level precision.",
    promptStrategy: "Prompt-engineered lighting setups modeled after Annie Leibovitz and Mario Testino studio techniques, combined with physics modifiers for silk and organza drapery.",
    highlights: [
      "Photorealistic textile and fabric motion without CGI rendering farms",
      "Editorial color grading using cinematic LUTs in CapCut",
      "Consistent model identity maintained across varied scene lighting"
    ]
  },
  vilavil: {
    title: "Vilavil Buttermilk Ad",
    category: "Dairy & Beverage Commercial",
    tagline: "Traditional Craftsmanship & Farm-Fresh Buttermilk Visual Storytelling",
    videoUrl: "assets/vilavil-ad.mp4",
    tools: ["OmniFlash", "Claude", "CapCut"],
    overview: "A vibrant, sensory commercial created for Vilavil's authentic buttermilk manufacturing brand. Blending rich dairy heritage with modern food manufacturing, the video highlights natural ingredients, creamy fluid dynamics, condensation-chilled bottles, and farm-fresh refreshment designed to stimulate appetite and build deep consumer brand loyalty.",
    promptStrategy: "Multi-layered generative prompt architecture orchestrating macro dairy fluid splashes, traditional churning aesthetics, chilled bottle condensation beads, and warm sunlit farm ambiance.",
    highlights: [
      "Rich, realistic dairy fluid physics and refreshing splash simulations",
      "Authentic blend of traditional churned craftsmanship and modern FMCG packaging",
      "Sensory sound design synced with energetic rhythmic editing in CapCut"
    ]
  }
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initProjectFilters();
  initTiltEffect();
  initHeroTyping();
  initAboutBackgroundAnimation();
});

/* ===================================================================
   THEME CONTROLLER (Permanent Night Mode / Obsidian Gold)
   =================================================================== */
function initTheme() {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("raihanath_theme", "dark");
}

/* ===================================================================
   NAVIGATION & SCROLL SPY
   =================================================================== */
function initNavigation() {
  const siteHeader = document.getElementById("siteHeader");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const links = document.querySelectorAll(".nav-link");

  // Sticky header shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
    updateActiveNavLink();
  });

  // Mobile menu toggle
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    // Close menu when clicking a link
    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset + 120;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop;
    const sectionId = current.getAttribute("id");
    const correspondingLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

    if (correspondingLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
        correspondingLink.classList.add("active");
      }
    }
  });
}

/* ===================================================================
   PROJECT FILTERS
   =================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const category = card.getAttribute("data-category") || "";
        if (filterValue === "all" || category.includes(filterValue)) {
          card.style.display = "flex";
          card.style.animation = "fadeInCard 0.4s ease forwards";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* ===================================================================
   PROJECT MODAL
   =================================================================== */
function openProjectModal(projectId) {
  const data = PROJECTS_DATA[projectId];
  if (!data) return;

  const modal = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalContent");

  modalContent.innerHTML = `
    ${data.videoUrl ? `
      <div style="margin-bottom: 1.5rem; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--gold-border); box-shadow: var(--shadow-md); background: #000;">
        <video src="${data.videoUrl}" controls autoplay playsinline style="width: 100%; display: block; aspect-ratio: 16/9; object-fit: contain; background: #000; max-height: 480px;"></video>
      </div>
    ` : ''}

    <div style="margin-bottom: 1.5rem;">
      <span class="metallic-badge">${data.category}</span>
      <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--text-primary); margin: 0.6rem 0 0.3rem 0; font-weight: 800;">
        ${data.title}
      </h2>
      <p style="font-size: 1rem; color: var(--gold-deep); font-weight: 600;">
        ${data.tagline}
      </p>
    </div>

    <div style="background: var(--bg-card); border: 1px solid var(--gold-border); border-radius: var(--radius-md); padding: 1.4rem; margin-bottom: 1.5rem;">
      <h4 style="font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold-deep); margin-bottom: 0.5rem; font-weight: 700;">
        Overview & Creative Vision
      </h4>
      <p style="font-size: 0.98rem; color: var(--text-secondary); line-height: 1.7;">
        ${data.overview}
      </p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold-deep); margin-bottom: 0.5rem; font-weight: 700;">
        Prompt Architecture & Engineering
      </h4>
      <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; background: rgba(197, 160, 89, 0.1); padding: 1rem; border-radius: var(--radius-sm); border-left: 3px solid var(--gold-primary);">
        “${data.promptStrategy}”
      </p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold-deep); margin-bottom: 0.75rem; font-weight: 700;">
        Key Achievements
      </h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
        ${data.highlights.map(item => `
          <li style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.92rem; color: var(--text-secondary);">
            <i class="fa-solid fa-check" style="color: var(--gold-primary); font-size: 0.85rem;"></i>
            <span>${item}</span>
          </li>
        `).join("")}
      </ul>
    </div>

    <div style="padding-top: 1.25rem; border-top: 1px solid var(--gold-border); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        ${data.tools.map(tool => `<span class="tool-chip">${tool}</span>`).join("")}
      </div>

      <a href="https://wa.me/919745147246?text=Hi%20Raihanath,%20I'd%20like%20to%20discuss%20a%20project%20similar%20to%20${encodeURIComponent(data.title)}" target="_blank" class="btn-primary" style="padding: 0.6rem 1.4rem; font-size: 0.8rem;">
        <i class="fa-brands fa-whatsapp"></i>
        <span>Request Similar Video</span>
      </a>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  if (modal) {
    const video = modal.querySelector("video");
    if (video) video.pause();
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function closeProjectModalOnBackdrop(e) {
  if (e.target.id === "projectModal") {
    closeProjectModal();
  }
}

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal();
  }
});

/* ===================================================================
   COPY TO CLIPBOARD & TOAST NOTIFICATION
   =================================================================== */
function copyToClipboard(text, message) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message || "Copied to clipboard!");
  }).catch(() => {
    showToast("Unable to copy automatically.");
  });
}

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check" style="color: var(--gold-deep); font-size: 1.1rem;"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.35s ease";
    setTimeout(() => {
      toast.remove();
    }, 350);
  }, 3200);
}

/* ===================================================================
   CONTACT FORM HANDLER
   =================================================================== */
function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("userName").value.trim();
  const email = document.getElementById("userEmail").value.trim();
  const service = document.getElementById("serviceSelect").value;
  const message = document.getElementById("userMessage").value.trim();
  const submitBtn = document.getElementById("submitBtn");

  if (!name || !email || !service || !message) {
    showToast("Please complete all required fields.");
    return;
  }

  // Visual button loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <i class="fa-solid fa-circle-notch fa-spin"></i>
    <span>Preparing Inquiry...</span>
  `;

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = `
      <span>Send Collaboration Request</span>
      <i class="fa-solid fa-paper-plane"></i>
    `;

    // Construct pre-filled WhatsApp link
    const waText = encodeURIComponent(
      `Hello Raihanath!\n\nMy Name: ${name}\nEmail: ${email}\nService Interested: ${service}\n\nProject Brief:\n${message}`
    );
    const waUrl = `https://wa.me/919745147246?text=${waText}`;

    // Prompt user to connect via WhatsApp or Mail
    showToast(`Thank you ${name}! Opening WhatsApp connection...`);

    // Reset form
    document.getElementById("contactForm").reset();

    // Open WhatsApp after a brief delay
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 1000);
  }, 800);
}

/* ===================================================================
   SUBTLE 3D TILT EFFECT ON CARDS
   =================================================================== */
function initTiltEffect() {
  const cards = document.querySelectorAll(".gold-card, .why-card");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

/* ===================================================================
   HERO TYPING ANIMATION (Moving Typewriter Effect)
   =================================================================== */
function initHeroTyping() {
  const container = document.getElementById("typingHeroDescription");
  if (!container) return;

  const textSpan = container.querySelector(".typing-text");
  if (!textSpan) return;

  const fullText = "Hi, I'm RAIHANATH, an AI CONTENT CREATOR. I transform ideas into cinematic AI videos, compelling advertisements, and creative digital experiences for modern brands.";

  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 35;
  const deleteSpeed = 16;
  const pauseAtEnd = 4500;
  const pauseAtStart = 500;

  function formatText(text) {
    let formatted = text;
    if (formatted.includes("RAIHANATH")) {
      formatted = formatted.replace("RAIHANATH", "<strong>RAIHANATH</strong>");
    }
    if (formatted.includes("AI CONTENT CREATOR")) {
      formatted = formatted.replace("AI CONTENT CREATOR", "<strong>AI CONTENT CREATOR</strong>");
    }
    return formatted;
  }

  // Clear static text to start typewriter
  textSpan.innerHTML = "";

  function typeStep() {
    if (!isDeleting) {
      charIndex++;
      const current = fullText.substring(0, charIndex);
      textSpan.innerHTML = formatText(current);

      if (charIndex === fullText.length) {
        isDeleting = true;
        setTimeout(typeStep, pauseAtEnd);
        return;
      }
      setTimeout(typeStep, typeSpeed);
    } else {
      charIndex--;
      const current = fullText.substring(0, charIndex);
      textSpan.innerHTML = formatText(current);

      if (charIndex === 0) {
        isDeleting = false;
        setTimeout(typeStep, pauseAtStart);
        return;
      }
      setTimeout(typeStep, deleteSpeed);
    }
  }

  setTimeout(typeStep, 350);
}

/* ===================================================================
   ABOUT SECTION BACKGROUND ANIMATION: NEURAL & MOLECULAR LATTICE
   Bridging AI Network Nodes with Chemistry Organic Geometry
   =================================================================== */
function initAboutBackgroundAnimation() {
  const canvas = document.getElementById("aboutMeshCanvas");
  const section = document.getElementById("about");
  if (!canvas || !section) return;

  const ctx = canvas.getContext("2d");
  let animationFrameId = null;
  let isVisible = true;
  let width = 0;
  let height = 0;

  // Mouse interaction state
  const mouse = {
    x: -9999,
    y: -9999,
    radius: 160,
    active: false
  };

  section.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });

  section.addEventListener("mouseleave", () => {
    mouse.active = false;
    mouse.x = -9999;
    mouse.y = -9999;
  });

  function resize() {
    const rect = section.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }

  window.addEventListener("resize", () => {
    resize();
    initParticles();
  });

  // Particle definition
  const PARTICLE_COUNT = Math.min(Math.max(Math.floor(window.innerWidth / 32), 30), 55);
  let particles = [];

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = initial ? Math.random() * width : (Math.random() > 0.5 ? 0 : width);
      this.y = initial ? Math.random() * height : Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 2.2 + 1.4;
      this.isAmber = Math.random() > 0.55;
      this.baseAlpha = Math.random() * 0.4 + 0.35;
      this.pulse = Math.random() * Math.PI * 2;
      this.pulseSpeed = 0.02 + Math.random() * 0.025;
      this.isHexNode = Math.random() > 0.82;
      this.hexAngle = Math.random() * Math.PI;
      this.hexRadius = Math.random() * 6 + 14;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.pulse += this.pulseSpeed;
      if (this.isHexNode) {
        this.hexAngle += 0.005;
      }

      // Gentle bounce at boundaries
      if (this.x < 10) { this.x = 10; this.vx *= -1; }
      if (this.x > width - 10) { this.x = width - 10; this.vx *= -1; }
      if (this.y < 10) { this.y = 10; this.vy *= -1; }
      if (this.y > height - 10) { this.y = height - 10; this.vy *= -1; }

      // Mouse gentle interaction
      if (mouse.active) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius && dist > 0) {
          const force = (1 - dist / mouse.radius) * 0.55;
          this.x += (dx / dist) * force;
          this.y += (dy / dist) * force;
        }
      }
    }

    draw(isDark) {
      const currentAlpha = this.baseAlpha + Math.sin(this.pulse) * 0.15;
      const alphaClamped = Math.max(0.12, Math.min(0.85, currentAlpha));

      let primaryColor = this.isAmber
        ? (isDark ? `rgba(251, 108, 0, ${alphaClamped})` : `rgba(251, 108, 0, ${alphaClamped * 0.9})`)
        : (isDark ? `rgba(229, 205, 130, ${alphaClamped})` : `rgba(180, 136, 50, ${alphaClamped * 0.85})`);

      // Core particle
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = primaryColor;
      ctx.fill();

      // Soft glow aura
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius * 2.6, 0, Math.PI * 2);
      ctx.fillStyle = this.isAmber
        ? `rgba(251, 108, 0, ${alphaClamped * 0.18})`
        : `rgba(229, 205, 130, ${alphaClamped * 0.18})`;
      ctx.fill();

      // Chemistry / Molecular Hexagon Ring around select nodes
      if (this.isHexNode) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.hexAngle);
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (i * Math.PI) / 3;
          const hx = Math.cos(a) * this.hexRadius;
          const hy = Math.sin(a) * this.hexRadius;
          if (i === 0) ctx.moveTo(hx, hy);
          else ctx.lineTo(hx, hy);
        }
        ctx.closePath();
        ctx.strokeStyle = isDark
          ? `rgba(229, 205, 130, ${alphaClamped * 0.32})`
          : `rgba(180, 136, 50, ${alphaClamped * 0.28})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
        ctx.restore();
      }
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
  }

  resize();
  initParticles();

  const MAX_CONNECT_DIST = 135;

  function render() {
    if (!isVisible) return;

    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.getAttribute("data-theme") === "dark";

    // 1. Draw connecting lines between particles
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.hypot(dx, dy);

        if (dist < MAX_CONNECT_DIST) {
          const ratio = 1 - dist / MAX_CONNECT_DIST;
          const lineAlpha = ratio * (isDark ? 0.32 : 0.22);

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = isDark
            ? (p1.isAmber || p2.isAmber ? `rgba(251, 108, 0, ${lineAlpha})` : `rgba(229, 205, 130, ${lineAlpha})`)
            : (p1.isAmber || p2.isAmber ? `rgba(251, 108, 0, ${lineAlpha * 0.95})` : `rgba(180, 136, 50, ${lineAlpha * 0.85})`);
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }

      // Mouse connection line
      if (mouse.active) {
        const mdx = mouse.x - p1.x;
        const mdy = mouse.y - p1.y;
        const mDist = Math.hypot(mdx, mdy);
        if (mDist < mouse.radius) {
          const mRatio = 1 - mDist / mouse.radius;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(251, 108, 0, ${mRatio * 0.4})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }
    }

    // 2. Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw(isDark);
    }

    animationFrameId = requestAnimationFrame(render);
  }

  // IntersectionObserver to pause when off-screen (preserves CPU & battery)
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isVisible) {
              isVisible = true;
              animationFrameId = requestAnimationFrame(render);
            }
          } else {
            isVisible = false;
            if (animationFrameId) {
              cancelAnimationFrame(animationFrameId);
              animationFrameId = null;
            }
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(section);
  }

  animationFrameId = requestAnimationFrame(render);
}

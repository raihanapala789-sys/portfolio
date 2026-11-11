/**
 * RAIHANATH — AI CONTENT CREATOR PORTFOLIO
 * Main JavaScript Controller
 */

// Project Showcase Data
const PROJECTS_DATA = {
  abba: {
    title: "Abba Perfume",
    category: "Luxury Perfume Commercial",
    tagline: "",
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
    title: "School Admission Ad",
    category: "Educational Campaign Ad",
    tagline: "Inspiring Campus Journeys & Dynamic Student Life Commercial",
    videoUrl: "assets/school-admission.mp4",
    tools: ["Seedance", "ChatGPT", "CapCut"],
    overview: "A vibrant, uplifting commercial crafted for school and academy admissions. Blending dynamic visual storytelling with emotional student moments, the campaign highlights interactive classrooms, STEM innovation labs, sports excellence, and creative arts to build parent confidence and boost admission inquiries.",
    promptStrategy: "Carefully structured multi-scene prompts featuring sunlit modern campus architectures, authentic diverse student interactions, engaging teacher-student dynamics, and cinematic golden-hour sports track motion.",
    highlights: [
      "Inspiring visual narrative engineered to drive parent inquiry and enrollment",
      "Dynamic campus motion graphics and seamless transition pacing",
      "Warm emotional grading and synchronized voiceover sound design in CapCut"
    ]
  },
  vilavil: {
    title: "Buttermilk Ad",
    category: "Dairy & Beverage Commercial",
    tagline: "Traditional Craftsmanship & Farm-Fresh Buttermilk Visual Storytelling",
    videoUrl: "assets/vilavil-ad.mp4",
    tools: ["OmniFlash", "Claude", "CapCut"],
    overview: "A vibrant, sensory commercial created for an authentic buttermilk manufacturing brand. Blending rich dairy heritage with modern food manufacturing, the video highlights natural ingredients, creamy fluid dynamics, condensation-chilled bottles, and farm-fresh refreshment designed to stimulate appetite and build deep consumer brand loyalty.",
    promptStrategy: "Multi-layered generative prompt architecture orchestrating macro dairy fluid splashes, traditional churning aesthetics, chilled bottle condensation beads, and warm sunlit farm ambiance.",
    highlights: [
      "Rich, realistic dairy fluid physics and refreshing splash simulations",
      "Authentic blend of traditional churned craftsmanship and modern FMCG packaging",
      "Sensory sound design synced with energetic rhythmic editing in CapCut"
    ]
  },
  chocolate: {
    title: "Chocolate Action Trailer",
    category: "FMCG Confectionery Commercial",
    tagline: "High-Octane Cinematic Action & Molten Chocolate Visual Dynamics",
    videoUrl: "assets/chocolate-commercial.mp4",
    tools: ["OmniFlash", "ChatGPT", "CapCut"],
    overview: "A cinematic, fast-paced commercial trailer crafted to transform chocolate confectionery into a high-octane sensory action spectacle. Featuring explosive chocolate shards, cascading molten ganache, and dramatic hyper-stylized lighting designed for intense consumer craving and high viral engagement.",
    promptStrategy: "Dynamic physics-driven prompt choreography specifying macro slow-motion fluid cascades, glossy liquid cocoa reflections, explosive wafer shattering, and intense cinematic chiaroscuro contrast.",
    highlights: [
      "Photorealistic viscous chocolate fluid cascades and shard impact physics",
      "Action-trailer pacing synchronized with high-impact audio sound design",
      "Engineered for sub-3-second viral digital feed retention and appetite stimulation"
    ]
  },
  jasper: {
    title: "Jasper Commercial",
    category: "Brand Campaign Commercial",
    tagline: "Modern Lifestyle Storytelling & Premium Brand Aesthetics",
    videoUrl: "assets/jasper-commercial.mp4",
    tools: ["Wan", "Claude", "CapCut"],
    overview: "A sleek, contemporary brand commercial designed for Jasper. Combining cinematic camera sweeps, polished product styling, and emotive character narrative to elevate brand prestige and connect with modern lifestyle consumers.",
    promptStrategy: "Narrative prompt architecture balancing urban architectural backdrops, refined lighting setups, seamless character continuity, and smooth generative tracking shots.",
    highlights: [
      "Consistent high-end character identity and modern aesthetic atmosphere",
      "Seamless camera motion transitions and editorial color grading",
      "Dynamic multi-platform delivery optimized for modern digital campaigns"
    ]
  }
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initProjectFilters();
  initTiltEffect();
  initHeroScrollAnimation();
  initHeroTyping();
  initAboutBackgroundAnimation();
  initTrailingParticlesAnimation();
  initServicesScrollAnimation();
  initWhyScrollAnimation();
  initToolsStaggerAnimation();
  initExperimentsScrollAnimation();
  initScrollParallaxEffects();
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
      const isOpen = navLinks.classList.toggle("open");
      navToggle.classList.toggle("active", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu when clicking a link
    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (navLinks.classList.contains("open") && !siteHeader.contains(e.target)) {
        navLinks.classList.remove("open");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      }
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
      const newlyVisible = [];

      projectCards.forEach(card => {
        const category = card.getAttribute("data-category") || "";
        const shouldShow = filterValue === "all" || category.includes(filterValue);
        if (shouldShow) {
          const wasHidden = card.style.display === "none";
          card.style.display = "flex";
          if (wasHidden) {
            card.classList.remove("cinema-in");
            card.style.setProperty("--exp-rx", "14deg");
            card.style.setProperty("--dir-y", "38px");
            newlyVisible.push(card);
          }
        } else {
          const wrapper = card.querySelector(".project-thumbnail-wrapper");
          const video = wrapper ? wrapper.querySelector(".project-card-video") : null;
          if (video && !video.paused) {
            video.pause();
          }
          if (wrapper && wrapper.classList.contains("is-playing")) {
            wrapper.classList.remove("is-playing");
            const playBtn = wrapper.querySelector(".play-prompt-btn");
            if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
          }
          card.style.display = "none";
          card.classList.remove("cinema-in");
        }
      });

      window.dispatchEvent(new Event("portfolio:layoutchange"));

      if (newlyVisible.length) {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            const vh = window.innerHeight || 800;
            newlyVisible.forEach(card => {
              if (card.style.display === "none") return;
              const rect = card.getBoundingClientRect();
              if (rect.top < vh * 0.92 && rect.bottom > 0) {
                card.classList.add("cinema-in");
              }
            });
          });
        });
      }
    });
  });
}

/* ===================================================================
   EXPERIMENT CARD VIDEO TAP-TO-PLAY & AUDIO TOGGLE
   =================================================================== */
function toggleCardVideo(wrapper, event) {
  if (event) {
    event.stopPropagation();
  }
  
  const video = wrapper.querySelector(".project-card-video");
  const playBtn = wrapper.querySelector(".play-prompt-btn");
  if (!video) return;

  // Pause any other playing card videos so only one card plays at a time
  document.querySelectorAll(".project-thumbnail-wrapper.is-playing").forEach((otherWrapper) => {
    if (otherWrapper !== wrapper) {
      const otherVideo = otherWrapper.querySelector(".project-card-video");
      if (otherVideo && !otherVideo.paused) {
        otherVideo.pause();
      }
      otherWrapper.classList.remove("is-playing");
      const otherBtn = otherWrapper.querySelector(".play-prompt-btn");
      if (otherBtn) {
        otherBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      }
    }
  });

  if (video.paused) {
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          wrapper.classList.add("is-playing");
          if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        })
        .catch(() => {
          // Fallback if browser restricts unmuted playback
          video.muted = true;
          video.play().then(() => {
            wrapper.classList.add("is-playing");
            if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
          });
        });
    }
  } else {
    video.pause();
    wrapper.classList.remove("is-playing");
    if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }

  video.onended = () => {
    wrapper.classList.remove("is-playing");
    if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    video.currentTime = 0;
  };
}

function toggleCardAudio(btn, event) {
  if (event) {
    event.stopPropagation();
  }
  const wrapper = btn.closest(".project-thumbnail-wrapper");
  if (!wrapper) return;
  const video = wrapper.querySelector(".project-card-video");
  if (!video) return;

  video.muted = !video.muted;
  btn.innerHTML = video.muted
    ? '<i class="fa-solid fa-volume-xmark"></i>'
    : '<i class="fa-solid fa-volume-high"></i>';
  btn.setAttribute("title", video.muted ? "Unmute" : "Mute");
  btn.setAttribute("aria-label", video.muted ? "Unmute" : "Mute");
}

/* ===================================================================
   PROJECT MODAL
   =================================================================== */
function openProjectModal(projectId) {
  // Pause any playing card videos in background
  document.querySelectorAll(".project-card-video").forEach((v) => {
    if (!v.paused) v.pause();
  });
  document.querySelectorAll(".project-thumbnail-wrapper.is-playing").forEach((w) => {
    w.classList.remove("is-playing");
    const btn = w.querySelector(".play-prompt-btn");
    if (btn) btn.innerHTML = '<i class="fa-solid fa-play"></i>';
  });

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
      <h2 style="font-family: var(--font-serif); font-size: clamp(1.4rem, 4.5vw, 2.2rem); color: var(--text-primary); margin: 0.6rem 0 0.3rem 0; font-weight: 800; line-height: 1.2;">
        ${data.title}
      </h2>
      ${data.tagline ? `
        <p style="font-size: 1rem; color: var(--gold-deep); font-weight: 600;">
          ${data.tagline}
        </p>
      ` : ''}
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

  // Ensure modal video plays smoothly with autoplay policy fallback
  const modalVideo = modal.querySelector("video");
  if (modalVideo) {
    modalVideo.currentTime = 0;
    const playPromise = modalVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay with audio deferred by browser; user can tap the player controls
      });
    }
  }
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
      // Don't tilt until card has animated into place
      if ((card.classList.contains("slide-from-left") || card.classList.contains("slide-from-right")) && !card.classList.contains("animate-in")) {
        return;
      }

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
   SHARED BI-DIRECTIONAL SCROLL REVEAL HELPER
   Replays entrance cleanly whenever scrolled back into view (up or down)
   =================================================================== */
function observeBidirectionalReveal(elements, activeClass, minRatio = 0.08, onExit = null) {
  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add(activeClass));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting && entry.intersectionRatio >= minRatio) {
          el.classList.add(activeClass);
        } else if (!entry.isIntersecting) {
          // Determine whether element exited above or below viewport for directional re-entry
          const exitedAbove = entry.boundingClientRect.top < 0;
          el.style.setProperty("--dir-y", exitedAbove ? "-28px" : "28px");
          if (onExit) onExit(el, exitedAbove);
          el.classList.remove(activeClass);
        }
      });
    },
    { threshold: [0, minRatio] }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ===================================================================
   SHARED CARD STACK & SEQUENTIAL ITEM STAGGER REVEAL
   =================================================================== */
function initCardStackReveal({
  containerSelector,
  itemSelectors,
  activeClass,
  itemStep = 0.11,
  colStep = 0.14,
  baseDelay = 0.08,
  columns = 3
}) {
  const cards = Array.from(document.querySelectorAll(containerSelector));
  if (!cards.length) return;

  function updateStaggerDelays() {
    const isSingleColumn = window.innerWidth <= 1024;
    cards.forEach((card, cardIndex) => {
      const colIndex = cardIndex % columns;
      const boxOffset = isSingleColumn ? 0.04 : (colIndex * colStep);
      const items = card.querySelectorAll(itemSelectors);
      items.forEach((item, itemIndex) => {
        const delay = boxOffset + (itemIndex * itemStep) + baseDelay;
        item.style.setProperty("--stagger-delay", `${delay.toFixed(2)}s`);
      });
    });
  }

  updateStaggerDelays();
  window.addEventListener("resize", updateStaggerDelays, { passive: true });

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    cards.forEach((card) => card.classList.add(activeClass));
    return;
  }

  observeBidirectionalReveal(cards, activeClass, 0.08);
}

/* ===================================================================
   SERVICES ("WHAT I BRING") SCROLL ENTRANCE & INNER CASCADE
   =================================================================== */
function initServicesScrollAnimation() {
  initCardStackReveal({
    containerSelector: ".services-grid .gold-card",
    itemSelectors: ".card-header-bar, .card-icon-banner, .card-title, .card-description, .card-tag",
    activeClass: "animate-in",
    itemStep: 0.08,
    colStep: 0.14,
    baseDelay: 0.08,
    columns: 3
  });
}

/* ===================================================================
   WHY WORK WITH ME SCROLL ENTRANCE & INNER CASCADE
   =================================================================== */
function initWhyScrollAnimation() {
  initCardStackReveal({
    containerSelector: ".why-grid .why-card",
    itemSelectors: ".why-num, .why-title, .why-p",
    activeClass: "animate-in",
    itemStep: 0.11,
    colStep: 0.14,
    baseDelay: 0.08,
    columns: 3
  });
}

/* ===================================================================
   TOOLS STAGGER ENTRANCE ANIMATION (Tools enter one by one per box)
   =================================================================== */
function initToolsStaggerAnimation() {
  initCardStackReveal({
    containerSelector: ".tools-categories .tool-group-card",
    itemSelectors: ".tool-item-pill",
    activeClass: "stagger-active",
    itemStep: 0.11,
    colStep: 0.14,
    baseDelay: 0.08,
    columns: 3
  });
}

/* ===================================================================
   VISUAL EXPERIMENTS: 3D CINEMA CURTAIN REVEAL & OPPOSING PARALLAX
   =================================================================== */
function initExperimentsScrollAnimation() {
  const cards = Array.from(document.querySelectorAll(".projects-grid .project-card"));
  if (!cards.length) return;

  function updateExperimentLayout() {
    const isTwoCol = window.innerWidth > 768;
    let visibleIdx = 0;
    cards.forEach((card) => {
      if (card.style.display === "none") return;
      const colIdx = visibleIdx % 2;
      const yaw = isTwoCol ? (colIdx === 0 ? "5deg" : "-5deg") : "0deg";
      const delay = isTwoCol ? (colIdx === 0 ? "0.04s" : "0.17s") : "0.04s";
      card.style.setProperty("--col-yaw", yaw);
      card.style.setProperty("--exp-delay", delay);
      visibleIdx++;
    });
  }

  updateExperimentLayout();
  window.addEventListener("resize", updateExperimentLayout, { passive: true });
  window.addEventListener("portfolio:layoutchange", updateExperimentLayout);

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    cards.forEach((card) => card.classList.add("cinema-in"));
    return;
  }

  observeBidirectionalReveal(cards, "cinema-in", 0.08, (el, exitedAbove) => {
    el.style.setProperty("--exp-rx", exitedAbove ? "-14deg" : "14deg");
    el.style.setProperty("--dir-y", exitedAbove ? "-38px" : "38px");
  });
}

/* ===================================================================
   CONTINUOUS 60FPS SCROLL PARALLAX (SERVICES, WHY ME, TOOLS & EXPERIMENTS)
   =================================================================== */
function initScrollParallaxEffects() {
  const headings = Array.from(document.querySelectorAll(
    "#services .plaque-wrapper, #services .section-subtitle, #why-me .plaque-wrapper, #why-me .section-subtitle, #tools .plaque-wrapper, #tools .section-subtitle, #experiments .plaque-wrapper, #experiments .section-subtitle, #experiments .experiments-filter-bar"
  ));
  if (!headings.length) return;

  headings.forEach((el) => el.classList.add("scroll-reveal-heading"));

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    headings.forEach((el) => el.classList.add("scroll-reveal-in"));
    return;
  }

  observeBidirectionalReveal(headings, "scroll-reveal-in", 0.05);

  const serviceCards = Array.from(document.querySelectorAll(".services-grid .gold-card"));
  const whyCards = Array.from(document.querySelectorAll(".why-grid .why-card"));
  const toolCards = Array.from(document.querySelectorAll(".tools-categories .tool-group-card"));
  const experimentCards = Array.from(document.querySelectorAll(".projects-grid .project-card"));
  const heroSection = document.getElementById("hero");
  const heroContent = heroSection ? heroSection.querySelector(".hero-content") : null;
  const heroPortraitCol = heroSection ? heroSection.querySelector(".hero-portrait-col") : null;
  let ticking = false;

  function measureNormalized(elements, vh, margin) {
    return elements.map((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -margin || rect.top > vh + margin) return null;
      const center = rect.top + rect.height * 0.5;
      return Math.max(-1, Math.min(1, (center - vh * 0.5) / (vh * 0.65)));
    });
  }

  function updateParallax() {
    ticking = false;
    const vh = window.innerHeight || 800;
    const isDesktop = window.innerWidth > 1024;
    const isTwoColExperiments = window.innerWidth > 768;
    const nearMargin = 140;
    const visibleExperiments = experimentCards.filter((card) => card.style.display !== "none");

    // Batch DOM reads before DOM writes to prevent forced reflow
    const heroRect = heroSection ? heroSection.getBoundingClientRect() : null;
    const headingNorms = measureNormalized(headings, vh, nearMargin);
    const serviceNorms = measureNormalized(serviceCards, vh, nearMargin);
    const whyNorms = measureNormalized(whyCards, vh, nearMargin);
    const toolNorms = measureNormalized(toolCards, vh, nearMargin);
    const experimentNorms = measureNormalized(visibleExperiments, vh, nearMargin);

    if (heroRect && heroContent && heroPortraitCol && heroRect.bottom > 0 && heroRect.top < vh) {
      const heroProgress = Math.max(0, Math.min(1, -heroRect.top / Math.max(1, heroRect.height)));
      heroContent.style.setProperty("--hero-text-parallax", `${(heroProgress * -36).toFixed(2)}px`);
      heroPortraitCol.style.setProperty("--hero-photo-x-parallax", `${(isDesktop ? heroProgress * 30 : 0).toFixed(2)}px`);
      heroPortraitCol.style.setProperty("--hero-photo-y-parallax", `${(heroProgress * 22).toFixed(2)}px`);
    }

    headings.forEach((el, i) => {
      if (headingNorms[i] === null) return;
      el.style.setProperty("--plaque-parallax", `${(headingNorms[i] * -9).toFixed(2)}px`);
    });

    serviceCards.forEach((card, i) => {
      const norm = serviceNorms[i];
      if (norm === null) return;
      card.style.setProperty("--bg-parallax", `${(norm * 18).toFixed(2)}px`);
      const cardOffset = isDesktop ? norm * (i % 3 === 1 ? -13 : 9) : 0;
      card.style.setProperty("--card-parallax", `${cardOffset.toFixed(2)}px`);
    });

    whyCards.forEach((card, i) => {
      const norm = whyNorms[i];
      if (norm === null) return;
      const whyOffset = isDesktop ? norm * (i === 1 ? -14 : 9) : norm * -5;
      card.style.setProperty("--why-parallax", `${whyOffset.toFixed(2)}px`);
    });

    toolCards.forEach((card, i) => {
      const norm = toolNorms[i];
      if (norm === null) return;
      const boxOffset = isDesktop ? norm * (i === 1 ? -15 : 10) : norm * -5;
      card.style.setProperty("--box-parallax", `${boxOffset.toFixed(2)}px`);
    });

    visibleExperiments.forEach((card, i) => {
      const norm = experimentNorms[i];
      if (norm === null) return;
      const colOffset = isTwoColExperiments ? norm * (i % 2 === 0 ? 14 : -14) : 0;
      card.style.setProperty("--exp-parallax", `${colOffset.toFixed(2)}px`);
      card.style.setProperty("--media-parallax", `${(norm * -9).toFixed(2)}px`);
    });
  }

  function requestParallaxUpdate() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateParallax);
    }
  }

  updateParallax();
  window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
  window.addEventListener("resize", requestParallaxUpdate, { passive: true });
  window.addEventListener("portfolio:layoutchange", requestParallaxUpdate);
}

/* ===================================================================
   HERO SCROLL & ENTRANCE CHOREOGRAPHY
   1) AI CONTENT CREATOR letters + Raihanath drop from top
   2) Status pill, description & CTA details follow
   3) Portrait slides in cleanly from right side (replayable on scroll back)
   =================================================================== */
function initHeroScrollAnimation() {
  const heroSection = document.getElementById("hero");
  if (!heroSection) return;

  const titleMain = heroSection.querySelector(".hero-title-main");
  if (titleMain) {
    const rawWords = titleMain.textContent.trim().split(/\s+/);
    const frag = document.createDocumentFragment();
    let charIndex = 0;

    rawWords.forEach((word, wordIdx) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "hero-word";

      for (let i = 0; i < word.length; i++) {
        const charSpan = document.createElement("span");
        charSpan.className = "hero-char";
        charSpan.textContent = word[i];
        charSpan.style.setProperty("--char-delay", `${(charIndex * 0.022).toFixed(3)}s`);
        wordSpan.appendChild(charSpan);
        charIndex++;
      }

      frag.appendChild(wordSpan);
      if (wordIdx < rawWords.length - 1) {
        frag.appendChild(document.createTextNode(" "));
      }
    });

    titleMain.textContent = "";
    titleMain.appendChild(frag);
  }

  function syncHeroCharGradients() {
    if (!titleMain) return;
    const chars = Array.from(titleMain.querySelectorAll(".hero-char"));
    if (!chars.length) return;
    const baseLeft = titleMain.offsetLeft;
    const totalWidth = Math.max(titleMain.offsetWidth, 1);
    const offsets = chars.map((ch) => Math.max(0, ch.offsetLeft - baseLeft));

    chars.forEach((ch, idx) => {
      ch.style.setProperty("--grad-w", `${totalWidth.toFixed(1)}px`);
      ch.style.setProperty("--grad-x", `${(-offsets[idx]).toFixed(1)}px`);
    });
  }

  syncHeroCharGradients();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      window.requestAnimationFrame(syncHeroCharGradients);
    });
  }
  window.addEventListener("resize", () => {
    window.requestAnimationFrame(syncHeroCharGradients);
  }, { passive: true });

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    heroSection.classList.add("hero-anim-ready", "hero-in");
    return;
  }

  heroSection.classList.add("hero-anim-ready");

  let lastTriggerAt = 0;
  let scrollCheckPending = false;

  const snapResetHero = () => {
    if (!heroSection.classList.contains("hero-in")) return;
    heroSection.classList.add("hero-no-transition");
    heroSection.classList.remove("hero-in");
    void heroSection.offsetWidth;
    heroSection.classList.remove("hero-no-transition");
  };

  const triggerHeroEnter = () => {
    lastTriggerAt = performance.now();
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        heroSection.classList.add("hero-in");
      });
    });
  };

  const replayHeroAnimation = (force = false) => {
    const now = performance.now();
    if (!force && now - lastTriggerAt < 1850) return;
    snapResetHero();
    triggerHeroEnter();
  };

  const syncHeroScrollState = () => {
    scrollCheckPending = false;
    const vh = window.innerHeight || 800;
    const rect = heroSection.getBoundingClientRect();

    // Reset as soon as Hero scrolls largely above the fold (even on Section 2 About)
    if (rect.bottom < vh * 0.22) {
      snapResetHero();
      return;
    }

    // Replay whenever returning into Hero view from below
    if (rect.bottom >= vh * 0.42 && !heroSection.classList.contains("hero-in")) {
      triggerHeroEnter();
    }
  };

  const requestHeroSync = () => {
    if (!scrollCheckPending) {
      scrollCheckPending = true;
      window.requestAnimationFrame(syncHeroScrollState);
    }
  };

  const initialRect = heroSection.getBoundingClientRect();
  if (initialRect.bottom > 40) {
    triggerHeroEnter();
  }

  window.addEventListener("scroll", requestHeroSync, { passive: true });
  window.addEventListener("resize", requestHeroSync, { passive: true });

  // Always replay cleanly when tapping Home / Logo / Back to Top links
  document.querySelectorAll('a[href="#hero"]').forEach((link) => {
    link.addEventListener("click", () => {
      const vh = window.innerHeight || 800;
      const rect = heroSection.getBoundingClientRect();
      if (rect.bottom >= vh * 0.22) {
        replayHeroAnimation(true);
      } else {
        snapResetHero();
      }
    });
  });

  // Support downward pull-from-top gesture on mobile touch & wheel-up at y=0
  let touchStartY = null;
  let touchTriggered = false;

  window.addEventListener("touchstart", (e) => {
    if (window.scrollY <= 6 && e.touches && e.touches.length === 1) {
      touchStartY = e.touches[0].clientY;
      touchTriggered = false;
    } else {
      touchStartY = null;
    }
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (touchStartY === null || touchTriggered || !e.touches || e.touches.length !== 1) return;
    if (window.scrollY <= 6 && (e.touches[0].clientY - touchStartY) > 42) {
      touchTriggered = true;
      replayHeroAnimation(false);
    }
  }, { passive: true });

  window.addEventListener("wheel", (e) => {
    if (window.scrollY <= 6 && e.deltaY < -35) {
      replayHeroAnimation(false);
    }
  }, { passive: true });
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

/* ===================================================================
   TINY MOVING PARTICLES ANIMATION (THIRD PAGE / SERVICES ONWARDS)
   Subtle drifting gold, ivory & solar amber stardust starting at #services
   =================================================================== */
function initTrailingParticlesAnimation() {
  const canvas = document.getElementById("trailingParticlesCanvas");
  const startSection = document.getElementById("services");
  if (!canvas || !startSection) return;

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    canvas.dataset.particlesActive = "false";
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let particles = [];
  let rafId = null;
  let lastTime = 0;
  let lastScrollY = window.scrollY;
  let isActive = false;

  const COLORS = [
    { r: 229, g: 205, b: 130, weight: 0.55 }, // Champagne gold
    { r: 251, g: 108, b: 0,   weight: 0.25 }, // Solar amber
    { r: 255, g: 244, b: 214, weight: 0.20 }  // Warm ivory spark
  ];

  function pickColor() {
    const roll = Math.random();
    let acc = 0;
    for (let i = 0; i < COLORS.length; i++) {
      acc += COLORS[i].weight;
      if (roll <= acc) return COLORS[i];
    }
    return COLORS[0];
  }

  function createParticle(randomY = true) {
    const depth = 0.35 + Math.random() * 0.65;
    return {
      x: Math.random() * (width || window.innerWidth),
      y: randomY ? Math.random() * (height || window.innerHeight) : (height || window.innerHeight) + 8,
      radius: 0.85 + depth * 1.45,
      depth,
      color: pickColor(),
      vy: -(12 + depth * 24),
      vx: (Math.random() - 0.5) * 10,
      waveAmp: 4 + Math.random() * 8,
      waveFreq: 0.6 + Math.random() * 0.9,
      wavePhase: Math.random() * Math.PI * 2,
      twinkleSpeed: 1.1 + Math.random() * 1.8,
      twinklePhase: Math.random() * Math.PI * 2,
      baseAlpha: 0.30 + depth * 0.46,
      hasHalo: Math.random() > 0.62
    };
  }

  function populateParticles() {
    const targetCount = Math.min(Math.max(Math.floor(width / 16), 42), 95);
    particles = [];
    for (let i = 0; i < targetCount; i++) {
      particles.push(createParticle(true));
    }
  }

  function resizeCanvas() {
    const prevWidth = width;
    const prevHeight = height;
    width = window.innerWidth;
    height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (!particles.length || Math.abs(width - prevWidth) > 120 || Math.abs(height - prevHeight) > 160) {
      populateParticles();
    }
  }

  function setActiveState(nextActive) {
    if (isActive === nextActive) return;
    isActive = nextActive;
    canvas.classList.toggle("is-active", nextActive);
    canvas.dataset.particlesActive = nextActive ? "true" : "false";
    if (!nextActive) {
      ctx.clearRect(0, 0, width, height);
    }
  }

  function wrapCoord(value, max, pad = 12) {
    const span = max + pad * 2;
    return ((((value + pad) % span) + span) % span) - pad;
  }

  function updateParticle(p, dt, timeSec, scrollDelta) {
    const clampedDelta = Math.max(-50, Math.min(50, scrollDelta));
    p.y = wrapCoord(p.y + p.vy * dt - clampedDelta * (0.08 + p.depth * 0.18), height, 12);
    p.x = wrapCoord(p.x + (p.vx + Math.sin(timeSec * p.waveFreq + p.wavePhase) * p.waveAmp) * dt, width, 12);
  }

  function drawParticle(p, timeSec, clipTop) {
    if (p.y < clipTop - 6) return;

    const edgeFade = clipTop > 0 ? Math.min(1, Math.max(0, (p.y - clipTop) / 70)) : 1;
    const twinkle = 0.68 + 0.32 * Math.sin(timeSec * p.twinkleSpeed + p.twinklePhase);
    const alpha = Math.max(0.08, Math.min(0.82, p.baseAlpha * twinkle * edgeFade));
    if (alpha <= 0.02) return;

    const { r, g, b } = p.color;

    if (p.hasHalo) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${(alpha * 0.22).toFixed(3)})`;
      ctx.fill();
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
    ctx.fill();
  }

  function frame(now) {
    rafId = null;
    if (!lastTime) lastTime = now;
    const dt = Math.min(0.05, Math.max(0.001, (now - lastTime) / 1000));
    lastTime = now;
    const timeSec = now / 1000;

    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;
    lastScrollY = currentScrollY;

    const startRect = startSection.getBoundingClientRect();
    const clipTop = Math.max(0, Math.round(startRect.top));

    if (clipTop >= height) {
      setActiveState(false);
      return;
    }

    setActiveState(true);
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, clipTop, width, height - clipTop);
    ctx.clip();

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      updateParticle(p, dt, timeSec, scrollDelta);
      drawParticle(p, timeSec, clipTop);
    }

    ctx.restore();
    rafId = window.requestAnimationFrame(frame);
  }

  function ensureRunning() {
    if (rafId !== null) return;
    const startRect = startSection.getBoundingClientRect();
    if (startRect.top < height) {
      lastTime = 0;
      lastScrollY = window.scrollY;
      setActiveState(true);
      rafId = window.requestAnimationFrame(frame);
    } else {
      setActiveState(false);
    }
  }

  resizeCanvas();
  canvas.dataset.particlesActive = "false";
  ensureRunning();

  window.addEventListener("scroll", ensureRunning, { passive: true });
  window.addEventListener("resize", () => {
    resizeCanvas();
    ensureRunning();
  }, { passive: true });
  window.addEventListener("portfolio:layoutchange", ensureRunning);
}

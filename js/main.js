/**
 * RAIHANATH. — AI CONTENT CREATOR PORTFOLIO
 * Obsidian Crimson-Noir Interactive Controller
 */

// Project Showcase Data
const PROJECTS_DATA = {
  abba: {
    title: "Abba Perfume",
    category: "Luxury Perfume Commercial",
    tagline: "Sensory Liquid Motion & Golden Hour AI Fragrance Storytelling",
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

document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  initWarpCanvas();
  initNavigation();
  initHeroTyping();
  initProjectFilters();
  initHangingBadgeTilt();
  initServicesAccordion();
  initToolsStaggerAnimation();
  initCardTilt();
});

/* ===================================================================
   PRELOADER SEQUENCE (00 -> 100 + LASER BAR)
   =================================================================== */
function initPreloader() {
  const preloader = document.getElementById("preloader");
  const counter = document.getElementById("preloaderCounter");
  const beam = document.getElementById("preloaderBeam");
  if (!preloader || !counter || !beam) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 14) + 10;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      counter.textContent = "100";
      beam.style.width = "100%";
      setTimeout(() => preloader.classList.add("done"), 220);
      return;
    }
    counter.textContent = String(progress).padStart(2, "0");
    beam.style.width = `${progress}%`;
  }, 55);

  // Failsafe dismiss after 1.3s
  setTimeout(() => {
    clearInterval(interval);
    counter.textContent = "100";
    beam.style.width = "100%";
    preloader.classList.add("done");
  }, 1300);
}

/* ===================================================================
   WARP / CRIMSON EMBER SPACE CANVAS
   =================================================================== */
function initWarpCanvas() {
  const canvas = document.getElementById("warpCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  const pointer = { x: 0, y: 0, active: false };

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  window.addEventListener("resize", resize);
  resize();

  window.addEventListener("mousemove", (e) => {
    pointer.x = (e.clientX / Math.max(width, 1) - 0.5) * 18;
    pointer.y = (e.clientY / Math.max(height, 1) - 0.5) * 18;
    pointer.active = true;
  });

  const COUNT = width < 768 ? 38 : 70;
  const particles = Array.from({ length: COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.8 + 0.6,
    vy: -(Math.random() * 0.35 + 0.12),
    vx: (Math.random() - 0.5) * 0.18,
    crimson: Math.random() > 0.42,
    alpha: Math.random() * 0.48 + 0.2
  }));

  function frame() {
    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      p.x += p.vx + (pointer.active ? pointer.x * 0.015 : 0);
      p.y += p.vy + (pointer.active ? pointer.y * 0.015 : 0);

      if (p.y < -10) { p.y = height + 10; p.x = Math.random() * width; }
      if (p.y > height + 10) { p.y = -10; }
      if (p.x < -10) { p.x = width + 10; }
      if (p.x > width + 10) { p.x = -10; }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.crimson
        ? `rgba(255, 23, 54, ${p.alpha})`
        : `rgba(255, 255, 255, ${p.alpha * 0.65})`;
      ctx.fill();

      if (p.crimson) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 23, 54, ${p.alpha * 0.14})`;
        ctx.fill();
      }
    }

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

/* ===================================================================
   NAVIGATION & SCROLL SPY
   =================================================================== */
function initNavigation() {
  const siteHeader = document.getElementById("siteHeader");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const links = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    if (siteHeader) {
      siteHeader.classList.toggle("scrolled", window.scrollY > 28);
    }
    updateActiveNavLink();
  });

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.classList.toggle("active", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (navLinks.classList.contains("open") && siteHeader && !siteHeader.contains(e.target)) {
        navLinks.classList.remove("open");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset + 140;

  sections.forEach((sec) => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");
    const match = document.querySelector(`.nav-links a[href="#${id}"]`);

    if (match && scrollY >= top && scrollY < top + height) {
      document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
      match.classList.add("active");
    }
  });
}

/* ===================================================================
   HERO TYPING ANIMATION
   =================================================================== */
function initHeroTyping() {
  const container = document.getElementById("typingHeroDescription");
  if (!container) return;

  const textSpan = container.querySelector(".typing-text");
  if (!textSpan) return;

  const fullText = "Hi, I'm RAIHANATH, an AI CONTENT CREATOR. I transform ideas into cinematic AI videos, compelling advertisements, and creative digital experiences for modern brands.";
  let charIndex = 0;
  let isDeleting = false;

  function formatText(text) {
    return text
      .replace("RAIHANATH", "<strong>RAIHANATH</strong>")
      .replace("AI CONTENT CREATOR", "<strong>AI CONTENT CREATOR</strong>");
  }

  textSpan.innerHTML = "";

  function step() {
    if (!isDeleting) {
      charIndex++;
      textSpan.innerHTML = formatText(fullText.substring(0, charIndex));
      if (charIndex === fullText.length) {
        isDeleting = true;
        setTimeout(step, 4600);
        return;
      }
      setTimeout(step, 34);
    } else {
      charIndex--;
      textSpan.innerHTML = formatText(fullText.substring(0, charIndex));
      if (charIndex === 0) {
        isDeleting = false;
        setTimeout(step, 480);
        return;
      }
      setTimeout(step, 16);
    }
  }

  setTimeout(step, 320);
}

/* ===================================================================
   PROJECT FILTERS & INLINE TAP-TO-PLAY VIDEO CARDS
   =================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const val = btn.getAttribute("data-filter");
      cards.forEach((card) => {
        const cat = card.getAttribute("data-category") || "";
        card.style.display = val === "all" || cat === val ? "" : "none";
      });
    });
  });
}

function toggleCardVideo(e, mediaWrap) {
  if (e && e.target.closest(".card-sound-btn")) return;

  const video = mediaWrap.querySelector(".project-video");
  if (!video) return;

  if (video.paused) {
    // Pause any other playing card first
    document.querySelectorAll(".project-media-wrap.is-playing").forEach((wrap) => {
      if (wrap !== mediaWrap) {
        const other = wrap.querySelector(".project-video");
        if (other) other.pause();
        wrap.classList.remove("is-playing");
      }
    });

    video.muted = false;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        mediaWrap.classList.add("is-playing");
        syncSoundIcon(mediaWrap, false);
      }).catch(() => {
        video.muted = true;
        video.play().then(() => {
          mediaWrap.classList.add("is-playing");
          syncSoundIcon(mediaWrap, true);
        }).catch(() => {});
      });
    }
  } else {
    video.pause();
    mediaWrap.classList.remove("is-playing");
  }
}

function toggleCardAudio(e, btn) {
  e.stopPropagation();
  const wrap = btn.closest(".project-media-wrap");
  const video = wrap ? wrap.querySelector(".project-video") : null;
  if (!video) return;

  video.muted = !video.muted;
  syncSoundIcon(wrap, video.muted);

  if (video.paused && !video.muted) {
    video.play().then(() => {
      wrap.classList.add("is-playing");
    }).catch(() => {});
  }
}

function syncSoundIcon(wrap, isMuted) {
  const btn = wrap.querySelector(".card-sound-btn");
  if (!btn) return;
  const icon = btn.querySelector("i");
  btn.classList.toggle("unmuted", !isMuted);
  if (icon) {
    icon.className = isMuted ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-high";
  }
}

/* ===================================================================
   PROJECT DETAIL MODAL
   =================================================================== */
function openProjectModal(projectId) {
  const data = PROJECTS_DATA[projectId];
  const modal = document.getElementById("projectModal");
  const content = document.getElementById("modalContent");
  if (!data || !modal || !content) return;

  // Pause inline preview videos
  document.querySelectorAll(".project-media-wrap.is-playing").forEach((wrap) => {
    const v = wrap.querySelector(".project-video");
    if (v) v.pause();
    wrap.classList.remove("is-playing");
  });

  content.innerHTML = `
    <div style="margin-bottom: 1.4rem;">
      <span style="display:inline-block; font-family:var(--font-mono); font-size:0.68rem; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; padding:4px 12px; border-radius:999px; background:var(--crimson-soft); border:1px solid var(--crimson-border); color:#FFD2D8; margin-bottom:10px;">
        ${data.category}
      </span>
      <h2 style="font-family:var(--font-display); font-size:1.75rem; font-weight:800; line-height:1.15; margin-bottom:6px;">
        ${data.title}<span style="color:var(--crimson);">.</span>
      </h2>
      ${data.tagline ? `<p style="color:var(--text-secondary); font-size:0.92rem;">${data.tagline}</p>` : ""}
    </div>

    <div style="border-radius:14px; overflow:hidden; background:#000; border:1px solid var(--crimson-border); margin-bottom:1.4rem;">
      <video controls playsinline autoplay style="width:100%; max-height:420px; display:block;" src="${data.videoUrl}"></video>
    </div>

    <div style="background:rgba(255,255,255,0.03); border:1px solid var(--border-subtle); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
      <h4 style="font-family:var(--font-mono); font-size:0.74rem; letter-spacing:0.16em; text-transform:uppercase; color:var(--crimson); margin-bottom:0.45rem;">Overview &amp; Creative Vision</h4>
      <p style="font-size:0.94rem; color:var(--text-secondary); line-height:1.68;">${data.overview}</p>
    </div>

    <div style="margin-bottom:1.25rem;">
      <h4 style="font-family:var(--font-mono); font-size:0.74rem; letter-spacing:0.16em; text-transform:uppercase; color:var(--crimson); margin-bottom:0.45rem;">Prompt Architecture &amp; Engineering</h4>
      <p style="font-size:0.92rem; color:#E5E7EB; line-height:1.6; background:var(--crimson-soft); padding:0.95rem 1.1rem; border-radius:10px; border-left:3px solid var(--crimson);">
        “${data.promptStrategy}”
      </p>
    </div>

    <div style="margin-bottom:1.4rem;">
      <h4 style="font-family:var(--font-mono); font-size:0.74rem; letter-spacing:0.16em; text-transform:uppercase; color:var(--crimson); margin-bottom:0.65rem;">Key Highlights</h4>
      <ul style="list-style:none; display:flex; flex-direction:column; gap:0.5rem;">
        ${data.highlights.map(item => `
          <li style="display:flex; align-items:center; gap:0.65rem; font-size:0.9rem; color:var(--text-secondary);">
            <i class="fa-solid fa-check" style="color:var(--crimson); font-size:0.85rem;"></i>
            <span>${item}</span>
          </li>
        `).join("")}
      </ul>
    </div>

    <div style="padding-top:1.1rem; border-top:1px solid var(--border-subtle); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem;">
      <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
        ${data.tools.map(t => `<span class="chip">${t}</span>`).join("")}
      </div>
      <a href="https://wa.me/919745147246?text=Hi%20Raihanath,%20I'd%20like%20to%20discuss%20a%20project%20similar%20to%20${encodeURIComponent(data.title)}" target="_blank" rel="noopener noreferrer" class="btn-crimson-pill">
        <i class="fa-brands fa-whatsapp"></i>
        <span>Request Similar Video</span>
      </a>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  const modalVideo = modal.querySelector("video");
  if (modalVideo) {
    modalVideo.currentTime = 0;
    modalVideo.play().catch(() => {});
  }
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;
  const video = modal.querySelector("video");
  if (video) video.pause();
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function closeProjectModalOnBackdrop(e) {
  if (e.target && e.target.id === "projectModal") {
    closeProjectModal();
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeProjectModal();
});

/* ===================================================================
   ABOUT HANGING BADGE 3D TILT
   =================================================================== */
function initHangingBadgeTilt() {
  const stage = document.getElementById("hangingBadgeStage");
  const card = document.getElementById("hangingCard");
  if (!stage || !card) return;

  stage.addEventListener("mousemove", (e) => {
    if (window.innerWidth <= 768) return;
    const rect = stage.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.animation = "none";
    card.style.transform = `perspective(900px) rotateX(${(-y * 12).toFixed(2)}deg) rotateY(${(x * 16).toFixed(2)}deg) rotate(2deg)`;
  });

  stage.addEventListener("mouseleave", () => {
    card.style.transform = "";
    card.style.animation = "";
  });
}

/* ===================================================================
   SERVICES INTERACTIVE ACCORDION
   =================================================================== */
function initServicesAccordion() {
  const items = document.querySelectorAll("#servicesAccordion .accordion-item");
  if (!items.length) return;

  items.forEach((item) => {
    const trigger = item.querySelector(".accordion-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", () => {
      const wasActive = item.classList.contains("active");

      items.forEach((other) => {
        other.classList.remove("active");
        const btn = other.querySelector(".accordion-trigger");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });

      if (!wasActive) {
        item.classList.add("active");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* ===================================================================
   ARSENAL TOOLS ONE-BY-ONE STAGGER ANIMATION
   =================================================================== */
function initToolsStaggerAnimation() {
  const grid = document.getElementById("arsenalGrid");
  if (!grid) return;

  const tiles = grid.querySelectorAll(".arsenal-tile");
  tiles.forEach((tile, idx) => {
    tile.style.setProperty("--stagger-delay", `${(idx * 0.11).toFixed(2)}s`);
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            grid.classList.add("stagger-active");
            obs.unobserve(grid);
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(grid);
  } else {
    grid.classList.add("stagger-active");
  }
}

/* ===================================================================
   SUBTLE CARD TILT ON PILLARS
   =================================================================== */
function initCardTilt() {
  const cards = document.querySelectorAll(".pillar-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      if (window.innerWidth <= 768) return;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

/* ===================================================================
   CLIPBOARD COPY, TOAST & WHATSAPP FORM SUBMIT
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
    <i class="fa-solid fa-circle-check" style="color: var(--crimson); font-size: 1.05rem;"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(24px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

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

  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <i class="fa-solid fa-circle-notch fa-spin"></i>
    <span>Preparing Inquiry...</span>
  `;

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = `
      <span>Send Message</span>
      <i class="fa-solid fa-paper-plane"></i>
    `;

    const waText = encodeURIComponent(
      `Hello Raihanath!\n\nName: ${name}\nEmail: ${email}\nService: ${service}\n\nProject Scope:\n${message}`
    );
    const waUrl = `https://wa.me/919745147246?text=${waText}`;

    showToast(`Thank you ${name}! Opening WhatsApp connection...`);
    document.getElementById("contactForm").reset();

    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 900);
  }, 650);
}

/**
 * ============================================================================
 * SHIVANG SAGAR — NEXUS INTERACTIVE ENGINE (script.js)
 * ============================================================================
 * HOW TO ADD MORE BUTTONS IN THE FUTURE:
 * Simply add a new object to the `PORTAL_LINKS` array below!
 * The engine automatically renders all buttons, assigns keyboard shortcuts,
 * and binds 3D magnetic & canvas physics.
 * ============================================================================
 */

const PORTAL_LINKS = [
  {
    index: "01 // NET",
    key: "1",
    title: "LinkedIn",
    desc: "Professional network, career trajectory & direct executive connect.",
    url: "https://www.linkedin.com/in/shivangsagar/",
    displayUrl: "linkedin.com/in/shivangsagar",
    color: "#00F0FF",
    rgb: "0, 240, 255",
    icon: `<svg viewBox="0 0 24 24" class="card-svg" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`
  },
  {
    index: "02 // DEV",
    key: "2",
    title: "GitHub",
    desc: "Open-source repositories, source code architecture & engineering commits.",
    url: "https://github.com/shivangsagar/",
    displayUrl: "github.com/shivangsagar",
    color: "#BD00FF",
    rgb: "189, 0, 255",
    icon: `<svg viewBox="0 0 24 24" class="card-svg" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`
  },
  {
    index: "03 // WRK",
    key: "3",
    title: "Portfolio",
    desc: "Showcase of flagship builds, interactive systems, skills & case studies.",
    url: "https://shivangsagar.github.io/portfolio/",
    displayUrl: "shivangsagar.github.io/portfolio",
    color: "#CCFF00",
    rgb: "204, 255, 0",
    icon: `<svg viewBox="0 0 24 24" class="card-svg" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`
  },
  {
    index: "04 // APP",
    key: "4",
    title: "Presencia",
    desc: "Live interactive platform deployment & signature web application suite.",
    url: "https://shivangsagar.github.io/Presencia/",
    displayUrl: "shivangsagar.github.io/Presencia",
    color: "#FF0055",
    rgb: "255, 0, 85",
    icon: `<svg viewBox="0 0 24 24" class="card-svg" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`
  }
  // Add future buttons right here!
];

// ============================================================================
// 0. AUTOMATIC FAVICON PATH VERIFICATION (assets/favicon.png vs asset/favicon.png)
// ============================================================================
(function verifyFaviconPath() {
  const favLink = document.getElementById("site-favicon");
  if (!favLink) return;
  const probe = new Image();
  probe.onerror = () => {
    // Fallback if repo folder is named 'asset' (singular)
    favLink.href = "asset/favicon.png";
  };
  probe.src = "assets/favicon.png";
})();

// ============================================================================
// 1. MULTI-OSCILLATOR WEB AUDIO SYNTHESIZER (Loud, Crisp & Audible)
// ============================================================================
class CyberSynth {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return false;
    if (!this.ctx) {
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    return true;
  }

  // Futuristic UI Hover Blip (Rich dual-oscillator harmonic)
  playHover(index = 0) {
    if (!this.enabled || !this.init()) return;
    try {
      const now = this.ctx.currentTime;
      const baseFreqs = [523.25, 659.25, 783.99, 987.77, 1174.66]; // C5, E5, G5, B5, D6
      const freq = baseFreqs[index % baseFreqs.length];

      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc1.type = "triangle";
      osc2.type = "sine";
      osc1.frequency.setValueAtTime(freq, now);
      osc1.frequency.exponentialRampToValueAtTime(freq * 1.35, now + 0.085);

      osc2.frequency.setValueAtTime(freq * 0.5, now);
      osc2.frequency.exponentialRampToValueAtTime(freq * 0.75, now + 0.085);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(2800, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + 0.095);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.1);
      osc2.stop(now + 0.1);
    } catch (_) {}
  }

  // Portal Click / Mode Switch Synth Chord
  playClick() {
    if (!this.enabled || !this.init()) return;
    try {
      const now = this.ctx.currentTime;
      const notes = [261.63, 392.0, 523.25]; // Power chord
      notes.forEach((f, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = i === 0 ? "sawtooth" : "triangle";
        osc.frequency.setValueAtTime(f, now);
        osc.frequency.exponentialRampToValueAtTime(f * 1.5, now + 0.18);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.12, now + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0008, now + 0.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.21);
      });
    } catch (_) {}
  }

  // Gravity Shockwave Bass Pulse
  playPulse() {
    if (!this.enabled || !this.init()) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const sub = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      sub.type = "sine";

      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(48, now + 0.38);

      sub.frequency.setValueAtTime(110, now);
      sub.frequency.exponentialRampToValueAtTime(32, now + 0.38);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.26, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + 0.42);

      osc.connect(gain);
      sub.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      sub.start(now);
      osc.stop(now + 0.44);
      sub.stop(now + 0.44);
    } catch (_) {}
  }

  // Distinct Ascending Cyber Chime when SFX is turned ON
  playEnableChime() {
    if (!this.init()) return;
    try {
      const now = this.ctx.currentTime;
      const arp = [523.25, 659.25, 783.99, 1046.5]; // C5 -> E5 -> G5 -> C6
      arp.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = now + idx * 0.055;

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.001, start);
        gain.gain.linearRampToValueAtTime(0.22, start + 0.012);
        gain.gain.exponentialRampToValueAtTime(0.0008, start + 0.16);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.17);
      });
    } catch (_) {}
  }

  // Distinct Descending Power-Down Sweep when SFX is Muted
  playDisableChime() {
    if (!this.init()) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(640, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.22);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + 0.24);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } catch (_) {}
  }
}

const synth = new CyberSynth();

// Unlock Web Audio Context on first user interaction anywhere on page
["pointerdown", "keydown"].forEach((evt) => {
  window.addEventListener(
    evt,
    () => {
      if (synth.enabled) synth.init();
    },
    { once: true, passive: true }
  );
});

// ============================================================================
// 2. ZERO-SHIFT LOCKED-GRID GLITCH & SCRAMBLE ENGINE FOR HERO NAME
// ============================================================================
const scrambleEl = document.getElementById("scramble-title");
// Uniform-width uppercase alphanumeric cipher set so glyphs stay centered inside locked slots
const CIPHER_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789#$*+<>";
let charSlots = [];

function buildLockedTitleSlots() {
  if (!scrambleEl) return;
  const original = scrambleEl.getAttribute("data-value") || "SHIVANG SAGAR";
  scrambleEl.setAttribute("data-text", original);

  // Step 1: Create natural spans to measure exact width of each true character
  scrambleEl.innerHTML = original
    .split("")
    .map((ch) =>
      ch === " "
        ? `<span class="char-slot space-slot" data-char=" ">&nbsp;</span>`
        : `<span class="char-slot" data-char="${ch}">${ch}</span>`
    )
    .join("");

  charSlots = Array.from(scrambleEl.querySelectorAll(".char-slot"));

  // Step 2: Measure & lock each character slot's width in pixels so scrambling never shifts layout
  requestAnimationFrame(() => {
    charSlots.forEach((slot) => {
      slot.style.width = ""; // reset before measuring
      const rect = slot.getBoundingClientRect();
      if (rect.width > 0) {
        slot.style.width = `${rect.width.toFixed(2)}px`;
      }
    });
  });
}

function triggerScramble() {
  if (!scrambleEl || charSlots.length === 0) return;
  let iteration = 0;
  clearInterval(scrambleEl._scrambleInterval);
  scrambleEl.classList.add("is-glitching");

  scrambleEl._scrambleInterval = setInterval(() => {
    charSlots.forEach((slot, idx) => {
      const trueChar = slot.getAttribute("data-char");
      if (trueChar === " ") return;

      if (idx < iteration) {
        slot.textContent = trueChar;
        slot.classList.remove("is-scrambling");
      } else {
        slot.textContent = CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];
        slot.classList.add("is-scrambling");
      }
    });

    if (iteration >= charSlots.length) {
      clearInterval(scrambleEl._scrambleInterval);
      scrambleEl.classList.remove("is-glitching");
    }
    iteration += 0.45;
  }, 30);
}

// Initialize locked slots once fonts finish loading, and re-measure on window resize
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => {
    buildLockedTitleSlots();
    setTimeout(triggerScramble, 250);
  });
} else {
  buildLockedTitleSlots();
  setTimeout(triggerScramble, 250);
}

if (scrambleEl) {
  scrambleEl.addEventListener("mouseenter", () => {
    synth.playHover(4);
    triggerScramble();
  });
}

// Periodic subtle micro-glitch on 1-2 locked character slots without moving alignment
setInterval(() => {
  if (!scrambleEl || scrambleEl.classList.contains("is-glitching") || charSlots.length === 0) return;
  if (Math.random() > 0.45) return;

  const nonSpaceSlots = charSlots.filter((s) => s.getAttribute("data-char") !== " ");
  const targetSlot = nonSpaceSlots[Math.floor(Math.random() * nonSpaceSlots.length)];
  if (!targetSlot) return;

  const originalChar = targetSlot.getAttribute("data-char");
  scrambleEl.classList.add("is-glitching");
  targetSlot.classList.add("is-scrambling");
  targetSlot.textContent = CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];

  setTimeout(() => {
    targetSlot.textContent = originalChar;
    targetSlot.classList.remove("is-scrambling");
    scrambleEl.classList.remove("is-glitching");
  }, 140);
}, 3200);

// ============================================================================
// 3. RENDER & BIND PORTAL CARDS
// ============================================================================
const portalGrid = document.getElementById("portal-grid");
const nodeCountEl = document.getElementById("node-count");
const maxKeyHintEl = document.getElementById("max-key-hint");

function renderPortals() {
  if (!portalGrid) return;
  portalGrid.innerHTML = PORTAL_LINKS.map((item, idx) => `
    <a href="${item.url}"
       class="portal-card"
       data-index="${idx}"
       data-key="${item.key || idx + 1}"
       data-color="${item.color}"
       data-rgb="${item.rgb}"
       data-title="${item.title}"
       style="--card-color: ${item.color}; --card-rgb: ${item.rgb};"
       target="_blank"
       rel="noopener noreferrer">
      <div class="card-glow" aria-hidden="true"></div>
      <div class="card-inner">
        <div class="card-top">
          <span class="card-index">${item.index}</span>
          <span class="card-kbd" title="Press ${item.key || idx + 1} on keyboard">[${item.key || idx + 1}]</span>
        </div>
        <div class="card-icon-wrap" aria-hidden="true">
          ${item.icon}
        </div>
        <div class="card-body">
          <h2 class="card-title">${item.title}</h2>
          <p class="card-desc">${item.desc}</p>
        </div>
        <div class="card-footer">
          <span class="card-url">${item.displayUrl}</span>
          <span class="card-arrow" aria-hidden="true">↗</span>
        </div>
      </div>
    </a>
  `).join("");

  if (nodeCountEl) {
    nodeCountEl.textContent = String(PORTAL_LINKS.length).padStart(2, "0");
  }
  if (maxKeyHintEl) {
    maxKeyHintEl.textContent = String(PORTAL_LINKS.length);
  }

  bindCardPhysics();
}

// ============================================================================
// 4. 3D HOLOGRAPHIC CARD TILT & MAGNETIC HOVER PHYSICS
// ============================================================================
let activeAccentRGB = [0, 240, 255];

function setGlobalAccent(hexColor, rgbString) {
  document.documentElement.style.setProperty("--active-accent", hexColor);
  document.documentElement.style.setProperty("--active-rgb", rgbString);
  const parts = rgbString.split(",").map((n) => parseInt(n.trim(), 10));
  if (parts.length === 3 && !parts.some(isNaN)) {
    activeAccentRGB = parts;
  }
}

function bindCardPhysics() {
  const cards = document.querySelectorAll(".portal-card");
  cards.forEach((card, idx) => {
    const color = card.getAttribute("data-color") || "#00F0FF";
    const rgb = card.getAttribute("data-rgb") || "0, 240, 255";
    card.style.setProperty("--card-color", color);
    card.style.setProperty("--card-rgb", rgb);

    card.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-hover");
      setGlobalAccent(color, rgb);
      synth.playHover(idx);
    });

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -9;
      const rotateY = ((x - centerX) / centerX) * 9;

      card.style.setProperty("--rotate-x", `${rotateX.toFixed(2)}deg`);
      card.style.setProperty("--rotate-y", `${rotateY.toFixed(2)}deg`);
    });

    card.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-hover");
      card.style.setProperty("--rotate-x", "0deg");
      card.style.setProperty("--rotate-y", "0deg");
    });

    card.addEventListener("focus", () => {
      setGlobalAccent(color, rgb);
      synth.playHover(idx);
    });

    card.addEventListener("click", () => {
      synth.playClick();
      const rect = card.getBoundingClientRect();
      spawnShockwave(rect.left + rect.width / 2, rect.top + rect.height / 2, activeAccentRGB);
    });
  });
}

renderPortals();

// ============================================================================
// 5. INTERACTIVE QUANTUM PARTICLE & SHOCKWAVE CANVAS ENGINE
// ============================================================================
const canvas = document.getElementById("nexus-canvas");
const ctx = canvas.getContext("2d");

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

const mouse = {
  x: width / 2,
  y: height / 2
};

const particles = [];
const shockwaves = [];
const PARTICLE_COUNT = Math.min(115, Math.floor((width * height) / 14000));

const VIBRANT_PALETTE = [
  [0, 240, 255],   // Electric Cyan
  [189, 0, 255],   // Hyper Violet
  [204, 255, 0],   // Acid Lime
  [255, 0, 85],    // Neon Crimson
  [255, 255, 255]  // Pure Monochrome White
];

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.65;
    this.vy = (Math.random() - 0.5) * 0.65;
    this.radius = Math.random() * 1.9 + 0.7;
    this.baseColor = VIBRANT_PALETTE[Math.floor(Math.random() * VIBRANT_PALETTE.length)];
    this.isMono = Math.random() > 0.55;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;

    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distSq = dx * dx + dy * dy;
    if (distSq < 26000 && distSq > 100) {
      const dist = Math.sqrt(distSq);
      const force = (160 - dist) / 160;
      this.x -= (dx / dist) * force * 0.9;
      this.y -= (dy / dist) * force * 0.9;
    }
  }

  draw(themeMode) {
    let rgb = this.baseColor;
    if (themeMode === "mono") {
      rgb = [220, 220, 220];
    } else if (themeMode === "dual" && this.isMono) {
      rgb = [180, 180, 190];
    }
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.85)`;
    ctx.fill();
  }
}

for (let i = 0; i < PARTICLE_COUNT; i++) {
  particles.push(new Particle());
}

function spawnShockwave(x, y, rgb = activeAccentRGB) {
  shockwaves.push({
    x,
    y,
    radius: 8,
    maxRadius: Math.max(width, height) * 0.55,
    alpha: 0.9,
    rgb: [...rgb]
  });
}

function animateCanvas() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.28)";
  ctx.fillRect(0, 0, width, height);

  const themeMode = document.documentElement.getAttribute("data-theme-mode") || "dual";
  const lineRGB = themeMode === "mono" ? [255, 255, 255] : activeAccentRGB;

  for (let i = 0; i < particles.length; i++) {
    const p1 = particles[i];
    p1.update();
    p1.draw(themeMode);

    for (let j = i + 1; j < particles.length; j++) {
      const p2 = particles[j];
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const distSq = dx * dx + dy * dy;
      if (distSq < 15500) {
        const alpha = (1 - distSq / 15500) * 0.22;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(${lineRGB[0]}, ${lineRGB[1]}, ${lineRGB[2]}, ${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }

    const mdx = p1.x - mouse.x;
    const mdy = p1.y - mouse.y;
    const mDistSq = mdx * mdx + mdy * mdy;
    if (mDistSq < 28000) {
      const alpha = (1 - mDistSq / 28000) * 0.45;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.strokeStyle = `rgba(${lineRGB[0]}, ${lineRGB[1]}, ${lineRGB[2]}, ${alpha})`;
      ctx.lineWidth = 1.1;
      ctx.stroke();
    }
  }

  for (let i = shockwaves.length - 1; i >= 0; i--) {
    const sw = shockwaves[i];
    sw.radius += 14;
    sw.alpha *= 0.94;

    const rgb = themeMode === "mono" ? [255, 255, 255] : sw.rgb;
    ctx.beginPath();
    ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${sw.alpha})`;
    ctx.lineWidth = 2.2;
    ctx.stroke();

    if (sw.radius > sw.maxRadius || sw.alpha < 0.02) {
      shockwaves.splice(i, 1);
    }
  }

  requestAnimationFrame(animateCanvas);
}

animateCanvas();

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  buildLockedTitleSlots();
});

// ============================================================================
// 6. CUSTOM MAGNETIC CURSOR & HUD TELEMETRY
// ============================================================================
const cursorDot = document.getElementById("cursor-dot");
const cursorRing = document.getElementById("cursor-ring");
const coordX = document.getElementById("coord-x");
const coordY = document.getElementById("coord-y");

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  if (cursorDot) {
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
  }
  if (cursorRing) {
    cursorRing.animate(
      { left: `${e.clientX}px`, top: `${e.clientY}px` },
      { duration: 180, fill: "forwards" }
    );
  }
  if (coordX && coordY) {
    coordX.textContent = String(Math.round(e.clientX)).padStart(4, "0");
    coordY.textContent = String(Math.round(e.clientY)).padStart(4, "0");
  }
});

window.addEventListener("mousedown", (e) => {
  if (e.target.closest("a, button, input, .cmd-modal")) return;
  synth.playPulse();
  spawnShockwave(e.clientX, e.clientY, activeAccentRGB);
});

const hudClock = document.getElementById("hud-clock");
function updateClock() {
  if (!hudClock) return;
  const now = new Date();
  const timeStr = now.toISOString().slice(11, 19);
  hudClock.textContent = `UTC ${timeStr}`;
}
setInterval(updateClock, 1000);
updateClock();

const heroPrism = document.getElementById("hero-prism");
if (heroPrism) {
  heroPrism.addEventListener("click", () => {
    const rect = heroPrism.getBoundingClientRect();
    synth.playPulse();
    spawnShockwave(rect.left + rect.width / 2, rect.top + rect.height / 2, activeAccentRGB);
    triggerScramble();
  });
}

// ============================================================================
// 7. THEME CONTRAST MODES, AUDIBLE SFX TOGGLE & COMMAND PALETTE
// ============================================================================
const MODES = [
  { id: "dual", label: "MODE: DUAL CHROMA" },
  { id: "vibrant", label: "MODE: HYPER VIBRANT" },
  { id: "mono", label: "MODE: PURE MONOCHROME" }
];
let currentModeIdx = 0;

const modeToggleBtn = document.getElementById("mode-toggle");
const modeLabelEl = document.getElementById("mode-label");

function cycleThemeMode() {
  currentModeIdx = (currentModeIdx + 1) % MODES.length;
  const mode = MODES[currentModeIdx];
  document.documentElement.setAttribute("data-theme-mode", mode.id);
  if (modeLabelEl) modeLabelEl.textContent = mode.label;
  synth.playClick();
  spawnShockwave(window.innerWidth / 2, window.innerHeight / 2, activeAccentRGB);
}

if (modeToggleBtn) {
  modeToggleBtn.addEventListener("click", cycleThemeMode);
}

const soundToggleBtn = document.getElementById("sound-toggle");
const soundLabelEl = document.getElementById("sound-label");

function toggleSoundEffects() {
  synth.enabled = !synth.enabled;
  if (soundToggleBtn) {
    soundToggleBtn.setAttribute("aria-pressed", String(synth.enabled));
    soundToggleBtn.classList.toggle("sfx-active", synth.enabled);
    soundToggleBtn.classList.toggle("sfx-muted", !synth.enabled);
  }
  if (soundLabelEl) {
    soundLabelEl.textContent = synth.enabled ? "SFX: ON" : "SFX: MUTED";
  }

  // Play immediate audible confirmation + visual shockwave on the button
  const rect = soundToggleBtn ? soundToggleBtn.getBoundingClientRect() : null;
  if (synth.enabled) {
    synth.playEnableChime();
    if (rect) spawnShockwave(rect.left + rect.width / 2, rect.top + rect.height / 2, [204, 255, 0]);
  } else {
    synth.playDisableChime();
    if (rect) spawnShockwave(rect.left + rect.width / 2, rect.top + rect.height / 2, [255, 0, 85]);
  }
}

if (soundToggleBtn) {
  soundToggleBtn.addEventListener("click", toggleSoundEffects);
}

// Command Palette Modal
const cmdModal = document.getElementById("cmd-modal");
const cmdInput = document.getElementById("cmd-input");
const cmdList = document.getElementById("cmd-list");
const cmdTrigger = document.getElementById("cmd-trigger");
const cmdClose = document.getElementById("cmd-close");

function renderCmdItems(filter = "") {
  if (!cmdList) return;
  const q = filter.trim().toLowerCase();
  const filtered = PORTAL_LINKS.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.key === q
  );

  cmdList.innerHTML = filtered
    .map(
      (item) => `
      <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="cmd-item">
        <div class="cmd-item-left">
          <span class="cmd-dot" style="background:${item.color}; box-shadow: 0 0 10px ${item.color}"></span>
          <div>
            <strong>${item.title}</strong>
            <div style="font-size:0.75rem; color:#9E9EA8">${item.displayUrl}</div>
          </div>
        </div>
        <span class="card-kbd">[${item.key}]</span>
      </a>
    `
    )
    .join("");
}

function openCmdModal() {
  if (!cmdModal) return;
  cmdModal.hidden = false;
  renderCmdItems("");
  if (cmdInput) {
    cmdInput.value = "";
    cmdInput.focus();
  }
  synth.playHover(2);
}

function closeCmdModal() {
  if (!cmdModal) return;
  cmdModal.hidden = true;
}

if (cmdTrigger) cmdTrigger.addEventListener("click", openCmdModal);
if (cmdClose) cmdClose.addEventListener("click", closeCmdModal);
if (cmdModal) {
  cmdModal.addEventListener("click", (e) => {
    if (e.target === cmdModal) closeCmdModal();
  });
}
if (cmdInput) {
  cmdInput.addEventListener("input", (e) => renderCmdItems(e.target.value));
}

// Global Keyboard Shortcuts
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && cmdModal && !cmdModal.hidden) {
    closeCmdModal();
    return;
  }

  if (document.activeElement && document.activeElement.tagName === "INPUT") {
    return;
  }

  if (e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) {
    e.preventDefault();
    openCmdModal();
    return;
  }

  if (e.key.toLowerCase() === "m") {
    cycleThemeMode();
    return;
  }

  if (e.key.toLowerCase() === "s") {
    toggleSoundEffects();
    return;
  }

  if (e.code === "Space") {
    e.preventDefault();
    synth.playPulse();
    spawnShockwave(mouse.x, mouse.y, activeAccentRGB);
    return;
  }

  const match = PORTAL_LINKS.find((item, idx) => (item.key || String(idx + 1)) === e.key);
  if (match) {
    synth.playClick();
    window.open(match.url, "_blank", "noopener,noreferrer");
  }
});

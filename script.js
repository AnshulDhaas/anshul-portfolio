// Theme toggle with persistence
(function () {
  const THEME_KEY = "anshul_theme";
  const body = document.body;
  const btn = document.getElementById("themeToggle");

  function setTheme(theme) {
    const isLight = theme === "light";
    body.classList.toggle("light", isLight);
    if (btn) btn.textContent = isLight ? "🌙 Dark" : "☀ Light";
    localStorage.setItem(THEME_KEY, theme);
  }

  const saved = localStorage.getItem(THEME_KEY);
  setTheme(saved === "light" ? "light" : "dark");

  if (btn) {
    btn.addEventListener("click", () => {
      const next = body.classList.contains("light") ? "dark" : "light";
      setTheme(next);
    });
  }
})();

// Rotating roles text
(function () {
  const el = document.getElementById("roleText");
  if (!el) return;

  const roles = ["Developer", "Student", "Builder", "Learner"];
  let i = 0;

  function swap() {
    el.style.opacity = "0";
    el.style.transform = "translateY(6px)";
    setTimeout(() => {
      i = (i + 1) % roles.length;
      el.textContent = roles[i];
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 220);
  }

  el.style.transition = "opacity 220ms ease, transform 220ms ease";
  setInterval(swap, 2200);
})();

// Smooth scroll fallback + hash update without jump
(function () {
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;

    const id = a.getAttribute("href");
    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", id);
  });
})();

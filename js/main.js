// Theme toggle with localStorage persistence + system-preference fallback.
(function () {
  const KEY = "portfolio-theme";
  const root = document.documentElement;

  function apply(theme) {
    root.setAttribute("data-theme", theme);
  }

  // Set initial theme as early as possible.
  const saved = localStorage.getItem(KEY);
  if (saved) {
    apply(saved);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    apply("dark");
  } else {
    apply("light");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        apply(next);
        localStorage.setItem(KEY, next);
      });
    }

    // Highlight the active nav link.
    const page = document.body.getAttribute("data-page");
    if (page) {
      const link = document.querySelector('.nav-links a[data-nav="' + page + '"]');
      if (link) link.classList.add("active");
    }
  });
})();

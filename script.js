document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", isOpen);
      navToggle.setAttribute(
        "aria-label",
        isOpen ? "メニューを閉じる" : "メニューを開く"
      );
    });

    navList.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (navList.classList.contains("is-open")) {
          navList.classList.remove("is-open");
          navToggle.classList.remove("is-open");
          navToggle.setAttribute("aria-label", "メニューを開く");
        }
      });
    });
  }

  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const headerOffset = 64;
      const rect = target.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  });

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", () => {
      alert("デモ用フォームのため、送信は行われません。");
    });
  }
});


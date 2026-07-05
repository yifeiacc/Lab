(function () {
  "use strict";

  const storageKey = "al-folio-language";
  const languages = ["en", "zh"];
  const copy = {
    en: {
      aboutSubtitle: "Professor, Department of Computer Science, Northwestern Polytechnical University",
      current: "(current)",
      nav: {
        about: "About",
        publications: "Publications",
        group: "Group",
        incomingStudents: "Incoming Students",
        cv: "CV",
      },
      pageTitle: {
        publications: "Publications",
        group: "Group",
        incomingStudents: "Incoming Students",
        cv: "CV",
      },
      searchAria: "Open search",
      searchTitle: "Search",
      selectedPublications: "Selected Publications",
      themeAria: "Change color theme",
      themeTitle: "Change theme",
      toggleAria: "Switch language",
      toggleLabel: "中",
      toggleTitle: "Switch to Chinese",
    },
    zh: {
      aboutSubtitle: "西北工业大学计算机学院教授",
      current: "（当前）",
      nav: {
        about: "关于",
        publications: "论文",
        group: "团队",
        incomingStudents: "招生",
        cv: "简历",
      },
      pageTitle: {
        publications: "论文",
        group: "团队",
        incomingStudents: "招生",
        cv: "简历",
      },
      searchAria: "打开搜索",
      searchTitle: "搜索",
      selectedPublications: "代表性论文",
      themeAria: "切换日夜模式",
      themeTitle: "切换日夜模式",
      toggleAria: "切换语言",
      toggleLabel: "EN",
      toggleTitle: "Switch to English",
    },
  };

  function getSavedLanguage() {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (languages.includes(saved)) return saved;
    } catch (error) {
      return "en";
    }
    return "en";
  }

  function saveLanguage(language) {
    try {
      window.localStorage.setItem(storageKey, language);
    } catch (error) {
      // The toggle still works for the current page if storage is unavailable.
    }
  }

  function setLinkText(link, text, language) {
    const wasCurrent = Boolean(link.querySelector(".sr-only"));
    link.textContent = text;
    if (wasCurrent) {
      const current = document.createElement("span");
      current.className = "sr-only";
      current.textContent = copy[language].current;
      link.appendChild(document.createTextNode(" "));
      link.appendChild(current);
    }
  }

  function pageKeyFromPath(path) {
    const cleanPath = path.replace(/\/+$/, "/");
    if (cleanPath.endsWith("/publications/")) return "publications";
    if (cleanPath.endsWith("/group/")) return "group";
    if (cleanPath.endsWith("/incoming-students/")) return "incomingStudents";
    if (cleanPath.endsWith("/cv/")) return "cv";
    if (cleanPath === "/" || cleanPath.endsWith("/lab/")) return "about";
    return null;
  }

  function currentPageKey() {
    return pageKeyFromPath(window.location.pathname);
  }

  function navKeyFromHref(href) {
    if (!href) return null;
    let path = href;
    try {
      path = new URL(href, window.location.href).pathname;
    } catch (error) {
      return null;
    }
    return pageKeyFromPath(path);
  }

  function updateNavigation(language) {
    document.querySelectorAll(".navbar a.nav-link").forEach((link) => {
      const key = navKeyFromHref(link.getAttribute("href"));
      if (key && copy[language].nav[key]) {
        setLinkText(link, copy[language].nav[key], language);
      }
    });

    const searchToggle = document.getElementById("search-toggle");
    if (searchToggle) {
      searchToggle.title = copy[language].searchTitle;
      searchToggle.setAttribute("aria-label", copy[language].searchAria);
    }

    const themeToggle = document.getElementById("light-toggle");
    if (themeToggle) {
      themeToggle.title = copy[language].themeTitle;
      themeToggle.setAttribute("aria-label", copy[language].themeAria);
    }
  }

  function updateContent(language) {
    document.querySelectorAll("[data-i18n-en][data-i18n-zh]").forEach((element) => {
      element.textContent = element.getAttribute(`data-i18n-${language}`) || "";
    });

    if (currentPageKey() !== "about") return;

    const subtitle = document.querySelector(".post-header .desc");
    if (subtitle) subtitle.textContent = copy[language].aboutSubtitle;
    document.querySelectorAll('h2 a[href$="/publications/"]').forEach((link) => {
      link.textContent = copy[language].selectedPublications;
    });
  }

  function updatePageTitle(language) {
    const key = currentPageKey();
    const title = document.querySelector(".post-header .post-title");
    if (!key || key === "about" || !title || !copy[language].pageTitle[key]) return;
    title.textContent = copy[language].pageTitle[key];
  }

  function ensureLanguageToggle(language) {
    let button = document.getElementById("language-toggle");
    if (button) return button;

    const menu = document.querySelector(".navbar-menu-list");
    if (!menu) return null;

    const item = document.createElement("li");
    item.className = "toggle-container language-toggle-container";

    button = document.createElement("button");
    button.id = "language-toggle";
    button.type = "button";

    const label = document.createElement("span");
    label.className = "language-toggle-label";
    button.appendChild(label);

    item.appendChild(button);

    const themeItem = document.getElementById("light-toggle")?.closest("li");
    if (themeItem && themeItem.parentNode === menu) {
      menu.insertBefore(item, themeItem);
    } else {
      menu.appendChild(item);
    }

    button.addEventListener("click", () => {
      const nextLanguage = document.documentElement.dataset.language === "zh" ? "en" : "zh";
      applyLanguage(nextLanguage);
      saveLanguage(nextLanguage);
    });

    return button;
  }

  function applyLanguage(language) {
    const currentLanguage = languages.includes(language) ? language : "en";
    document.documentElement.dataset.language = currentLanguage;
    document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";

    const button = ensureLanguageToggle(currentLanguage);
    if (button) {
      button.title = copy[currentLanguage].toggleTitle;
      button.setAttribute("aria-label", copy[currentLanguage].toggleAria);
      const label = button.querySelector(".language-toggle-label");
      if (label) label.textContent = copy[currentLanguage].toggleLabel;
    }

    updateNavigation(currentLanguage);
    updatePageTitle(currentLanguage);
    updateContent(currentLanguage);
  }

  function initLanguageToggle() {
    applyLanguage(getSavedLanguage());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLanguageToggle, { once: true });
  } else {
    initLanguageToggle();
  }
})();

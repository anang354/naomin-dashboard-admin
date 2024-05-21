window.addEventListener("scroll", function () {
  function navbarOnScrollFixed() {
    const navbar = document.getElementById("fixed-scroll");
    const brand = document.getElementById("fixed-brand");
    const userNav = document.getElementById("fixed-user");
    if (window.innerWidth > 767) {
      if (window.scrollY >= 50) {
        navbar.classList.add("fixed", "w-full", "top-0", "z-50");
        brand.classList.remove("hidden");
        brand.classList.add("block");
        userNav.classList.remove("hidden");
        userNav.classList.add("block");
      } else {
        navbar.classList.remove("fixed", "w-full", "top-0");
        brand.classList.remove("block");
        brand.classList.add("hidden");
        userNav.classList.remove("block");
        userNav.classList.add("hidden");
      }
    }
  }
  navbarOnScrollFixed();
});

var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Automatically update the copyright year
  const yearElements = document.querySelectorAll("[data-year]");

  yearElements.forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  // Mobile navigation
  const menuButton = document.querySelector(".mobile-toggle");
  const navigation = document.querySelector(".nav-links");

  if (!menuButton || !navigation) {
    return;
  }

  menuButton.setAttribute("aria-expanded", "false");

  menuButton.addEventListener("click", function () {
    const menuIsOpen = navigation.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", menuIsOpen);

    if (menuIsOpen) {
      menuButton.textContent = "×";
      menuButton.setAttribute("aria-label", "Close navigation");
    } else {
      menuButton.textContent = "☰";
      menuButton.setAttribute("aria-label", "Open navigation");
    }
  });

  // Close the mobile menu after selecting a link
  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      menuButton.textContent = "☰";
    });
  });

  // Close the menu with the Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      menuButton.textContent = "☰";
    }
  });
});

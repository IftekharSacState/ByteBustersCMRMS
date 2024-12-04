document.addEventListener("DOMContentLoaded", () => {
  // Selecting buttons
  const loginButton = document.querySelector(".login");
  const homeButton = document.querySelector(".home");
  const faqButton = document.querySelector(".faq");
  const contactButton = document.querySelector(".contact");
  const servicesButton = document.querySelector(".services-plus");
  const aboutButton = document.querySelector(".about");
  const loginSpan = document.querySelector(".login-37");

  // Adding event listeners
  if (loginButton) {
    loginButton.addEventListener("click", () => {
      window.location.href = "../login/index.html"; // Redirect to the login page
    });
  }

  if (homeButton) {
    homeButton.addEventListener("click", () => {
      window.location.href = "../Homepage/index.html"; // Redirect to the homepage
    });
  }

  if (faqButton) {
    faqButton.addEventListener("click", () => {
      window.location.href = "../faq/index.html"; // Redirect to the FAQ page
    });
  }

  if (contactButton) {
    contactButton.addEventListener("click", () => {
      window.location.href = "../contact/index.html"; // Redirect to the contact page
    });
  }

  if (servicesButton) {
    servicesButton.addEventListener("click", () => {
      window.location.href = "../service+/index.html"; // Redirect to the services page
    });
  }

  if (aboutButton) {
    aboutButton.addEventListener("click", () => {
      window.location.href = "../about/index.html"; // Redirect to the about page
    });
  }

  if (loginSpan) {
    loginSpan.addEventListener("click", () => {
      window.location.href = "../login/index.html"; // Redirect to the login page
    });
  }
});

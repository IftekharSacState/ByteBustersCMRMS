document.addEventListener("DOMContentLoaded", () => {
  const signInButton = document.querySelector(".sign-in");
  const registerButton = document.querySelector(".register");
  const faqButton = document.querySelector(".faq");
  const contactButton = document.querySelector(".contact");
  const servicesButton = document.querySelector(".services-plus");
  const aboutButton = document.querySelector(".about");
  const makeAppointmentButton = document.querySelector(".make-appointment");

  signInButton.addEventListener("click", () => {
    window.location.href = "../login/index.html";
    // Add your sign-in logic here
  });

  registerButton.addEventListener("click", () => {
    window.location.href = "../signup/index.html";
    // Add your register logic here
  });

  faqButton.addEventListener("click", () => {
    window.location.href = "../faq/index.html";
    // Add your FAQ logic here
  });

  contactButton.addEventListener("click", () => {
    window.location.href = "../contact/index.html";
    // Add your contact logic here
  });

  servicesButton.addEventListener("click", () => {
    window.location.href = "../service+/index.html";
    // Add your services logic here
  });

  makeAppointmentButton.addEventListener("click", () => {
    window.location.href = "../login/index.html"; // Redirect to login page
  });
  aboutButton.addEventListener("click", () => {
    window.location.href = "../about/index.html";
    // Add your about logic here
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const signInButton = document.querySelector(".sign-in");
  const registerButton = document.querySelector(".register");
  const faqButton = document.querySelector(".faq");
  const contactButton = document.querySelector(".contact");
  const servicesButton = document.querySelector(".services-plus");
  const aboutButton = document.querySelector(".about");

  signInButton.addEventListener("click", () => {
    window.location.href = "../login/index.html";
    // Add your sign-in logic here
  });

  registerButton.addEventListener("click", () => {
    alert("Register button clicked");
    // Add your register logic here
  });

  faqButton.addEventListener("click", () => {
    alert("FAQ button clicked");
    // Add your FAQ logic here
  });

  contactButton.addEventListener("click", () => {
    alert("Contact button clicked");
    // Add your contact logic here
  });

  servicesButton.addEventListener("click", () => {
    alert("Services button clicked");
    // Add your services logic here
  });

  aboutButton.addEventListener("click", () => {
    alert("About button clicked");
    // Add your about logic here
  });
});
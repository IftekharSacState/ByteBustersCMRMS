document.addEventListener("DOMContentLoaded", () => {
    const changePassButton = document.querySelector(".change-pass");
    const homeButton = document.querySelector(".home");
    const faqButton = document.querySelector(".faq");
    const contactButton = document.querySelector(".contact");
    const servicesButton = document.querySelector(".services-plus");
    const aboutButton = document.querySelector(".about");
  
    changePassButton.addEventListener("click", () => {
      window.location.href = "../login/index.html";
      // Add your sign-in logic here
    });
  
    homeButton.addEventListener("click", () => {
      window.location.href = "../Homepage/index.html";
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
  
    aboutButton.addEventListener("click", () => {
      window.location.href = "../about/index.html";
      // Add your about logic here
    });
  });
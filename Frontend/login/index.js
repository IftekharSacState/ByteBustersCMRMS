document.addEventListener("DOMContentLoaded", () => {
    // const signInButton = document.querySelector(".sign-in");
    const homeButton = document.querySelector(".home");
    const faqButton = document.querySelector(".faq");
    const contactButton = document.querySelector(".contact");
    const servicesButton = document.querySelector(".services-plus");
    const aboutButton = document.querySelector(".about");
    const loginButton = document.querySelector(".login-button"); 
    const registerButton = document.querySelector(".button"); 
    const resetPasswordLink = document.querySelector(".here");

    // signInButton.addEventListener("click", () => {
    //   window.location.href = "../login/index.html";
    //   // Add your sign-in logic here
    // });
  
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
    loginButton.addEventListener("click", () => {
      // Redirect to custdash.html
      window.location.href = "../custdash/index.html";
    });
    registerButton.addEventListener("click", () => {
      // Redirect to register.html
      window.location.href = "../signup/index.html";
    });
    resetPasswordLink.addEventListener("click", () => {
      // Redirect to password reset page
      window.location.href = "../forgotpass/index.html"; 
    });
  });
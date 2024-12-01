document.addEventListener("DOMContentLoaded", () => {
  // Select all necessary elements for navigation buttons
  const homeButton = document.querySelector(".home");
  const faqButton = document.querySelector(".faq");
  const contactButton = document.querySelector(".contact");
  const servicesButton = document.querySelector(".services-plus");
  const aboutButton = document.querySelector(".about");
  const loginButton = document.querySelector(".login-button"); 
  const registerButton = document.querySelector(".button"); 
  const resetPasswordLink = document.querySelector(".here"); /*Forgot Pass */
  const employeeLink = document.querySelector(".here-b"); /* Employee Login */
  // Select username and password inputs and labels
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const usernameLabel = document.querySelector(".username");
  const passwordLabel = document.querySelector(".password-9");
 // To hide the Username label when typing
  usernameInput.addEventListener("input", function() {
      if (this.value.length > 0) {
          usernameLabel.style.display = "none"; // Hide the label
      } else {
          usernameLabel.style.display = "block"; // Show the label again if the field is empty
      }
  });
  //To hide the Password label when typing
  passwordInput.addEventListener("input", function() {
      if (this.value.length > 0) {
          passwordLabel.style.display = "none"; // Hide the label
      } else {
          passwordLabel.style.display = "block"; // Show the label again if the field is empty
      }
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
  employeeLink.addEventListener("click", () => {
      // Redirect to the employee login page
      window.location.href = "../employeelogin/index.html";
  });
});

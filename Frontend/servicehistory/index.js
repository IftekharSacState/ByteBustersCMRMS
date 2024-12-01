document.addEventListener("DOMContentLoaded", () => {
    // const signInButton = document.querySelector(".sign-in");
    const homeButton = document.querySelector(".home");
    const profileButton = document.querySelector(".profile");
    const backButton = document.querySelector(".back");
    const logoutButton = document.querySelector(".logout");
    // const aboutButton = document.querySelector(".about");
  
    // signInButton.addEventListener("click", () => {
    //   window.location.href = "../login/index.html";
    //   // Add your sign-in logic here
    // });
  
    homeButton.addEventListener("click", () => {
      window.location.href = "../Homepage/index.html";
      // Add your register logic here
    });
  
    profileButton.addEventListener("click", () => {
      window.location.href = "../profilesettingchatbox/index.html";
      // Add your FAQ logic here
    });
  
    backButton.addEventListener("click", () => {
      window.location.href = "../custdash/index.html";
      // Add your contact logic here
    });
  
    logoutButton.addEventListener("click", () => {
      window.location.href = "../login/index.html";
      // Add your services logic here
    });
  
    // aboutButton.addEventListener("click", () => {
    //   window.location.href = "../about/index.html";
    //   // Add your about logic here
    // });
  });
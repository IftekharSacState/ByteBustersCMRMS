document.addEventListener("DOMContentLoaded", () => {
    const emailMeButton = document.querySelector(".email-me");
    const homeButton = document.querySelector(".home");
    const faqButton = document.querySelector(".faq");
    const contactButton = document.querySelector(".contact");
    const servicesButton = document.querySelector(".services-plus");
    const aboutButton = document.querySelector(".about");
    const emailInput = document.getElementById("email");
  
    emailMeButton.addEventListener("click", async () => {
      try {
        if (emailInput.value === "") {
          throw new Error("Please enter your email address");
        }

        // Check if email exists in the database
        const response = await fetch("http://localhost:3000/users/forgotpassword", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: emailInput.value }),
        })

        console.log(response);

        // Handle response
        if (response.status === 200) {
          alert("Your password has been reset to 'password'.");
        } else {
          alert("Error");
        }
      } catch (error) {
        alert(error);
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
  });
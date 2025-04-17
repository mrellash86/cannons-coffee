document.addEventListener("DOMContentLoaded", () => {
  // Code for the contact form on contact.html
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission behavior

      // Get form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const comments = document.getElementById("comments").value;
      const flavor = document.getElementById("flavor").value;
      const interest = document.querySelector(
        'input[name="interest"]:checked'
      ).value;

      // Log form to console
      console.log("Form Data:");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${phone}`);
      console.log(`Comments: ${comments}`);
      console.log(`Favorite Coffee Flavor: ${flavor}`);
      console.log(`Interest: ${interest}`);

      // Display message
      const messageContainer = document.createElement("p");
      messageContainer.textContent = `Thanks ${name} for reaching out! Be on the lookout for a confirmation email from us and someone will reach out!`;

      // Append the message to the form's parent container
      form.parentNode.appendChild(messageContainer);

      // Clear the form
      form.reset();
    });
  }

  // Code for the login form on cart.html
  const loginForm = document.querySelector(".login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission behavior

      // Get form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Log the data to the console
      console.log("Login Data:");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Password: ${password}`);

      // Display a welcome message on the webpage
      const messageContainer = document.createElement("p");
      messageContainer.textContent = `Welcome, ${name}! You are logged in!`;

      // Append the message to the form's parent container
      loginForm.parentNode.appendChild(messageContainer);

      // Optionally, clear the form
      loginForm.reset();
    });
  }
});

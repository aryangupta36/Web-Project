document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".login-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin" && password === "1234") {
      window.location.href = "home.html";
    } else {
      alert("Invalid username or password!");
    }
  });
});

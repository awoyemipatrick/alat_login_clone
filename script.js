document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    let eyeIcon = document.getElementById("eyeIcon");

    if (!eyeIcon) {
      eyeIcon = document.createElement("img");
      eyeIcon.id = "eyeIcon";
      eyeIcon.alt = "Show password";
      document.querySelector(".toggle_button").appendChild(eyeIcon);
    }

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.src = "./assets/eye_closed_icon.svg";
      eyeIcon.alt = "Hide password";
    } else {
      passwordInput.type = "password";
      eyeIcon.src = "./assets/eye_icon.svg";
      eyeIcon.alt = "Show password";
    }
  });

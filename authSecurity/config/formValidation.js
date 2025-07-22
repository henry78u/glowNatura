 const form = document.getElementById("signupForm");
    const name = document.getElementById("username");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    const nameError = document.getElementById("nameError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

     const hiddenPasswordIcon = document.getElementById('hiddenPasswordIcon');
    const notHiddenPasswordIcon = document.getElementById('notHiddenPasswordIcon');

    const sHiddenPasswordIcon = document.getElementById('sHiddenPasswordIcon');
    const sNotHiddenPasswordIcon = document.getElementById('sNotHiddenPasswordIcon');

 

    /*
    
    */
function passwordPrivacy() {
  // PASSWORD FIELD TOGGLING
  const passwordInput = document.getElementById('password');
  const hiddenPasswordIcon = document.getElementById('hiddenPasswordIcon');
  const notHiddenPasswordIcon = document.getElementById('notHiddenPasswordIcon');

  // Start by showing only the 'hide' icon
  notHiddenPasswordIcon.style.display = 'none';

  hiddenPasswordIcon.addEventListener('click', () => {
    passwordInput.type = 'text';
    hiddenPasswordIcon.style.display = 'none';
    notHiddenPasswordIcon.style.display = 'inline';
  });

  notHiddenPasswordIcon.addEventListener('click', () => {
    passwordInput.type = 'password';
    notHiddenPasswordIcon.style.display = 'none';
    hiddenPasswordIcon.style.display = 'inline';
  });

  // CONFIRM PASSWORD FIELD TOGGLING
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const sHiddenPasswordIcon = document.getElementById('sHiddenPasswordIcon');
  const sNotHiddenPasswordIcon = document.getElementById('sNotHiddenPasswordIcon');

  sNotHiddenPasswordIcon.style.display = 'none';

  sHiddenPasswordIcon.addEventListener('click', () => {
    confirmPasswordInput.type = 'text';
    sHiddenPasswordIcon.style.display = 'none';
    sNotHiddenPasswordIcon.style.display = 'inline';
  });

  sNotHiddenPasswordIcon.addEventListener('click', () => {
    confirmPasswordInput.type = 'password';
    sNotHiddenPasswordIcon.style.display = 'none';
    sHiddenPasswordIcon.style.display = 'inline';
  });
}

// Call after DOM is ready
document.addEventListener('DOMContentLoaded', passwordPrivacy);


    form.addEventListener('submit', function (e) {
      e.preventDefault(); // prevent form from submitting by default

      // Clear previous errors
      nameError.textContent = "";
      passwordError.textContent = "";
      confirmPasswordError.textContent = "";

      let isValid = true;

      // Validate name
      if (name.value.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
      }
      if (passwordPrivacy() === true) {
        password.type = 'text'
      }
      // Validate password length
      if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        isValid = false;
      }

      // Validate password match
      if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
      }



      if (isValid) {
        alert("Signedup successfully!");
        form.reset();
      }
    });
function hideErrors() {
  let error = document.getElementsByClassName("error");
  for (let i = 0; i < error.length; i++) {
    error[i].style.display = "none";
  }
}

function resetForm(e) {
  if (confirm("Reset all information?")) {
    hideErrors();
    document.getElementById("username").focus();
    return true;
  }

  e.preventDefault();

  return false;
}

function validate(e) {
  hideErrors();
  if (formHasErrors()) {
    e.preventDefault();
    return false;
  }

  return true;
}

function formHasErrors() {
  let errorFlag = false;

  // Username
  const username = document.getElementById("username");
  if (!username.value) {
    document.getElementById("username_error").style.display = "block";
    username.focus();
    username.select();
    errorFlag = true;
  }

  // Phone Number
  const phoneNumber = document.getElementById("phoneNumber");
  if (phoneNumber.value.length !== 10) {
    document.getElementById("phoneNumber_error").style.display = "block";
    phoneNumber.focus();
    phoneNumber.select();
    errorFlag = true;
  }

  // Email
  const email = document.getElementById("email");
  let regex = new RegExp(/^\S+@\S+\.\S+$/);
  if (!regex.test(email.value)) {
    document.getElementById("email_error").style.display = "block";
    email.focus();
    email.select();
    errorFlag = true;
  }

  return errorFlag;
}

function load() {
  hideErrors();
  console.log(document.getElementById("contact"));
  document.getElementById("contact-form").addEventListener("submit", validate);
  document.getElementById("reset").addEventListener("click", resetForm);
}

document.addEventListener("DOMContentLoaded", load);

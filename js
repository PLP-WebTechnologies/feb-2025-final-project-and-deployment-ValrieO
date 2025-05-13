function validateForm() {
  let name = document.forms["contactForm"]["name"].value;
  let message = document.forms["contactForm"]["message"].value;

  if (name === "" || message === "") {
    alert("Please fill in both your name and message.");
    return false;
  }
}

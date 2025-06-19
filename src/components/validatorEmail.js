function validatorEmail() {
  const input = document.querySelector(".inputEmail");
  const btn = document.querySelector(".btnValid");
  const errorText = document.querySelector(".errorText");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  btn.addEventListener("click", () => {
    const value = input.value.trim();

    errorText.textContent = "";
    input.style.borderColor = "#d2b48c";

    if (value === "") {
      errorText.textContent = "Поле Пусте!";
      errorText.style.color = "red";
      input.style.borderColor = "red";
      input.focus();
      return;
    } else if (!emailPattern.test(value)) {
      errorText.textContent = "Емайл не коректний!";
      errorText.style.color = "red";
      input.style.borderColor = "red";
      input.focus();
      return;
    } else {
      errorText.textContent = "Емайл написаний добре";
      errorText.style.color = "green";
      input.style.borderColor = "#d2b48c";
    }
  });
}

validatorEmail();

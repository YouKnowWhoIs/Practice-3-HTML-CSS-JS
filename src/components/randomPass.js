function randomPass() {
  const btnRandomPass = document.querySelector(".btnRandomPass");
  const randomPassText = document.querySelector(".randomPassText");

  const chars =
    "1234567890!?@#*QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
  const passLenght = 13;

  btnRandomPass.addEventListener("click", () => {
    let pass = "";

    randomPassText.style.visibility = "visible";

    for (let i = 0; i < passLenght; i++) {
      const randomNum = Math.floor(Math.random() * chars.length);
      pass += chars[randomNum];
    }

    randomPassText.textContent = pass;
  });
}

randomPass();

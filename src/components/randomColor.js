function randomColor() {
  const btnRandomColor = document.querySelector(".btnRandomColor");
  const btnRandomBodyColor = document.querySelector(".btnRandomBodyColor");
  const conteinerColor = document.querySelector(".conteinerColor");
  const colorName = document.querySelector(".colorName");
  const BackgColorName = document.querySelector(".BackgColorName");

  let clickCount = 0;

  btnRandomColor.addEventListener("click", () => {
    const newColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

    conteinerColor.style.backgroundColor = "#" + newColor;

    colorName.textContent = `#${newColor}`;

    clickCount++;

    if (clickCount === 3) {
      btnRandomBodyColor.style.visibility = "visible";
      BackgColorName.style.visibility = "visible";
    }
  });

  btnRandomBodyColor.addEventListener("click", () => {
    const newColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

    document.body.style.backgroundColor = "#" + newColor;

    BackgColorName.textContent = `#${newColor}`;
  });
}

randomColor();

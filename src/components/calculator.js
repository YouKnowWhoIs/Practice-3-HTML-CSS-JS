function calculator() {
  const itemNumber = document.querySelectorAll(".itemNumber");
  const input = document.querySelector(".input");
  const result = document.querySelector(".result");

  input.addEventListener("keydown", (event) => {
    const allowedKeys = "01234567890-+*/%().";
    const specialKeys = ["Enter", "Delete", "ArrowLeft", "ArrowRight"];
    const lastChar = input.value.slice(-1);
    const signs = "-+/*%.";

    if (!allowedKeys.includes(event.key) && !specialKeys.includes(event.key)) {
      event.preventDefault();
    }

    if (signs.includes(lastChar) && signs.includes(event.key)) {
      event.preventDefault();
      input.value = input.value.slice(0, -1) + event.key;
    }

    if (event.key === "Enter") {
      try {
        const resultNum = eval(input.value);
        result.textContent = resultNum;

        input.value = "";
      } catch {
        result.textContent = "Помилка";
      }
    }
  });

  itemNumber.forEach((btn) =>
    btn.addEventListener("click", () => {
      const lastChar = input.value.slice(-1);
      const signs = "-+/*%.";

      if (btn.textContent === "=") {
        try {
          const resultNum = eval(input.value);
          result.textContent = resultNum;

          input.value = "";
        } catch {
          result.textContent = "Помилка!";
        }
      } else if (btn.textContent === "C") {
        input.value = "";
      } else {
        if (signs.includes(lastChar) && signs.includes(btn.textContent)) {
          input.value = input.value.slice(0, -1) + btn.textContent;
        } else {
          input.value += btn.textContent;
        }
      }
    })
  );
}

calculator();

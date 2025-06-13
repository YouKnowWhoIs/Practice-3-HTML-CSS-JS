function errorText(className, text) {
  if (!className) {
    alert("ОЙ! Щось пішло не так! не передано селектор.");
    return;
  }

  let element = document.querySelector(className);

  element.textContent = text;
}

export default errorText;

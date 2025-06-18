function toDoList() {
  const toDoList = document.getElementById("toDoList");

  const title = document.createElement("h2");

  const divInputWrapper = document.createElement("div");
  const input = document.createElement("input");
  const addBtn = document.createElement("button");

  const divListWrapper = document.createElement("div");
  const list = document.createElement("ul");

  toDoList.appendChild(title);

  toDoList.appendChild(divInputWrapper);
  divInputWrapper.appendChild(input);
  divInputWrapper.appendChild(addBtn);

  toDoList.appendChild(divListWrapper);
  divListWrapper.appendChild(list);

  title.classList.add("toDoTitle");
  divInputWrapper.classList.add("toDoInputWrapper");
  input.classList.add("toDoInput");
  addBtn.classList.add("toDoAddBtn");
  divListWrapper.classList.add("listWrapper");
  list.classList.add("list");

  title.textContent = "To Do List";
  addBtn.textContent = "Додати";

  addBtn.addEventListener("click", () => {
    if (input.value.trim() === "") {
      input.value = "";

      return;
    } else {
      const listItem = document.createElement("li");
      const listText = document.createElement("p");
      const removeBtn = document.createElement("button");

      list.appendChild(listItem);
      listItem.appendChild(listText);
      listItem.appendChild(removeBtn);

      listItem.classList.add("listItems");
      listText.classList.add("listText");
      removeBtn.classList.add("removeBtn");

      listText.textContent = input.value;
      removeBtn.textContent = "Видалити";

      input.value = "";

      removeBtn.addEventListener("click", () => {
        removeBtn.parentElement.remove();
      });
    }
  });
}

toDoList();

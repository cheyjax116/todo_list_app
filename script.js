const submitButton = document.getElementById("todoInput");
const clearListButton = document.getElementById("clearListButton");
const form = document.getElementById("form");

submitButton.addEventListener('click',addToDo);
form.addEventListener("submit", addToDo);
clearListButton.addEventListener("click", clearList);

function addToDo(event) {
  event.preventDefault();
  let list = document.getElementById("the_list");
  let entry = document.getElementById("entry");
  let item = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  let deleteButton = document.createElement("BUTTON");
  deleteButton.textContent = "X";

  if (entry.value == "") {
    return null;
  } else {
    item.setAttribute("id", "checkbox");
    item.setAttribute("id", "overflow");
    item.appendChild(checkbox);
    item.appendChild(document.createTextNode(entry.value));
    deleteButton.setAttribute("class", "deleteButton");
    item.appendChild(deleteButton);
    list.appendChild(item);
  }

  if (list.lastChild == "") {
    document.getElementById("toggleHide").style.visibility = "visible";
  } else {
    document.getElementById("toggleHide").style.visibility = "hidden";
  }

  checkbox.addEventListener("click", (event) => {
    if (event.currentTarget.checked) {
      item.setAttribute("class", "strikethrough");
    } else {
      item.setAttribute("class", "");
    }
  });

  deleteButton.addEventListener("click", (event) => {
    if (event.currentTarget) {
      list.removeChild(item);
    }
    checkList();
  });
  form.reset()
}


function clearList() {
  let list = document.getElementById("the_list");
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }

  checkList();
}


function checkList() {
  let list = document.getElementById("the_list");
  let items = document.getElementById("overflow");
  let header = document.getElementById("toggleHide");

  if (items == null) {
    header.style.visibility = "visible";
  }
}

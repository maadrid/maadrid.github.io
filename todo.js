const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();

}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.id = newTodo.id;
  span.innerText = newTodo.text;
  button.innerText = "❌";
  button.className= "cancleButton";
  button.addEventListener("click", deleteToDo);
 
  li.appendChild(button);
  li.appendChild(span);
  toDoList.appendChild(li);


}

function handleToDosubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  const newTodoObj = { text: newTodo, id: Date.now(), };
  toDoInput.value = "";
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

function loadToDoList() {
  const savedToDos = localStorage.getItem(TODOS_KEY);

  if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
  }
}

function initToDoList() {
  toDoForm.addEventListener("submit", handleToDosubmit);
  loadToDoList();
}

initToDoList();
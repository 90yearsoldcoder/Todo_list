import "../styles/mainPanel.css";
import TodoList from "../modules/todolist";
import Thing from "../modules/thing";
import { format } from "date-fns";
import loadTaskDetail from "../functions/loadTaskDetail";
import StorageAPI from "../modules/storage";
import loadTaskChange from "../functions/loadTaskChange";

const createOneTask = (thing) => {
  let task = document.createElement("div");
  task.classList.add("task");

  /* ---------------left part---------------- */
  let leftpart = document.createElement("div");
  leftpart.classList.add("taskPart_left");
  task.appendChild(leftpart);

  let checkbox = document.createElement("input");
  checkbox.classList.add("task_checkbox");
  checkbox.type = "checkbox";
  checkbox.id = thing.tid;
  checkbox.checked = thing.done;
  leftpart.appendChild(checkbox);

  let title = document.createElement("div");
  title.classList.add("task_title");
  title.innerText = thing.title;
  leftpart.appendChild(title);
  if (thing.done) title.classList.add("off");
  //add a listener: ('change', funtion)
  //change the title stytle and update thing's done status in backend
  checkbox.addEventListener("change", () => {
    thing.done = checkbox.checked;
    StorageAPI.saveThing(thing);
    title.classList.toggle("off");
  });

  /* ----------right part---------------- */
  let rightpart = document.createElement("div");
  rightpart.classList.add("taskPart_right");
  task.appendChild(rightpart);

  const detailButton = document.createElement("div");
  detailButton.classList.add("detailButton");
  detailButton.innerText = "DETAILS";
  rightpart.appendChild(detailButton);
  //add detail button listener
  detailButton.addEventListener("click", () => {
    loadTaskDetail(thing);
  });

  let dueDate = document.createElement("div");
  dueDate.classList.add("dueDate");
  dueDate.innerText = format(thing.dueDate, "MMMM do");
  rightpart.appendChild(dueDate);

  let change = document.createElement("div");
  change.classList.add("task_icon");
  change.innerHTML = "<i class='fa-regular fa-pen-to-square'>";
  //add change listener
  change.addEventListener("click", () => {
    loadTaskChange(thing, title, dueDate);
  });
  rightpart.appendChild(change);

  let remove = document.createElement("div");
  remove.classList.add("task_icon");
  remove.innerHTML = "<i class='fa-solid fa-trash-can'>";
  //add change listener
  //....
  rightpart.appendChild(remove);

  return task;
};

const createMainPanel = (todolist) => {
  const container = document.createElement("div");
  container.id = "mainPanel_container";
  container.classList.add("mainPanel_container");

  todolist.sort();
  let thingList = todolist.list;
  for (let thing of thingList) {
    let task = createOneTask(thing);
    container.appendChild(task);
  }

  return container;
};

export default createMainPanel;

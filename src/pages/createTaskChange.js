import "../styles/newTask.css";
import changepageHtml from "../html/task_change_page.html";
import StorageAPI from "../modules/storage";
import close_taskChange_page from "../functions/closeTaskChange";
import Thing from "../modules/thing";
import { format } from "date-fns";

const taskChange = (thing, title, dueDate) => {
  const container = document.createElement("div");
  container.classList.add("newTask_container");
  container.id = "taskChangePage";

  container.innerHTML += changepageHtml;

  //I used create new task page to edit task
  //However some detail of this page should be revised
  //1. Title of the page
  const page_title = container.querySelector("h5.newPage-title");
  page_title.innerText = "Edit the task";
  //2. Title of the task
  const taskTitle = container.querySelector("#taskTitle");
  taskTitle.value = thing.title;
  //3. desc of the task
  const taskDesc = container.querySelector("#taskDesc");
  taskDesc.value = thing.desc;
  //4. duedate of the task
  const taskDueDate = container.querySelector("#taskDueDate");
  taskDueDate.value = format(thing.dueDate, "yyyy-MM-dd'T'HH:mm");

  //4. desc of the task
  const taskPriority = container.querySelector("#taskPriority");
  taskPriority.value = thing.pp;
  //5. the button of add/change
  const AddNewTask = container.querySelector("#AddNewTask");
  AddNewTask.innerText = "Change";

  const button_close = container.querySelector("#CloseNewTaskWindow");
  button_close.addEventListener("click", close_taskChange_page);

  const changeTaskPage_sub = container.querySelector("#AddNewTask");
  changeTaskPage_sub.addEventListener("click", () => {
    thing.project = container.querySelector("#taskProject").value;
    thing.title = container.querySelector("#taskTitle").value;
    thing.desc = container.querySelector("#taskDesc").value;
    thing.dueDate = container.querySelector("#taskDueDate").value;
    thing.pp = container.querySelector("#taskPriority").value;
    StorageAPI.saveThing(thing);
    console.log(thing);
    title.innerText = thing.title;
    dueDate.innerText = format(thing.dueDate, "MMMM do");
    close_taskChange_page();
  });

  return container;
};

export default taskChange;

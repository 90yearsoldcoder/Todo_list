import "../styles/newTask.css";
import newpageHtml from "../html/new_task_page.html";
import StorageAPI from "../modules/storage";
import close_newTask_page from "../functions/closeNewTaskPage";
import Thing from "../modules/thing";

const newTask_page = () => {
  const container = document.createElement("div");
  container.classList.add("newTask_container");
  container.id = "newPage";

  container.innerHTML += newpageHtml;

  let project_list = StorageAPI.get_ProjectsList();

  const project_select = container.querySelector("#taskProject");
  for (let project of project_list) {
    const project_option = document.createElement("option");
    project_option.value = project;
    project_option.innerText = project;
    project_select.append(project_option);
  }

  const button_close = container.querySelector("#CloseNewTaskWindow");
  button_close.addEventListener("click", close_newTask_page);

  const newTaskPage_form = container.querySelector("#task-form");
  newTaskPage_form.onsubmit = () => {
    let thing = new Thing(
      document.getElementById("taskProject").value,
      document.getElementById("taskTitle").value,
      document.getElementById("taskDesc").value,
      document.getElementById("taskDueDate").value,
      document.getElementById("taskPriority").value
    );
    StorageAPI.saveThing(thing);
    close_newTask_page();
  };

  return container;
};

export default newTask_page;

import "../styles/sidebar.css";
import sidebar_templete from "../html/sidebar.html";
import updateProjectList from "../functions/updateProjectList";
import addNewButton from "./addNewButton";
import StorageAPI from "../modules/storage";
import Thing from "../modules/thing";
import TodoList from "../modules/todolist";
import loadMainPanel from "../functions/loadMainPanel";

const remove_active = () => {
  let parentElement = document.querySelector(".sidebar");
  parentElement.querySelectorAll("*").forEach((child) => {
    child.classList.remove("sidebar-active");
  });
};

const sidebar = () => {
  const container = document.createElement("div");
  container.classList.add("sidebar");

  container.innerHTML = sidebar_templete;

  const inbox = container.querySelector("#inbox");
  inbox.addEventListener("click", () => {
    remove_active();
    inbox.classList.add("sidebar-active");
    let todolist = StorageAPI.retrieve_todolist_byDone();
    loadMainPanel(todolist);
  });

  const today = container.querySelector("#today");
  today.addEventListener("click", () => {
    remove_active();
    today.classList.add("sidebar-active");
    //Todo: load todays' tasks and show them in main panel
    let today_date = new Date();
    let todolist = StorageAPI.retrieve_todolist_byDate(today_date);
    loadMainPanel(todolist);
  });

  const project_container = container.querySelector("#projects_container");
  updateProjectList(project_container);

  //add new project button
  const newProject = container.querySelector("#add_project");
  const newProject_panel = container.querySelector("#addproject_container");
  newProject.addEventListener("click", () => {
    newProject.classList.toggle("active");
    newProject_panel.classList.toggle("deactive");
  });

  //add/cancel new project form
  const newProject_submit = container.querySelector("#addproject_submit");
  const newProject_cancel = container.querySelector("#addproject_cancel");
  newProject_submit.addEventListener("click", () => {
    let title = container.querySelector("#new_project_title").value;
    if (title == "") {
      alert("Project Name cannot be blank");
      return;
    }
    StorageAPI.ProjectsList_push(title);
    newProject.classList.toggle("active");
    newProject_panel.classList.toggle("deactive");
    updateProjectList(project_container);
  });
  newProject_cancel.addEventListener("click", () => {
    newProject.classList.toggle("active");
    newProject_panel.classList.toggle("deactive");
  });

  const newButton = addNewButton();
  container.appendChild(newButton);

  return container;
};

export default sidebar;

import "../styles/sidebar.css";
import sidebar_templete from "../html/sidebar.html";
import updateProjectList from "../functions/updateProjectList";
import addNewButton from "./addNewButton";
import StorageAPI from "../modules/storage";
import Thing from "../modules/thing";
import TodoList from "../modules/todolist";

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
    //Todo: load all tasks(done) and show them in main_panel
    let todolist = StorageAPI.retrieve_todolist_byDone();
  });

  const today = container.querySelector("#today");
  today.addEventListener("click", () => {
    remove_active();
    today.classList.add("sidebar-active");
    //Todo: load todays' tasks and show them in main panel
  });

  const project_container = container.querySelector("#projects_container");
  updateProjectList(project_container);

  const newButton = addNewButton();
  container.appendChild(newButton);

  return container;
};

export default sidebar;

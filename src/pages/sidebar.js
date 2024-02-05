import "../styles/sidebar.css";
import sidebar_templete from "../html/sidebar.html";
import updateProjectList from "../functions/updateProjectList";

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
  });

  const today = container.querySelector("#today");
  today.addEventListener("click", () => {
    remove_active();
    today.classList.add("sidebar-active");
  });

  const project_container = container.querySelector("#projects_container");
  updateProjectList(project_container);

  return container;
};

export default sidebar;

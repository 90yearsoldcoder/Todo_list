import StorageAPI from "../modules/storage";
import loadMainPanel from "./loadMainPanel";

const remove_active = () => {
  let parentElement = document.querySelector(".sidebar");
  parentElement.querySelectorAll("*").forEach((child) => {
    child.classList.remove("sidebar-active");
  });
};

const updateProjectList = (container) => {
  let projectList = StorageAPI.get_ProjectsList();
  for (let project of projectList) {
    let project_div = document.createElement("div");
    project_div.classList.add("sidebar_title");
    project_div.innerHTML = `
        <i class="fa-solid fa-bars-progress fa-lg"></i>
        <div>${project}</div>
    `;

    //Todo: add a lissener for the button
    project_div.addEventListener("click", () => {
      let todolist = StorageAPI.retrieve_todolist_byProject(project);
      remove_active();
      project_div.classList.add("sidebar-active");
      loadMainPanel(todolist);
    });

    container.appendChild(project_div);
  }
};

export default updateProjectList;

import StorageAPI from "../modules/storage";
import loadMainPanel from "./loadMainPanel";
import loadDeleteProjectPage from "./loadDeleteProjectPage";

const remove_active = () => {
  let parentElement = document.querySelector(".sidebar");
  parentElement.querySelectorAll("*").forEach((child) => {
    child.classList.remove("sidebar-active");
  });
};

const updateProjectList = (container) => {
  let projectList = StorageAPI.get_ProjectsList();

  //clear the previous projects
  container.innerHTML = "";

  for (let project of projectList) {
    let project_div = document.createElement("div");
    project_div.classList.add("sidebar_title");
    project_div.innerHTML = `
        <i class="fa-solid fa-bars-progress fa-lg"></i>
        <div>${project}</div>
        <div id='removeProject_button'>
          <i class='fa-solid fa-trash-can'></i>
        </div>
    `;
    console.log(project_div);
    //add lissener to remove project button
    const removeProject_button = project_div.querySelector(
      "#removeProject_button"
    );
    removeProject_button.addEventListener("click", () => {
      loadDeleteProjectPage(project);
    });

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

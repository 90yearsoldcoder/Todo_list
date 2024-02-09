import "../styles/deleteProject.css";
import StorageAPI from "../modules/storage";
import closeDeleteProjectPage from "../functions/closeDeleteProjectPage";
import updateProjectList from "../functions/updateProjectList";

const deleteProject = (project) => {
  const container = document.createElement("div");
  container.classList.add("deleteProject_container");
  container.id = "deleteProject_container";

  const txt = document.createElement("p");
  txt.innerText = `Are you going to delete project ${project}?`;
  container.appendChild(txt);

  container.innerHTML += `
  <div class="deleteProject_buttons" id="deleteProject_buttons">
    <button type="submit" id="deleteProject_submit">Remove</button>
    <button id="deleteProject_cancel">Cancel</button>
  </div>
  `;

  const deleteProject_submit = container.querySelector("#deleteProject_submit");
  deleteProject_submit.addEventListener("click", () => {
    StorageAPI.remove_project(project);
    closeDeleteProjectPage();
    let inbox = document.querySelector("#inbox");
    let project_container = document.querySelector("#projects_container");
    updateProjectList(project_container);
    inbox.click();
  });

  const deleteProject_cancel = container.querySelector("#deleteProject_cancel");
  deleteProject_cancel.addEventListener("click", () => {
    closeDeleteProjectPage();
  });

  return container;
};

export default deleteProject;

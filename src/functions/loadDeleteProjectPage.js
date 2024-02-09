import deleteProject from "../pages/deleteProject";

const loadDeleteProjectPage = (project) => {
  const content = document.querySelector("#content");
  const modal = document.querySelector("#modalForAll");
  modal.classList.add("show");

  const page = deleteProject(project);
  content.appendChild(page);
};

export default loadDeleteProjectPage;

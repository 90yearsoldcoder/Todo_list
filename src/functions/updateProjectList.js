import StorageAPI from "../modules/storage";

const updateProjectList = (container) => {
  let projectList = StorageAPI.get_ProjectsList();
  for (let project of projectList) {
    let project_div = document.createElement("div");
    project_div.classList.add = "sidebar_title";
    project_div.innerHTML = `
    <div class="sidebar_title">
        <i class="fa-solid fa-bars-progress fa-lg"></i>
        <div>${project}</div>
    </div>
    `;

    //Todo: add a lissener for the button

    container.appendChild(project_div);
  }
};

export default updateProjectList;

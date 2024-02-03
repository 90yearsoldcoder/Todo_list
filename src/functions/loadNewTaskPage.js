import newTask_page from "../pages/createNewTask";

const load_newTask_page = () => {
  const content = document.querySelector("#content");
  const modal = document.querySelector("#modalForAll");
  modal.classList.add("show");

  const page = newTask_page();
  content.appendChild(page);
};

export default load_newTask_page;

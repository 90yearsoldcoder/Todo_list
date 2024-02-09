import taskChange from "../pages/createTaskChange";

const loadTaskChange = (thing, title, dueDate) => {
  const content = document.querySelector("#content");
  const modal = document.querySelector("#modalForAll");
  modal.classList.add("show");

  const page = taskChange(thing, title, dueDate);
  content.appendChild(page);
};

export default loadTaskChange;

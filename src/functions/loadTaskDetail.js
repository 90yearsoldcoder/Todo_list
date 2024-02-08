import createTaskDetail from "../pages/createTaskDetail";

const loadTaskDetail = (thing) => {
  //console.log("click detail");

  const content = document.querySelector("#content");
  const modal = document.querySelector("#modalForAll");
  modal.classList.add("show");

  const task_detail_container = createTaskDetail(thing);
  content.appendChild(task_detail_container);
};

export default loadTaskDetail;

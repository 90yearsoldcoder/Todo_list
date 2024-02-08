import taskDetail_html from "../html/task_detail.html";
import "../styles/taskDetail.css";
import Thing from "../modules/thing";
import { format } from "date-fns";
import closeTaskDetail from "../functions/closeTaskDetail";

const createTaskDetail = (thing) => {
  const detail_container = document.createElement("div");
  detail_container.classList.add("task_detail_container");
  detail_container.innerHTML = taskDetail_html;
  detail_container.id = "detail_container";

  const task_detail_close =
    detail_container.querySelector("#task_detail_close");
  task_detail_close.addEventListener("click", () => {
    closeTaskDetail();
  });

  const task_detail_title =
    detail_container.querySelector("#task_detail_title");
  task_detail_title.textContent = thing.title;

  const task_detail_project = detail_container.querySelector(
    "#task_detail_project"
  );
  task_detail_project.textContent = thing.project;

  const task_detail_priority = detail_container.querySelector(
    "#task_detail_priority"
  );
  task_detail_priority.textContent = thing.pp;

  const task_detail_duedate = detail_container.querySelector(
    "#task_detail_duedate"
  );
  task_detail_duedate.textContent = format(
    thing.dueDate,
    "MMMM do, yyyy; HH:mm"
  );

  const task_detail_detail = detail_container.querySelector(
    "#task_detail_detail"
  );
  task_detail_detail.textContent = thing.desc;

  return detail_container;
};

export default createTaskDetail;

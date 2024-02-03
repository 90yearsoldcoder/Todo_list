const close_newTask_page = () => {
  const content = document.querySelector("#content");
  const modal = document.querySelector("#modalForAll");
  modal.classList.remove("show");

  const newTask_page = document.querySelector("#newPage");
  content.removeChild(newTask_page);
};

export default close_newTask_page;

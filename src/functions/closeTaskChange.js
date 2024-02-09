const close_taskChange_page = () => {
  const content = document.querySelector("#content");
  const modal = document.querySelector("#modalForAll");
  modal.classList.remove("show");

  const taskChangePage = document.querySelector("#taskChangePage");
  content.removeChild(taskChangePage);
};

export default close_taskChange_page;

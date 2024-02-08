const closeTaskDetail = () => {
  const modal = document.querySelector("#modalForAll");
  modal.classList.toggle("show");

  const content = document.querySelector("#content");
  const detail_container = content.querySelector("#detail_container");
  content.removeChild(detail_container);
};

export default closeTaskDetail;

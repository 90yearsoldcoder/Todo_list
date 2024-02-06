import sidebar from "../pages/sidebar";

const loadSideBar = () => {
  const main_container = document.querySelector(".main");
  let sidebar_container = sidebar();
  let firstChild = main_container.firstChild;
  main_container.insertBefore(sidebar_container, firstChild);
};

export default loadSideBar;

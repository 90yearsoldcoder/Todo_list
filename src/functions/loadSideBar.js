import sidebar from "../pages/sidebar";

const loadSideBar = () => {
  const main_container = document.querySelector(".main");
  let sidebar_container = sidebar();
  main_container.appendChild(sidebar_container);
};

export default loadSideBar;

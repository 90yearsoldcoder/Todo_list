import createMainPanel from "../pages/createMainPanel";

const loadMainPanel = (todolist) => {
  const main_container = document.querySelector(".main");
  //remove previous mainpanel
  let mainPanel = main_container.querySelector("#mainPanel_container");
  if (mainPanel) main_container.removeChild(mainPanel);

  //add new mainpanel
  mainPanel = createMainPanel(todolist);
  main_container.appendChild(mainPanel);
};

export default loadMainPanel;

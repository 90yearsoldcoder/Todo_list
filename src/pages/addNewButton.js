import load_newTask_page from "../functions/loadNewTaskPage";
import "../styles/addNewButton.css";

const addNewButton = () => {
  const button = document.createElement("button");
  button.classList.add("addNewButton");
  button.innerText = "+";

  button.addEventListener("click", load_newTask_page);

  return button;
};

export default addNewButton;

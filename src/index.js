import "./styles/outline.css";
import StorageAPI from "../src/modules/storage";
import Thing from "../src/modules/thing";
import TodoList from "./modules/todolist";
import load_outline from "./functions/outline.js";
import load_newTask_page from "./functions/loadNewTaskPage.js";
import loadSideBar from "./functions/loadSideBar.js";

//load outline
load_outline();
//load_newTask_page();
loadSideBar();

//set the default sidebar page
let inbox = document.querySelector("#inbox");
inbox.click();

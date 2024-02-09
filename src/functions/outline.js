import "../styles/outline.css";

const load_outline = () => {
  const content = document.querySelector("#content");
  content.classList.add("content");

  const header = document.createElement("div");
  header.classList.add("header");
  content.appendChild(header);

  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.innerText = "Todo List";
  header.appendChild(logo);

  const main = document.createElement("div");
  main.classList.add("main");
  content.appendChild(main);

  const foot = document.createElement("div");
  foot.classList.add("foot");
  content.appendChild(foot);

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.id = "modalForAll";
  modal.classList.add("fade");
  content.appendChild(modal);
};

export default load_outline;

import "../styles/outline.css";

const load_outline = () => {
  const content = document.querySelector("#content");
  content.classList.add("content");

  const header = document.createElement("div");
  header.classList.add("header");
  content.appendChild(header);

  const main = document.createElement("div");
  main.classList.add("main");
  content.appendChild(main);

  const foot = document.createElement("div");
  foot.classList.add("foot");
  content.appendChild(foot);
};

export default load_outline;

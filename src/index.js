import "./styles/outline.css";
import StorageAPI from "../src/modules/storage";
import Thing from "../src/modules/thing";
import TodoList from "./modules/todolist";

let t = new Thing(
  "ProjectA",
  "title 1",
  "For test",
  new Date(2024, 2, 3),
  "High"
);
StorageAPI.saveThing(t);

t = new Thing("ProjectA", "title 2", "For test", new Date(2024, 0, 31), "High");
StorageAPI.saveThing(t);

let tm = new Thing(
  "ProjectA",
  "title 3",
  "For test",
  new Date(2024, 2, 28),
  "High"
);
StorageAPI.saveThing(tm);

t = new Thing(
  "ProjectB",
  "title 21",
  "For test",
  new Date(2024, 1, 31),
  "High"
);
StorageAPI.saveThing(t);

t = new Thing(
  "ProjectB",
  "title 11111",
  "For test",
  new Date(2024, 2, 3),
  "High"
);
StorageAPI.saveThing(t);

t = new Thing(
  "ProjectB",
  "title 211",
  "For test",
  new Date(2023, 1, 31),
  "High"
);
StorageAPI.saveThing(t);

t = new Thing("ProjectC", "title 1", "For test", new Date(2024, 10, 31), "Mid");
StorageAPI.saveThing(t);

let l = StorageAPI.retrieve_todolist_byProject("ProjectA");
console.log(l.list);

l = StorageAPI.retrieve_todolist_byDate(new Date(2024, 2, 3));
console.log(l.list);

StorageAPI.remove_project("ProjectA");
l = StorageAPI.retrieve_todolist_byProject("ProjectA");
console.log(l.list);

import { compareAsc } from "date-fns";

class TodoList {
  constructor() {
    this.list = [];
  }

  //todo list is a queue
  add(thing) {
    this.list.push(thing);
  }

  //sort the list
  sort() {
    this.list.sort((a, b) => compareAsc(a.dueDate, b.dueDate));
  }

  get list() {
    return this._list;
  }

  set list(l) {
    this._list = l;
  }
}

export default TodoList;

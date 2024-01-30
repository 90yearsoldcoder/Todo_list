import StorageAPI from "./storage";

class Thing {
  constructor(project, title, desc, dueDate, pp) {
    //console.log(StorageAPI.get_new_Tid());
    this.tid = StorageAPI.get_new_Tid();
    this.project = project;
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.pp = pp;
    this.done = false;
  }

  get tid() {
    return this._tid;
  }

  set tid(id) {
    this._tid = id;
  }

  get project() {
    return this._project;
  }

  set project(value) {
    this._project = value;
  }
}

export default Thing;

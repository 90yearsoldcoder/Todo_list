import Thing from "./thing";

class StorageAPI {
  static get_new_Tid() {
    if (!localStorage.getItem("tid")) {
      StorageAPI.save_Tid(-1);
    }
    return parseInt(localStorage.getItem("tid"), 10) + 1;
  }

  //save the tid, tid: num
  static save_Tid(tid) {
    localStorage.setItem("tid", tid);
  }

  //refresh latest tid number
  static refresh_Tid(tid) {
    this.get_new_Tid();
    let latest_tid = parseInt(localStorage.getItem("tid"), 10);
    if (latest_tid < tid) StorageAPI.save_Tid(tid);
  }

  static get_ProjectsList() {
    if (!localStorage.getItem("projects")) {
      localStorage.setItem("projects", "[]");
    }
    return JSON.parse(localStorage.getItem("projects"));
  }

  //add a new project into project list;
  static ProjectsList_push(project) {
    let projects_list = StorageAPI.get_ProjectsList();
    if (!projects_list.includes(project)) {
      projects_list.push(project);
      localStorage.setItem("projects", JSON.stringify(projects_list));
    }
  }

  //get a projecthinglist which is a list(instead of string)
  static get_projectThingList(project) {
    if (!localStorage.getItem(project)) {
      localStorage.setItem(project, "[]");
    }
    return JSON.parse(localStorage.getItem(project));
  }

  //add a thing's id into projectThingList
  static ProjectThingList_push(thing) {
    let project_thing_list = StorageAPI.get_projectThingList(thing.project);
    if (!project_thing_list.includes(thing.tid)) {
      project_thing_list.push(thing.tid);
      localStorage.setItem(thing.project, JSON.stringify(project_thing_list));
    }
  }

  //thing: Thing Class
  static saveThing(thing) {
    StorageAPI.refresh_Tid(thing.tid);
    StorageAPI.ProjectsList_push(thing.project);
    localStorage.setItem(thing.tid.toString(), JSON.stringify(thing));
  }
}

export default StorageAPI;

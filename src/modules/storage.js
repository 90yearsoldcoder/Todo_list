import Thing from "./thing";
import TodoList from "./todolist";

function areSameDate(date1, date2) {
  let d1 = new Date(date1.getTime());
  let d2 = new Date(date2.getTime());

  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);

  return d1.getTime() == d2.getTime();
}

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

  static ProjectList_rm(project) {
    let projects_list = StorageAPI.get_ProjectsList();
    if (projects_list.includes(project)) {
      projects_list = projects_list.filter((item) => item != project);
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

  //remove a thing from a projectThingList
  static ProjectThingList_rm(thing) {
    let project_thing_list = StorageAPI.get_projectThingList(thing.project);
    if (project_thing_list.includes(thing.tid)) {
      project_thing_list = project_thing_list.filter(
        (item) => item != thing.tid
      );
      localStorage.setItem(thing.project, JSON.stringify(project_thing_list));
    }
  }

  //thing: Thing Class
  static saveThing(thing) {
    StorageAPI.refresh_Tid(thing.tid);
    StorageAPI.ProjectsList_push(thing.project);
    StorageAPI.ProjectThingList_push(thing);
    localStorage.setItem(thing.tid.toString(), JSON.stringify(thing));
  }

  static get_idlist_byProject(project) {
    let id_list;
    if (localStorage.getItem(project))
      id_list = JSON.parse(localStorage.getItem(project));
    else id_list = [];

    return id_list;
  }

  static get_thing_byId(id) {
    let thing = Object.assign(
      new Thing(),
      JSON.parse(localStorage.getItem(id))
    );

    return thing;
  }

  static retrieve_todolist_byProject(project) {
    let todolist = new TodoList();
    let id_list = StorageAPI.get_idlist_byProject(project);

    for (let id of id_list) {
      let thing = StorageAPI.get_thing_byId(id);
      todolist.add(thing);
    }

    return todolist;
  }

  static retrieve_todolist_byDate(date) {
    let todolist = new TodoList();
    let project_list = StorageAPI.get_ProjectsList();

    for (let project of project_list) {
      let id_list = StorageAPI.get_idlist_byProject(project);

      for (let id of id_list) {
        let thing = StorageAPI.get_thing_byId(id);
        if (areSameDate(thing.dueDate, date)) todolist.add(thing);
      }
    }

    return todolist;
  }

  static retrieve_todolist_byDone() {
    let todolist = new TodoList();
    let project_list = StorageAPI.get_ProjectsList();

    for (let project of project_list) {
      let id_list = StorageAPI.get_idlist_byProject(project);

      for (let id of id_list) {
        let thing = StorageAPI.get_thing_byId(id);
        //console.log(thing.dueDate);
        //console.log(date);
        if (!thing.done) todolist.add(thing);
      }
    }

    return todolist;
  }

  //remove a thing from storage
  static remove_thing(thing) {
    StorageAPI.ProjectThingList_rm(thing);
    localStorage.removeItem(thing.tid);
  }

  //remove a project from storage
  static remove_project(project) {
    //step1: clear the things in that project
    let todolist = StorageAPI.retrieve_todolist_byProject(project).list;
    for (let thing of todolist) localStorage.removeItem(thing.tid);
    //step2: clear the project thing list
    localStorage.removeItem(project);
    //step3: remove the project from projectlist
    StorageAPI.ProjectList_rm(project);
  }

  static update_thing(thing) {
    //revise infor

    //save it
    StorageAPI.saveThing(thing);
  }
}

export default StorageAPI;

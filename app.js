import {ToDoInput} from './ToDoInput.js';
import {ToDoList} from './ToDoList.js';


class ToDoApp {
    constructor() {
        let toDoList = new ToDoList();
        new ToDoInput(toDoList);
    }
}

new ToDoApp();
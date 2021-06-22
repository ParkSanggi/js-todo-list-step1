import {ToDoItem} from './ToDoItem.js';

export class ToDoList {
    constructor() {
        this.itemList = [];
        this.toDoList = document.getElementById("todo-list")

        this.drawToDoList = this.drawToDoList.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    }

    addItem(title) {
        this.itemList.push(
            new ToDoItem(title, this.itemList.length + 1));
    }

    drawToDoList() {
        while(this.toDoList.firstChild) {
            this.toDoList.removeChild(this.toDoList.firstChild);
        } 

        this.itemList.forEach(
            item => this.toDoList.appendChild(item.getElement())
        )
    }
}
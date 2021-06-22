
export class ToDoInput {
    constructor(toDoList) {
        this.input = document.getElementById("new-todo-title");
        this.setEventListener(toDoList);
    }

    setEventListener({addItem, drawToDoList}) {
        this.input.addEventListener("keypress", (e) => {
            if (e.key == 'Enter') {
              addItem(this.input.value);
              drawToDoList();
              this.input.value = '';
            }
          });
    }
}


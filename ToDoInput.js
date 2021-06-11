
export class ToDoInput {
    constructor() {
        this.input = document.getElementById("new-todo-title");
        this.setEventListener();
    }

    setEventListener() {
        this.input.addEventListener("keypress", (e) => {
            if (e.key == 'Enter') {
              alert(this.input.value);
              this.input.value = '';
            }
          });
    }
}


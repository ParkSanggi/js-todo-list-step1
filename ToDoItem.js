

export class ToDoItem {
    constructor(title, id) {
        this.title = title;
        this.id = id;
        this.isCompleted = false;
    }

    getElement() {
        let li = document.createElement("li");
        let div = document.createElement("div");
        let divLable = document.createElement("label");
        let checkbox = document.createElement("input");
        let destroyButton = document.createElement("button");
        let edit = document.createElement("input");
        
        li.setAttribute("id", "listItem" + this.id);

        div.setAttribute("class", "view");

        divLable.setAttribute("class", "label");
        divLable.appendChild(document.createTextNode(this.title));

        checkbox.setAttribute("class", "toggle");
        checkbox.setAttribute("type", "checkbox");

        destroyButton.setAttribute("class", "destroy");
        destroyButton.setAttribute("data-action", "removeItem")

        edit.setAttribute("class", "edit");
        edit.setAttribute("value", this.title);
        
        div.appendChild(checkbox);
        div.appendChild(divLable);
        div.appendChild(destroyButton);
        li.appendChild(div);
        li.appendChild(edit);

        return li;
    }
}
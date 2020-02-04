let $ = document;

let  button = $.querySelector('input[type=submit]')
let form = $.querySelector('form')
let todos = $.querySelector('#todos')
let preview = $.querySelector('#preview')
let todoText = $.querySelector("#todoText");


form.onsubmit = function (event)  {
    
    event.preventDefault();

    if (todoText.value === "")
    {
        alert('Text is Empty');
         todoText.focus();
        return;
    }

    let todo = document.createElement("li");
    todo.appendChild(document.createTextNode(todoText.value))
    todos.appendChild(todo)
    todoText.value = ""
    preview.innerHTML = ""
    todoText.focus();
} 

onkeyup = () =>{
     preview.innerHTML = todoText.value;
}



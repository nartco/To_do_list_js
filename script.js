var todo = [
    {
        text: 'My first todo item',
        done: false
    },
    {
        text: 'My first todo item',
        done: false
    },
    {
        text: 'My first todo item',
        done: true
    }
];

var ul = document.getElementById('todoList');

function createToDoItem(text, done) {
    let item = document.createElement('li');
    item.className = "list-group-item";
    let content = document.createTextNode(text);
    item.appendChild(content);
    if(done)
        item.style.textDecoration = "line-through";
    ul.appendChild(item);
}

function displayTodoList(todo){
    ul.innerHTML = '';
    for (let i = 0; i < todo.length; i++) {
       createToDoItem(todo[i].text, todo[i].done)
        
    }
}



displayTodoList(todo);

let x = document.querySelector("li");
function onDiv(){
    alert('connard');
}
x.addEventListener('mouseenter', onDiv);
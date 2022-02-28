// task from input
function get_todos() {
    // creates arrray from input
    var todos = new Array;
    // pulls from loval memory
    var todos_str = localStorage.getItem('todo');
    // if todos is !null then communicate with web browser to make a JavaScript object.
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
// adds the inputed task
function add() {
    // takes inputed taskrd andrdstes a vvarongbe of it
    var task = document.getElementById('task').value;

    var todos = get_todos();
    // asddds a newds thaak to end of asdrray
    todos.push(task);
    // cconrects inputs to JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

// keeps the task displayed on the screen
function show() {
    // sets the task as a variable
    var todos = get_todos();

    // each task becomes an unordered list
    var html = '<ul>';
    // displays a task to the list in order
    for (var i = 0; i < todos.length; i++) {
        // displays task as a list with a button
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    }
    document.getElementById('todos').innerHTML = html;

    // display removed item
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}

// remove a todo item from array
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    // this looks in the show() how 
    show();

    return false;
}

// displays input when add Item is clicked
document.getElementById('add').addEventListener('click', add);
// keeps inputs displayed
show();
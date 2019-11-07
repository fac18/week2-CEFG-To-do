// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo', done: false},
    { id: -2, description: 'second todo', done: false},
    { id: -1, description: 'third todo', done:false},
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener

    // add span holding description
    var todoText = document.createElement('span');
      todoText.textContent = todo.description;
      todoNode.appendChild(todoText);

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.innerText = "✘";
    deleteButtonNode.setAttribute("style", "background-color: red;");
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markTodoButtonNode = document.createElement("button");
    markTodoButtonNode.setAttribute("class", "mark-button");
    if (todo.done == false) {
      markTodoButtonNode.setAttribute("style", "background-color: #003366;");
      todoNode.setAttribute('style', 'opacity: 1;');
    }
    if (todo.done == true) {
      markTodoButtonNode.innerText = "✔";
      markTodoButtonNode.setAttribute("style", "background-color: green;");
      todoNode.setAttribute('style', 'opacity: 0.5;');
      todoText.setAttribute("style", "text-decoration: line-through;")
    }
    markTodoButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(markTodoButtonNode);
    // markButtonNode.addEventListener('click', function(event) {
    //   var newState = todoFunctions.markTodo(state, todo.id);
    //   update(newState);
    //   if (todo.done == false) {
    //     todoNode.classList.add("completed")
    //   } else {
    //     todoNode.classList.remove("completed")
    //   }
    // });
    // todoNode.appendChild(markButtonNode);

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
       event.preventDefault();
          var description = event.target.querySelector("input").value;

      //var description = '?' // event.target ....

      // hint: todoFunctions.addTodo
      var newState = todoFunctions.addTodo(state, description); // ?? change this!
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();

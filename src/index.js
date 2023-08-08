document.addEventListener("DOMContentLoaded", () => {
  // Get references to the form and the todoList element
  const todoForm = document.getElementById('create-task-form');
  const todoList = document.getElementById('tasks');

  // Event listener to handle the form submission
  todoForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the value from the input field
    const newTodoInput = document.getElementById('new-task-description');
    const newTodoText = newTodoInput.value.trim();

    // Add the new todo item to the todoList (if it's not empty)
    if (newTodoText !== '') {
      // Create a new list item
      const newTodoItem = document.createElement('li');
      newTodoItem.textContent = newTodoText;

      //Create a delete button for the new item
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Done';
      deleteButton.addEventListener('click', function() {
        //remove the todo item when the delete button is clicked
        newTodoItem.remove();
      })
      // append the delete button to the new item
      newTodoItem.appendChild(deleteButton);

      // Add the new item to the todoList
      todoList.appendChild(newTodoItem);

      // Clear the input field
      newTodoInput.value = '';
    }
  });
});

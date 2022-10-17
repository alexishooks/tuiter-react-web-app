import TodoList from "../todos/TodoList.js";
function mainToDo() {
  $('#wd-todo').append(`
   <div class="container">
       <h1>Todo example</h1>
    ${TodoList()}
   </div>
`);
}
$(mainToDo);


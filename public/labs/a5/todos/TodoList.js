import TodoItem from "../todos/TodoItem.js";
import todos from "../todos/todos.js";
const TodoList = () => {
  return (`
  <ul>
  
  ${todos.map(todo => {
    return(TodoItem(todo));
  }).join('')
  }
</ul>
  `);
}
export default TodoList;
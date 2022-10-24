import todos from "./todos.json";
import TodoItem2 from "./todo-item";
const TodoList = () => {
  return(
      <>
        <h3>Todo List</h3>
        <ul>
          {
            todos.map(todo => {
              return(<TodoItem2 todo={todo}/>);
            })
          }
        </ul>
      </>
  );
}
export default TodoList;
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";

import TodoItems from "./components/TodoItems";

function App() {

  const todoItems = [
    {
      name: 'buy milk',
      dueDate: '4/10/2025',
    },
    {
      name: 'go to collage',
      dueDate: '4/10/2025',
    },
    {
      name: 'codecraft-sanju',
      dueDate: '4/10/2025',
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
     
    </center>
  );
}
export default App;

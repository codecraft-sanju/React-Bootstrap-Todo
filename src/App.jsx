import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem todoDate="4/02/2024" todoName="buy milk"/>
        <TodoItem todoDate="4/02/2024" todoName="Go to collage"/>

      </div>
    </center>
  );
}
export default App;

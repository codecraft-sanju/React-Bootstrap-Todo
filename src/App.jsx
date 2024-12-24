import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import './App.css';
import TodoItems from './components/TodoItems';
import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    if (!itemName || !itemDueDate) {
      alert('Please enter a valid todo and due date.');
      return;
    }
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (indexToDelete) => {
    const filteredTodos = todoItems.filter(
      (_, index) => index !== indexToDelete,
    );
    setTodoItems(filteredTodos);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteItem={handleDeleteItem} />
    </center>
  );
}

export default App;

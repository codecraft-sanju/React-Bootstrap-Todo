import TodoItem from './TodoItem';
import styles from './TodoItems.module.css';

const TodoItems = ({ todoItems, onDeleteItem }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoDate={item.dueDate}
          todoName={item.name}
          onDelete={() => onDeleteItem(index)}
        />
      ))}
    </div>
  );
};

export default TodoItems;

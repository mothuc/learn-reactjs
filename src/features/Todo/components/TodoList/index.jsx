import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  const handleClick = (todo, id) => {
    if (!onTodoClick) return;

    onTodoClick(todo, id);
  };
  return (
    <ul className="todo-list">
      {todoList.map((todo, id) => (
        <li
          key={todo.id}
          className={classNames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onClick={() => handleClick(todo, id)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

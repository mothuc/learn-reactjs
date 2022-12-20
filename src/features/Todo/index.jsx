import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "completed",
    },
  ];
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState("all");
  const handleTodoClick = (todo, id) => {
    //Clone current array to the new one
    const newTodoList = [...todoList];
    console.log(todo, id);
    //Toggle state
    newTodoList[id] = {
      ...newTodoList[id],
      status: newTodoList[id].status === "new" ? "completed" : "new",
    };

    //update state
    setTodoList(newTodoList);
  };
  const handleShowAll = () => {
    setFilterStatus("all");
  };

  const handleShowCompleted = () => {
    setFilterStatus("completed");
  };

  const handleShowNew = () => {
    setFilterStatus("new");
  };

  const renderTodolist = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderTodolist} onTodoClick={handleTodoClick} />
      <button onClick={handleShowAll}>Show All</button>
      <button onClick={handleShowCompleted}>Show Completed</button>
      <button onClick={handleShowNew}>Show New</button>
    </div>
  );
}

export default TodoFeature;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { availableColors, capitalize } from "../filters/colors";

const selectTodoByID = (state, todoID) => {
  return state.todos.find((todo) => todo.id === todoID);
};

const TodoListItem = ({ id }) => {
  const todo = useSelector((state) => selectTodoByID(id));
  const dispatch = useDispatch();
  const { text, completed, color } = todo;

  const HandleCompletedChange = () => {
    dispatch({ type: "todos/todoToggled", payload: todo.id });
  };

  return (
    <li>
      <div className="view">{HandleCompletedChange}</div>
    </li>
  );
};

export default TodoListItem;

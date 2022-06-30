/*
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { availableColors, capitalize } from "../filters/colors";

const selectTodoByID = (state, todoId) => {
  return state.todos.find((todo) => todo.id === todoId);
};

const TodoListItem = ({ id }) => {
  const todo = useSelector((state) => selectTodoByID(state, id));
  const dispatch = useDispatch();
  const { text, completed, color } = todo;

  const handleCompletedChanged = () => {
    dispatch({ type: "todos/todoToggled", payload: todo.id });
  };
  const handleColorChanged = (e) => {
    const color = e.target.value;
    dispatch({
      type: "todos/colorSelected",
      payload: { todoId: todo.id, color }
    });
  };

  const onDelete = () => {
    dispatch({ type: "todos/todoDeleted", payload: todo.id });
  };

  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ));

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            value={color}
            style={{ color }}
            onChange={handleColorChanged}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={onDelete}></button>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
*/
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { availableColors, capitalize } from "../filters/colors";

const selectTodoById = (state, todoId) => {
  return state.todos.find((todo) => todo.id === todoId);
};

// Destructure `props.id`, since we just need the ID value
const TodoListItem = ({ id }) => {
  // Call our `selectTodoById` with the state _and_ the ID value
  const todo = useSelector((state) => selectTodoById(state, id));
  const { text, completed, color } = todo;

  const dispatch = useDispatch();

  const handleCompletedChanged = () => {
    dispatch({ type: "todos/todoToggled", payload: todo.id });
  };

  const handleColorChanged = (e) => {
    const color = e.target.value;
    dispatch({
      type: "todos/colorSelected",
      payload: { todoId: todo.id, color }
    });
  };

  const onDelete = () => {
    dispatch({ type: "todos/todoDeleted", payload: todo.id });
  };

  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ));

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            value={color}
            style={{ color }}
            onChange={handleColorChanged}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={onDelete}></button>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;

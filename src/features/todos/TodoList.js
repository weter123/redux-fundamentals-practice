import React from "React";
import { stateSelector } from "react-redux";
import TodoListItem from "./todoListItem";
const selectTodos = (state) => state.todos;

const TodoList = () => {
  const todos = stateSelector(selectTodos);
  const renderedListItems = todos.map((todo) => {
    return <TodoListItem key={todo.id} todo={todo} />;
  });

  return <ul className="todoList">{renderedListItems}</ul>;
};
export default TodoList;

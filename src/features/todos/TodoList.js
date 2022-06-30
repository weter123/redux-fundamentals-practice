import React from "React";
import { stateSelector } from "react-redux";
import TodoListItem from "./todoListItem";

const selectTodos = (state) => state.todos.map((todo) => todo.id);

const TodoList = () => {
  const todos = stateSelector(selectTodos);
  const renderedListItems = todos.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId} />;
  });

  return <ul className="todoList">{renderedListItems}</ul>;
};
export default TodoList;

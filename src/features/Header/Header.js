import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Header() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const onHandleKeyDown = (e) => {
    const trimmedText = text.trim();
    if (trimmedText && e.which === 13) {
      dispatch({ type: "todos/todoAdded", payload: trimmedText });
      setText("");
    }
  };
  return (
    <div>
      <input
        name="new_todo"
        value={text}
        placeholder="what needs to be done?"
        onChange={handleChange}
        onKeyDown={onHandleKeyDown}
      />
    </div>
  );
}

export default Header;

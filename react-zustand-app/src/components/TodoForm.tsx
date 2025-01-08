import React, { useState } from "react";
import { useTodoStore } from "../store/store";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodoStore();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.trim().length) {
      return;
    }
    addTodo(todo);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter a task name"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
}

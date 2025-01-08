import { useEffect } from "react";
import { useTodoStore } from "../store/store";

function TodoItem() {
  const { todos, deleteTodo, fetchTodo, isLoading, error } = useTodoStore();

  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <ul style={{ padding: 0 }}>
          {todos.map((item) => (
            <li
              key={item.id}
              style={{ listStyle: "none", marginBottom: "10px" }}
            >
              <span>{item.task}</span>
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  deleteTodo(item.id);
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoItem;

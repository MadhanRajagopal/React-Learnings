import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Todos with Zustand State Management</h2>
      <TodoForm />
      <hr style={{ marginTop: "30px" }} />
      <TodoItem />
    </div>
  );
}

export default App;

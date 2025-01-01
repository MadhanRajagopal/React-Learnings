import "./App.css";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./slices/movieSlice";
import { AppDispatch } from "./store/store";
function App() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <MovieForm />
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => dispatch(fetchMovies())}>Fetch API </button>
      </div>
      <hr />
      <MovieList />
    </div>
  );
}

export default App;

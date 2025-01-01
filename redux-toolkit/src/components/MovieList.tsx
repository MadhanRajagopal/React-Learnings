import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { deleteMovie } from "../slices/movieSlice";
export default function MovieList() {
  const { movies, error, loading } = useSelector(
    (state: RootState) => state.movieData
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h2>MovieList</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {movies.map((data) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <h4>{data.name}</h4>
          <button onClick={() => dispatch(deleteMovie(data.id))}>X</button>
        </div>
      ))}
    </div>
  );
}

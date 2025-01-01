import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../slices/movieSlice";
export default function MovieForm() {
  const [movieName, setMovieName] = useState("");
  const dispatch = useDispatch();
  const handlesubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (movieName.trim() === "") {
      setMovieName("");
      return;
    }
    dispatch(addMovie(movieName));
    setMovieName("");
  };
  return (
    <div>
      <h2>MovieForm</h2>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="enter a movie name"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

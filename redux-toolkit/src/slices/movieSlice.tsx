import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie, MovieState } from "../types/types";

const initialState: MovieState = {
  movies: [],
  loading: false,
  error: "",
};
/* Async Operation  */
export const fetchMovies = createAsyncThunk<Movie[], void>(
  "movies/fetchMovies",
  async () => {
    const response: Movie[] = await new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "Lucky Bhaskar" },
          { id: 2, name: "Lubber pandhu" },
        ]);
      }, 3000);
    });
    return response;
  }
);
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<string>) => {
      const id =
        state.movies.length === 0
          ? 1
          : state.movies[state.movies.length - 1].id + 1;

      state.movies.push({
        id,
        name: action.payload,
      });

      console.log(state);
    },

    deleteMovie: (state, action: PayloadAction<number>) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
  /* Explicitly define the payload type in the extraReducers. */
  extraReducers: (builder) => {
    builder.addCase(
      fetchMovies.fulfilled,
      (state, action: PayloadAction<Movie[]>) => {
        state.movies = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.error = "Failed during fetching movies";
      state.loading = false;
    });
  },
});

export const { addMovie, deleteMovie } = movieSlice.actions;
export default movieSlice.reducer;

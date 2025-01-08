# React Redux Toolkit Project

This project is a simple React application that uses Redux Toolkit for state management.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [FolderStructure](#FolderStructure)
- [Installation](#installation)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

## Prerequisites

Make sure you have the following software installed on your machine:

- Node.js
- npm or yarn

## FolderStructure

redux-toolkit/
├── public/
├── src/
│ ├── components/
│ │ └── MovieForm.tsx
│ │ └── MovieList.tsx
│ ├── slices/
│ │ └── movieSlice.ts
│ ├── store/
│ │ └── store.ts
│ ├── types/
│ │ └── types.ts
│ ├── App.tsx
│ ├── index.tsx
├── package.json

## Installation

1. Clone the repository:

   ```sh
   cd redux-toolkit
   ```

2. Navigate to the Project Directory:

   ```
    https://github.com/MadhanRajagopal/React-Learnings/tree/main/redux-toolkit.git
   ```

3. Install Dependencies:

```sh
npm install
# or
yarn install
```

4. Running the Development Server

```sh
npm start
# or
yarn start
```

**React Redux-toolkit**

It provides a set of tools to simplify common use cases, reduce boilerplate, and create more maintainable code

**Install Redux Toolkit and React Redux:**

```sh
npm install @reduxjs/toolkit react-redux
```

**Configure the Store**

```typescript
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movieSlice";

const store = configureStore({
  reducer: {
    movieData: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
```

**Define State and Actions using createSlice**

```typescript
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieState } from "../types/types";

const initialState: MovieState = {
  movies: [
    { id: 1, name: "Lucky Bhaskar" },
    { id: 2, name: "Lubber pandhu" },
  ],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<string>) => {...},
    deleteMovie: (state, action: PayloadAction<number>) => {...}
  },
});

export const { addMovie, deleteMovie } = movieSlice.actions;
export default movieSlice.reducer;
```

**Provide Store**

```typescript
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store"; // Adjust the path as needed
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

**Uses in Component**

```typescript
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { addMovie, deleteMovie } from './slices/movieSlice';

const dispatch = useDispatch();
const movies = useSelector((state: RootState) => state.movieData.movies);  // used to retrieve state value
dispatch(addMovie(...));  // used to update state using dispatch
```

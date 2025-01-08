# React Zustand Project

This project is a simple React application that uses React Zustand for state management.

## Prerequisites

Make sure you have the following software installed on your machine:

- Node.js
- npm or yarn

## Install Dependencies:

```sh
npm install
# or
yarn install
```

## Running the Development Server

```sh
npm start
# or
yarn start
```

** React Zustand **
Zustand is a lightweight state management library for React applications.

** Why zustand over context? **

Less boilerplate
Renders components only on changes
Centralized, action-based state management

** Store**

- set : used to update state
- get : Used to retreive state

```js
export const useTodoStore =
  create <
  TodoState >
  ((set) => {
    return {
      todos: [], // initialize state
      addTodo: (task) =>
        set((state) => {
          return {
            todos: [
              ...state.todos,
              {
                id: Date.now().toString(),
                task,
                createdAt: new Date().toISOString(),
              },
            ],
          };
        }),

      deleteTodo: (id) =>
        set((state) => {
          return { todos: state.todos.filter((todo) => todo.id !== id) };
        }),
    };
  });
```

** Enable DevTools **

```js
export const useTodoStore = create<TodoState>()(
  devtools(
  (set,get)=>{...}
  )
);

```

** Persist State Data **

- It retain state values even on reload or refresh browser
- It allows us to choose which type of storage to persist data using localstoarage or sessionstorage

```js
export const useTodoStore = create<TodoState>()(
  persist(
   (set,get)=>{...},
  { name: "data-localstorage" }
  )
);

```

/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface Todo {
  id: string;
  task: string;
  createdAt: string;
}

interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
  addTodo: (task: string) => void;
  deleteTodo: (id: string) => void;
  fetchTodo: () => Promise<void>;
}

export const useTodoStore = create<TodoState>()(
  devtools(
    persist(
      (set, get) => {
        return {
          todos: [],
          isLoading: false,
          error: null,
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

          fetchTodo: async () => {
            try {
              const currentTods = get().todos;
              if (currentTods.length > 0) {
                set({ isLoading: false });
                return;
              }
              set({ isLoading: true });
              const mockData: Todo[] = [
                {
                  id: "34567876",
                  task: "mockdata1",
                  createdAt: new Date().toISOString(),
                },
                {
                  id: "345678976",
                  task: "mockdata2",
                  createdAt: new Date().toISOString(),
                },
              ];
              await new Promise((reslove) => setTimeout(reslove, 1000));
              set({
                todos: mockData,
                isLoading: false,
              });
            } catch (error) {
              set({ error: "Failed to fetch todos", isLoading: false });
            }
          },
        };
      },
      { name: "todos-localstorage" }
    )
  )
);

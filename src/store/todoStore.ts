import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { todo } from './modal';

type TodoState = {
  todos: todo[];
  addTodo: (todo: todo) => void;
  removeTodo: (id: any) => void;
};

export const useTodoStore = create<TodoState>()(
  persist(
    set => ({
      todos: [],
      addTodo: todo => set(state => ({ todos: [...state.todos, todo] })),
      removeTodo: id =>
        set(state => ({
          todos: state.todos.filter(todo => todo.id !== id),
        })),
    }),
    {
      name: 'todo-storage', // unique name for the storage
    },
  ),
);

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
      storage: {
        getItem: async name => {
          const item = await AsyncStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: async (name, value) => {
          await AsyncStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: async name => {
          await AsyncStorage.removeItem(name);
        },
      },
    },
  ),
);

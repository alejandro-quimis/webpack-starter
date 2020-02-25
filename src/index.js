import { crearTodoHtml } from './js/componentes.js';
import './styles.css';
import { Todo, TodoList } from './models';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));
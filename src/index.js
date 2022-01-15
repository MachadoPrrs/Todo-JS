import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);
//---------------
// const newTodo = new Todo('Learn JavaScript');
todoList.todos[0].imprimirClase();
// newTodo.imprimirClase();
console.log(todoList.todos);

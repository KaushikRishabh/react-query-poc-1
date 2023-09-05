import { Todo } from "../entities/Todo";

const todos = [
  {
    id: 1,
    title: "Learn HTML",
    completed: false
  },
  {
    id: 2,
    title: "Learn CSS",
    completed: false
  },
  {
    id: 3,
    title: "Learn JS",
    completed: false
  },
  {
    id: 4,
    title: "Learn React",
    completed: true
  },
  {
    id: 5,
    title: "Learn Next.js",
    completed: false
  }
];

//mock function to fetch todo from db
export const fetchTodos = async (query = ""): Promise<Todo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("fetched todos");
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  );

  return [...filteredTodos];
};

//mock function to add a todo from db
export const addTodo = async (todo: Pick<Todo, "title">): Promise<Todo> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const newTodo = {
    id: todos.length + 1,
    title: todo.title,
    completed: false
  };
  todos.push(newTodo);
  return newTodo;
};

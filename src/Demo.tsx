import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addTodo, fetchTodos } from "./api";
import TodoCard from "./components/TodoCard";

export default function Demo() {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ["todos"]
  });
  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    }
  });
  if (isLoading) {
    return <div> is loading...</div>;
  }
  async function handleAddTodo() {
    try {
      await addTodoMutation({ title });
      setTitle("");
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {todos?.map((todo) => {
        return <TodoCard key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

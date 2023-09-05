import { useState } from "react";

export default function TodoCard({ todo }) {
  const [isChecked, setIsChecked] = useState(todo.completed);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      {todo.title}
      <input type="checkbox" checked={isChecked} onChange={handleOnChange} />
    </div>
  );
}

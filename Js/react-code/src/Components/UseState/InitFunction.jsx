import { useState } from "react";

function createInitialTodos() {
  const intialTodos = [];
  for (let i = 0; i < 20; i++) {
    intialTodos.push({ id: i, text: `item ${i + 1}` });
  }
  return intialTodos;
}
const InitFunction = () => {
  // Although the result of createInitialTodos() is only used for the initial render, you’re still calling this function on every render. This can be wasteful if it’s creating large arrays or performing expensive calculations.
  const [text, settext] = useState("");
  const [todos, settodos] = useState(createInitialTodos);
  return (
    <div>
      <input
        value={text}
        type="text"
        onChange={(e) => settext(e.target.value)}
      />
      <button
        onClick={() => {
          settext("");
          settodos([
            ...todos,
            { id: todos.length, text: `${text} ${todos.length + 1}` },
          ]);
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default InitFunction;

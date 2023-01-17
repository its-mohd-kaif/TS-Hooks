import React, { useCallback, useState } from "react";
// Type Define
type todo = {
  id: number;
  input: string;
}[];
function Todo() {
  // UseState For Getting Input From User
  const [input, setInput] = useState<string | "">("");
  //   Todo State For Display Todo List
  const [todo, setTodo] = useState<todo | []>([]);
  //   Input Function
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  //   Add Todo
  const addTodo = useCallback(() => {
    if (input === "") {
      alert("Blank Field Can Not Be Added");
      document.getElementById("input")?.focus();
    } else {
      let obj = {
        id: Math.random() * 1000,
        input: input,
      };
      setTodo([...todo, obj]);
      setInput("");
    }
  }, [todo, input]);
  return (
    <div className="todo">
      <center>
        <h1>Todo</h1>
        <div>
          <input
            autoFocus
            value={input}
            id="input"
            onChange={inputHandler}
            className="input"
            placeholder="Whats Your Task Today..."
          />
          <button onClick={addTodo} className="input__btn">
            ADD
          </button>
        </div>
        <br></br>
        {todo.length !== 0 ? (
          <ol>
            {todo.map((val) => (
              <>
                <li>{val.input}</li>
                <br></br>
              </>
            ))}
          </ol>
        ) : null}
      </center>
    </div>
  );
}

export default Todo;

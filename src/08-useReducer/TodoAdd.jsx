import { useState } from "react";


export const TodoAdd = ({onNewTodo}) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
      };

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <=1) return;

        const todo = {
            id: new Date().getTime(),
            description: inputValue.trim(),
            done: false,
          };
          onNewTodo(todo);
          setInputValue("");
      };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        value={inputValue}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};

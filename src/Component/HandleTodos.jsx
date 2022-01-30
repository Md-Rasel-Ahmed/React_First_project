import { useState } from "react";
import Todo from "./Todos";
function HandleTodos() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  //   Input value tracking
  const handleChange = (e) => {
    setInputVal(e);
  };
  //   Set the input valu in the todos array
  const addTodo = (title) => {
    if (!inputVal) {
      alert("Please Input a Valid Name");
    } else {
      const newTodo = {
        id: Date.now(),
        title: title,
      };
      setTodos([newTodo, ...todos]);
    }
  };
  // Delete todo from todo list
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(filteredTodos);
  };
  //   Todo edit button click
  const editBtn = (item) => {
    const editFilter = todos.filter((title) => {
      return title.id !== item.id;
    });
    setInputVal(item.title);
    setTodos(editFilter);
  };

  return (
    <div>
      <Todo
        value={inputVal}
        handleChange={handleChange}
        addTodo={() => {
          addTodo(inputVal.toUpperCase());
          setInputVal("");
        }}
        todos={todos}
        deleteTodo={deleteTodo}
        editBtn={editBtn}
        inputVal={inputVal}
      />
    </div>
  );
}
export default HandleTodos;

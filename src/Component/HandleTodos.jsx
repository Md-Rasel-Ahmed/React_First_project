import { useState } from "react";
import Todo from "./Todos";
import Absent from "./Absent";
import Present from "./Present";
function HandleTodos() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  const [absent, setAbsent] = useState([]);
  const [present, setPresent] = useState([]);
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
  // Absent button click
  const absentBtn = (item) => {
    const absentFitler = todos.filter((absent) => {
      return absent.id !== item.id;
    });

    setTodos(absentFitler);
    setAbsent([...absent, item.title]);
  };

  // present button click
  const presentBtn = (item) => {
    const presentFilter = todos.filter((present) => {
      return present.id !== item.id;
    });

    setTodos(presentFilter);
    setPresent([...present, item.title]);
  };
  // const presentBtnClick = (item) => {
  //   // setPresent(absent);
  //   let obj = {
  //     item: item,
  //     id: Date.now(),
  //   };
  //   setAbsent([obj, ...absent]);
  //   console.log(absent);
  // };

  return (
    <div>
      <div className="main">
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
          absentBtn={absentBtn}
          presentBtn={presentBtn}
        />
        <Absent
          className="absent"
          absent={absent}
          // presentBtnClick={() => {
          //   presentBtnClick(absent);
          // }}
        />
        <Present className="present" present={present} />
      </div>
    </div>
  );
}
export default HandleTodos;

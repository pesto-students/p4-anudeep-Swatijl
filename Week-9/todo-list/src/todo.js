import React, { useState } from "react";
import TodoList from "./todo-list";
import {v4} from "uuid";

function Todo() {
  const [todo, setTodo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [hover, setHover] = useState(false);

  const addTask = (val) => {
    if (val) {
      setToDoList((prevState) => [
        ...prevState,
        {
          id: v4(),
          task: val,
          is_completed: false,
        },
      ]);
      setTodo("");
    }
  };

  const markCompleted = (id) => {
    toDoList.map(
      (element) => element.id === id && (element.is_completed = !element.is_completed)
    );
    setToDoList([...toDoList], toDoList);
  };

  const deleteItem = (id) => {
    let index = toDoList.findIndex((list) => list.id === id);
    toDoList.splice(index, 1);
    setToDoList([...toDoList], toDoList);
  };

  const btnColor = {
    color: "white",
    cursor: "pointer",
    border: "none",
    borderRadius: "10px",
    padding: "10px",
    textTransform: 'Kuppercase',
    fontWeight: 'bold',
    width: '10%'
  };

  const inputField = {
    width: '90%',
    padding: '10px',
    borderRadius: '10px',
    margin: '10px'
  }

  return (
    <>
      <div className="center-all">
        <input
          type="text"
          value={todo}
          style={inputField}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a note..."
        />
        <input
          type="submit"
          onClick={() => addTask(todo)}
          value="Add"
          style={{...btnColor, backgroundColor: hover ? 'blue': 'darkblue'}}
          onMouseOver={()=>{setHover(true)}}
          onMouseOut={()=>{setHover(false)}}
        />
      </div>
      <TodoList
        toDoList={toDoList}
        markCompleted={markCompleted}
        deleteItem={deleteItem}
      />
    </>
  );
}

export default Todo;

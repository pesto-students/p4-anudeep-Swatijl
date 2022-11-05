import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";

function TodoList({ toDoList, markCompleted, deleteItem }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const deleteIcon = {
    cursor: "pointer",
    color:'darkblue'
  };
  return (
    <div>
      {toDoList.map((todo) => {
        return (
          <div className="center-all" style={{ textDecoration: todo.is_completed === true ? "line-through" : "none"}} key={todo.id}>
            <div className="center-all">
              <Checkbox {...label} onClick={() => markCompleted(todo.id)} />
              <span>{todo.task}</span>
            </div>
            <DeleteIcon
              style={deleteIcon}
              onClick={() => deleteItem(todo.id)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;

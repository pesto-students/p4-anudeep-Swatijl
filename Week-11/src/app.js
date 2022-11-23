import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { isLightOn } = useSelector((state) => state);
  const dispatch = useDispatch();

  const flipLight = () => {
    console.log("jjjj", isLightOn);
    return {
      type: "FLIP_LIGHT"
    };
  };

  const lightedness = isLightOn ? "lit" : "dark";
  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={() => dispatch(flipLight())}>flip</button>
    </div>
  );
}

export default App;

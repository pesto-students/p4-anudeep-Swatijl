import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  isLightOn: false
};
function lightReducer(state = initialState, action) {
  if (action.type === "FLIP_LIGHT") {
    return {
      ...state,
      isLightOn: !state.isLightOn
    };
  }
  return state;
}
const store = createStore(lightReducer, applyMiddleware(thunk));

export default store;

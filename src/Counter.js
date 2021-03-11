
import "./App.css";
import { useDispatch } from "react-redux";
import { inc, dec } from "./Redux/Action/action";
import { shallowEqual, useSelector } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state, shallowEqual);
  console.log(value);
  return (
    <div className="App">
      <label> Value:{value.counter} </label>
      <br />
      <button type="button" onClick={() => dispatch(inc())}>+</button>
      <button type="button" onClick={() => dispatch(dec())}>--</button>
    </div>
  );
}

export default Counter;

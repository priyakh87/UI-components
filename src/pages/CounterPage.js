import { useReducer } from "react";
import Button from "../components/Button";
// import useCounter from "../hooks/use-counter";
import {
  INCREMENT,
  DECREMENT,
  INPUT_CHANGE,
  VALUE_TO_ADD,
} from "./actionTypes";

//reducer function
function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INPUT_CHANGE:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case VALUE_TO_ADD:
      return {
        ...state,
        count: action.payload,
        valueToAdd: 0,
      };

    default:
      return state;
  }
}

export default function CounterPage({ initialValue }) {
  // const [counter, setCounter] = useState(initialValue);
  // const [valueToAdd, setvalueToAdd] = useState(0);

  const [state, dispacth] = useReducer(reducer, {
    count: initialValue,
    valueToAdd: 0,
  });
  console.log(state, "ddd");

  const handleInputChange = (event) => {
    // setvalueToAdd(event.target.value);
    const inputVal = parseInt(event.target.value) || 0;
    console.log(inputVal);
    dispacth({
      type: INPUT_CHANGE,
      payload: inputVal,
    });
  };
  const handleAddValue = (event) => {
    event.preventDefault();

    // setCounter((counter) => counter + parseInt(valueToAdd));
    // setvalueToAdd(null);
    dispacth({
      type: VALUE_TO_ADD,
      payload: state.count + state.valueToAdd,
    });
  };

  const increment = () => {
    // setCounter((count) => count + 1);
    dispacth({
      type: INCREMENT,
    });
  };
  const decrement = () => {
    // setCounter((count) => count - 1);
    dispacth({
      type: DECREMENT,
    });
  };
  // const { counter, Increment } = useCounter(initialValue);
  return (
    <>
      <div>counter is - {state.count}</div>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <hr />
      <form>
        <div className="content">
          <input
            className="border-2"
            type="number"
            value={state.valueToAdd || ""}
            onChange={handleInputChange}
          />
          <Button primary onClick={handleAddValue}>
            add it
          </Button>
        </div>
      </form>
    </>
  );
}

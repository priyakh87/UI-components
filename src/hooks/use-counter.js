import { useState, useEffect } from "react";

export default function useCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue);
  const increment = () => {
    setCounter((counter) => counter + 1);
  };

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return {
    counter,
    increment,
  };
}

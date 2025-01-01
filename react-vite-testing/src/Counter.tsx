import useCounter from "./hooks/useCounter";
import UseInputText from "./hooks/UseInputText";

export default function Counter() {
  const { increment, decrement, count } = useCounter();
  const { text, updateText } = UseInputText();
  return (
    <>
      <p data-testId="counter-id">Counter : {count}</p>
      <p>Name {text}</p>
      <input
        type="text"
        aria-label="inputField"
        value={text}
        onChange={updateText}
      />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <p className="cnt">{counter}</p>
      <div>
        <button className="plus" onClick={() => setCounter(counter + 1)}>
          <span role="img" aria-label="plus">
            ➕
          </span>
        </button>
        <button
          className="minus"
          onClick={() =>
            setCounter(() => {
              if (counter - 1 <= 0) {
                return 0;
              } else {
                return counter - 1;
              }
            })
          }
        >
          <span role="img" aria-label="minus">
            ➖
          </span>
        </button>
      </div>
      <button className="reset" onClick={() => setCounter(0)}>
        <b>Reset</b>
      </button>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./App.css";

const localData = () => {
  let list = localStorage.getItem("data");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const App = () => {
  const [result, setResult] = useState("");
  const [items, setItems] = useState(localData());

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(items));
  }, [items]);

  const clickHandler = (event) => {
    setResult(result.concat(event.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
      setItems([...items, result]);
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="b">
      <span className="a">
        <div className="container">
          <form>
            <input type="text" value={result} />
          </form>

          <div className="keypad">
            <button onClick={clear} id="clear">
              AC
            </button>
            <button onClick={backspace} id="backspace">
              Backspace
            </button>
            <button name="/" onClick={clickHandler}>
              &divide;
            </button>
            <button name="1" onClick={clickHandler}>
              1
            </button>
            <button name="2" onClick={clickHandler}>
              2
            </button>
            <button name="3" onClick={clickHandler}>
              3
            </button>
            <button name="*" onClick={clickHandler}>
              &times;
            </button>
            <button name="4" onClick={clickHandler}>
              4
            </button>
            <button name="5" onClick={clickHandler}>
              5
            </button>
            <button name="6" onClick={clickHandler}>
              6
            </button>
            <button name="-" onClick={clickHandler}>
              &ndash;
            </button>
            <button name="7" onClick={clickHandler}>
              7
            </button>
            <button name="8" onClick={clickHandler}>
              8
            </button>
            <button name="9" onClick={clickHandler}>
              9
            </button>
            <button name="+" onClick={clickHandler}>
              +
            </button>
            <button name="0" onClick={clickHandler}>
              0
            </button>
            <button name="." onClick={clickHandler}>
              .
            </button>
            <button name="=" onClick={calculate} id="calculate">
              =
            </button>
          </div>
        </div>
      </span>
      <span className="a">
        {items.map((ele) => {
          return (
            <div className="history">
              <h3>{ele}</h3>
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default App;

import * as React from 'react';
import './style.css';
import { Context } from './Context';

const callbackAcceptingFunction = (fn) => {
  // Calls the function with any required arguments
  return fn(1, 2, 3);
};
console.log(callbackAcceptingFunction((a, b, c) => a + b + c));

const callback = (arg1, arg2, arg3) => {
  return arg1 + arg2 + arg3;
};

// Passing a callback into a callback accepting function
const result = callbackAcceptingFunction(callback);
console.log(result); // 6

let arr = [
  { name: 'nick', age: '26' },
  { name: 'neel', age: '24' },
];

export default function App() {
  const { count, setScore } = React.useContext(Context);

  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  console.log('sdf', count, setScore(40));

  const onClickHandler = (e) => {
    console.log(e);
    setItems(...items, arr);
  };

  console.log(items);
  console.log('local', localStorage.getItem('items'));

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>{count}</p>
      <h3>{result}</h3>
      <button onClick={onClickHandler}>Submit</button>
      <div>
        {items.map((item, index) => (
          <ul key={index}>
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

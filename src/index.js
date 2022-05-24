import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Context } from './Context';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
let count = 10;
let setScore = (val) => val;

function MisspelledWords(spellScore) {
  if (spellScore === 0) return 5;
  if (spellScore <= 5) return 2;
  return 0;
}

console.log('hello', MisspelledWords(3));

root.render(
  <StrictMode>
    <Context.Provider value={{ count, setScore }}>
      <App />
    </Context.Provider>
  </StrictMode>
);

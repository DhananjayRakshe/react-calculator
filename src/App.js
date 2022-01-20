import { useState } from 'react';

function App() {

  //createDigits() For calculator keyboard start
  const createDigits = () => {
    const digits = [];
    for(let i = 1; i < 10; i++) {
      digits.push(
        <button>{i}</button>
      )
    }
    return digits;
  }
  //createDigits() For calculator keyboard End

  return (
    <div className="App">
      {/* <h1>React Calculator</h1> */}
      <div className="calculator">
        <div className="display">
          <span>(0) </span>0
        </div>

        <div className="operators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
          <button>DEL</button>
        </div>

        <div className="digits">
            { createDigits() }

            <button>0</button>
            <button>.</button>
            <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;

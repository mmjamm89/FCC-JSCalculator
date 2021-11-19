import React, { useState } from 'react';
import './style.css';


function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("0");

  const operators = ['/', '*', '+', '-', '.'];

  const display = (value) => {
       if(
            operators.includes(value) && calc === '' ||
            operators.includes(value) && operators.includes(calc.slice(-1))
       ){
            return;
       }       
       
       setCalc(calc + value);
                          
  }

  const calculate = () => {     
     setResult(eval(calc).toString())
     setCalc("")
  }

  const allClear = () => {
    setCalc("")
    setResult("0")
  } 

  return (
    <div className="App">      
      <div className="container">
        <div className="grid">
          <div className="display"id="display">
                 <input type="text"
                        placeholder=""
                        value={calc}
                        disabled
                        id="display" />
                 <div className="total">{result}</div>
               </div>               
          <div className="button AC"
               id="clear"
               onClick={allClear}>AC</div>
          <div className="button div"
               id="divide"
               onClick={() => display("/")}>/</div>
          <div className="button times"
               id="multiply"
               onClick={() => display("*")}>x</div>
          <div className="button seven"
               id="seven"
               onClick={() => display("7")}>7</div>
          <div className="button eight"
               id="eight"
               onClick={() => display("8")}>8</div>
          <div className="button nine"
               id="nine"
               onClick={() => display("9")}>9</div>
          <div className="button minus"
               id="subtract"
               onClick={() => display("-")}>-</div>
          <div className="button four"
               id="four"
               onClick={() => display("4")}>4</div>
          <div className="button five"
               id="five"
               onClick={() => display("5")}>5</div>
          <div className="button six"
               id="six"
               onClick={() => display("6")}>6</div>
          <div className="button plus"
               id="add"
               onClick={() => display("+")}>+</div>
          <div className="button one"
               id="one"
               onClick={() => display("1")}>1</div>
          <div className="button two"
               id="two"
               onClick={() => display("2")}>2</div>
          <div className="button three"
               id="three"
               onClick={() => display("3")}>3</div>
          <div className="button equal"
               id="equals"
               onClick={calculate}>=</div>
          <div className="button zero"
               id="zero"
               onClick={() => display("0")}>0</div>
          <div className="button dot"
               id="decimal"
               onClick={() => display(".")}>.</div>
        </div>
      </div>
    </div>
  );
}

export default App;

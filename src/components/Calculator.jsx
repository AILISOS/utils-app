import React, {useState} from "react";
import { CgMathPlus } from "react-icons/cg";


const Calculator = () =>{
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState('');

    const Addition = () => {
        const sum = parseFloat(number1) + parseFloat(number2);
        setResult(sum);
    }

  return(
    <div>
        <input
            type="number"
            placeholder="Enter first number"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
            />
        <input
            type="number"
            placeholder="Enter Second number"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
            />
        <button onClick={Addition} Add>
        <CgMathPlus />
        </button>
        
        <div>
            {result && (
                <p>
                     Result: {number1} + {number2} = {result}
                </p>
            )}
        </div>
        
    </div>
  )
    
    
} 


export default Calculator;
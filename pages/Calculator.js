import { useState } from "react";

function Calculator() {
    const [input, setInput] = useState({
        value1: "",
        value2: "",
        operator: ""
    });
    const [calculation, setCalculation] = useState({
        arabic: 0,
        roman: ""
    });
    const [errors, setErrors] = useState("");

    function handleInputChange(e) {
        const key = e.target.name;
        setInput({...input, [key]: e.target.value});
        setCalculation({});
    }

    function handleCalculation(e) {
        e.preventDefault();

        fetch(`/api/calculate`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(input)
        })
        .then((resp) => {
            if (resp.ok) {
              resp.json().then(data => {
                  setCalculation(data);
                  setErrors("");
              })
            } else {
              resp.json().then(errors => setErrors(errors.error))
            }
          });
    }


    return (
        <div className="converter-container">
            <h2>Roman Numeral Calculations</h2>
            <form onSubmit={handleCalculation}>
                <input 
                    type="text" 
                    name="value1"
                    onChange={handleInputChange}
                    placeholder="Enter Roman Numeral"
                />
                <select 
                    onChange={handleInputChange}
                    name="operator">
                        <option>Choose operation</option>
                        <option>+</option>
                        <option>-</option>
                        <option>*</option>
                        <option>/</option>
                </select>
                <input 
                    type="text" 
                    name="value2"
                    onChange={handleInputChange}
                    placeholder="Enter Roman Numeral"
                />
                <button type="submit">Calculate</button>
            </form>
            {calculation.roman ? (
                <h3>{input.value1} {input.operator} {input.value2} = {calculation.roman} or {calculation.arabic}</h3>
            ) : null}
            {errors ? (
                <h3 className="error-message">{errors}</h3>
            ) : null}
        </div>
        
    )
}

export default Calculator;
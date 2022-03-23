import { useState } from "react";

function Converter() {
    const [input, setInput] = useState("");
    const [conversion, setConversion] = useState("");
    const [errors, setErrors] = useState("");

    function handleConversion(e) {
        e.preventDefault();

        fetch(`/api/convert`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({num: input})
        })
        .then((resp) => {
            if (resp.ok) {
              resp.json().then(data => {
                  setConversion(data.answer);
                  setErrors("");
              })
            } else {
              resp.json().then(errors => setErrors(errors.error))
            }
          });
    }

    function handleInputChange(e) {
        setInput(e.target.value);
        setConversion("");
    }


    return (
        <div className="converter-container">
            <h2>Convert Arabic Number or Roman Numeral</h2>
            <form onSubmit={handleConversion}>
                <label>Enter Number or Roman Numeral to Convert: </label>
                <input 
                    type="text" 
                    onChange={handleInputChange}/>
                <button type="submit">Convert</button>
            </form>
            {conversion ? (
                <h3>{input} = {conversion}</h3>
            ) : null}
            {errors ? (
                <h3 className="error-message">{errors}</h3>
            ) : null}
        </div>
        
    )
}

export default Converter;
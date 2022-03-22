import { useState } from "react";

function Converter() {
    const [input, setInput] = useState("");

    function handleConversion() {
        fetch("pages/api/convert")
    }



    return (
        <div className="converter-container">
            <h2>Convert Arabic Number or Roman Numeral</h2>
            <form onSubmit={handleConversion}>
                <label>Enter Number or Roman Numeral to Convert: </label>
                <input type="text" onChange={(e) => setInput(e.target.value)}></input>
                <button type="submit">Convert</button>
            </form>
        </div>
        
    )
}

export default Converter;
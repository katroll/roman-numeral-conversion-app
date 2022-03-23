import { useState } from "react";

function Converter() {
    const [input, setInput] = useState("");
    const [conversion, setConversion] = useState("")



    function handleConversion(e) {
        e.preventDefault();


        fetch(`/api/convert`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({num: input})
        })
        .then(res => res.json())
        .then(data => setConversion(data.answer));
    }



    return (
        <div className="converter-container">
            <h2>Convert Arabic Number or Roman Numeral</h2>
            <form onSubmit={handleConversion}>
                <label>Enter Number or Roman Numeral to Convert: </label>
                <input type="text" onChange={(e) => setInput(e.target.value)}></input>
                <button type="submit">Convert</button>
            </form>
            {conversion ? (
                <h1>{conversion}</h1>
            ) : null}
        </div>
        
    )
}

export default Converter;
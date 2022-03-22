

function Converter() {


    return (
        <div className="converter-container">
            <h2>Convert Arabic Number or Roman Numeral</h2>
            <form>
                <label>Enter Number or Roman Numeral to Convert: </label>
                <input type="text" placeholder=""></input>
                <button type="submit">Convert</button>
            </form>
        </div>
        
    )
}

export default Converter;
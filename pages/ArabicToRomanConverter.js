export default function arabicToRoman(number) {
    let roman = "";

    const levels = [
        {unit: 1000, symbol: "M", symbolHalfAbove: "K", symbolAbove: "K", symbolHalf: "D"},
        {unit: 100, symbol: "C", symbolHalfAbove: "D", symbolAbove: "M", symbolHalf: "L"},
        {unit: 10, symbol: "X", symbolHalfAbove: "L", symbolAbove: "C", symbolHalf: "V"},
        {unit: 1, symbol: "I", symbolHalfAbove: "V", symbolAbove: "X", symbolHalf: "K"}
    ]

    for( let i = 0; i < 4; i++) {
        const level = levels[i];

        const units = Math.floor(number / level.unit);
        if(units) {
            if(units === 4) {
                roman = roman.concat(`${level.symbol}${level.symbolHalfAbove}`);
                number -= level.unit * units;
            } else if(units === 9) {
                roman = roman.concat(`${level.symbol}${level.symbolAbove}`);
                number -= level.unit * units;
            } else {
                roman = roman.concat(`${level.symbol}`.repeat(units));
                number -= level.unit * units;
            }
        }

        console.log(level.unit, number);

        if(level.unit != 1) {
          const unitHalves = Math.floor(number / (level.unit / 2));
          if(unitHalves && Math.floor(number - (level.unit / 2) < 4)) {
              roman = roman.concat(`${level.symbolHalf}`.repeat(unitHalves));
              number -= (level.unit / 2) * unitHalves;
          }
        }    

    }

    return roman;
}
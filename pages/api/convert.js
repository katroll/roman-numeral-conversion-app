
function arabicToRoman(number) {
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



const conversions = {"M": 1000, "D":500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1};

function romanToArabic(str) {
  const array = str.split("");
  let total = 0;

  let current;
  let next;

  for(let i = 0; i < array.length; i++) {
      current = conversions[array[i]];
      next = conversions[array[i + 1]];

      if(current < next) {
          total -= current;
      } else {
          total += current;
      }
  }

  return total;
}

function convert(num) {
  const reg = /^\d+$/;
  if(reg.test(num)) {
    console.log("its a number")
      return arabicToRoman(num);
  } 
  return romanToArabic(num);
}

export default function handler(req, res) {
  const conversion = convert(req.body.num)
  console.log("num: ", req.body.num);
  console.log("conversion: ", conversion);

  res.status(200).json({ answer: conversion })
}

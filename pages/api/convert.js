

function arabicToRoman (num) {
  var digits = String(+num).split(""),
      key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
             "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
             "","I","II","III","IV","V","VI","VII","VIII","IX"],
      roman = "",
      i = 3;
  while (i--)
      roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  console.log(Array(+digits.join("") + 1).join("M") + roman)
  return Array(+digits.join("") + 1).join("M") + roman;
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

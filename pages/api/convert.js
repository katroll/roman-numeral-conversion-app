import romanToArabic from "../RomanToArabicConverter";
import arabicToRoman from "../ArabicToRomanConverter";


export default function handler(req, res) {
  const conversion = convert(req.body.num);

  if(!isNaN(parseFloat(req.body.num)) && !(parseFloat(req.body.num) === Math.floor(parseFloat(req.body.num)))) {
    res.status(300).json({error: "Input not valid: fractional."});
  }

  if(isNaN(parseFloat(req.body.num)) && isNaN(parseFloat(conversion))) {
    res.status(300).json({error: "Please confirm input is valid Roman Numeral or Arabic number."});
  }

  if(parseFloat(req.body.num) > 3000 || conversion > 3000) {
    res.status(300).json({error: "Input not valid: over 3000."});
  } 

  res.status(200).json({ answer: conversion });
}


function convert(num) {
    const reg = /^\d+$/;
    if(reg.test(num)) {
        return arabicToRoman(num);
    } 
    return romanToArabic(num);
}
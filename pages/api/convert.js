import romanToArabic from "../RomanToArabicConverter";
import arabicToRoman from "../ArabicToRomanConverter";


export default function handler(req, res) {
  const conversion = convert(req.body.num);
  res.status(200).json({ answer: conversion });
}


function convert(num) {
    const reg = /^\d+$/;
    if(reg.test(num)) {
        return arabicToRoman(num);
    } 
    return romanToArabic(num);
}
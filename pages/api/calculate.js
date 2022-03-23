import romanToArabic from "../RomanToArabicConverter";
import arabicToRoman from "../ArabicToRomanConverter";



export default function handler(req, res) {
    try {
        const value1 = romanToArabic(req.body.value1);
        const value2 = romanToArabic(req.body.value2);
    
        const arabicAnswer = eval(`${value1} ${req.body.operator} ${value2}`);

        if(!isNaN(parseFloat(req.body.value1)) || !isNaN(parseFloat(req.body.value2))) {
            res.status(300).json({error: "Please confirm input is Roman Numeral"});
        }

        if(arabicAnswer < 0) {
            res.status(300).json({error: "Calculation not valid: negative answer."});
        }

        if(!(arabicAnswer === Math.floor(arabicAnswer))) {
            res.status(300).json({error: "Calculation not valid: fractional answer."});
        }

        if(arabicAnswer === 0) {
            res.status(300).json({error: "Calculation not valid: no valid zero Roman Numeral."});
        }

        const romanAnswer = arabicToRoman(arabicAnswer);
        res.status(200).json({ arabic: arabicAnswer, roman: romanAnswer });
    } catch(e) {
        res.status(300).json({error: "Please confirm all fields are valid."});
    }
    
}




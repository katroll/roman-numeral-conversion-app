import romanToArabic from "../RomanToArabicConverter";
import arabicToRoman from "../ArabicToRomanConverter";



export default function handler(req, res) {
    try {
        const value1 = romanToArabic(req.body.value1);
        const value2 = romanToArabic(req.body.value2);
    
        const arabicAnswer = eval(`${value1} ${req.body.operator} ${value2}`);
        const romanAnswer = arabicToRoman(arabicAnswer);
        res.status(200).json({ arabic: arabicAnswer, roman: romanAnswer });
    } catch(e) {
        res.status(300).json({error: "Please confirm all fields are valid."});
    }
    
}




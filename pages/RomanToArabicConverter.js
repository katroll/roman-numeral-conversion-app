const conversions = {"M": 1000, "D":500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1};

export default function romanToArabic(str) {
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
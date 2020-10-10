export const hackerSpeak = (words) => {
  return words.replace(/a|e|i|o|s/gi, (x) => {
    if (x == "A" || x == "a") return 4;
    else if (x == "E" || x == "e") return 3;
    else if (x == "I" || x == "i") return 1;
    else if (x == "O" || x == "o") return 0;
    else return 5;
  });
};

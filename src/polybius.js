// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const polybiusSquare = { 
    1: ["a", "b", "c", "d", "e"], 
    2: ["f", "g", "h", "i/j", "k"], 
    3: ["l", "m", "n", "o", "p"], 
    4: ["q", "r", "s", "t", "u"], 
    5: ["v", "w", "x", "y", "z"] 
  };

  function squareCrawler(char) {
    // Loop each row
    for (let i = 0; i < Object.keys(polybiusSquare).length; i++) {
      let y = i + 1;
      // Loop through each row
      for (let j = 0; j < polybiusSquare[y].length; j++) {
        let x = j + 1;
        // Check if char matches letter
        if (polybiusSquare[y][j].includes(char)) {
          result = [x, y]
          return result.join("");
        }
      }
    }
    // If non-alphbetic char, return the char
    return char;
  }

  function squareLocator(double) {
    // Separate 2 numbers
    const split = double.split("");
    // Assign x and y coordinate from split number
    const x = split[0];
    const y = split[1];

    // Retrieve row
    squareRow = polybiusSquare[y];
    //Retrieve letter in row
    letter = squareRow[x - 1];
    
    return letter;
  }

  function polybius(input, encode = true) {
    const message = [];

    // Encoder algorithm
    if (encode) {
      // Ignore capital letters and split each letter in array
      const formattedInput = input.toLowerCase().split("");
      // Encode message with squareCrawler
      formattedInput.forEach((char) => {
        message.push(squareCrawler(char))
      });

      return message.join("");
    } 
    // Decoder algorithm
    else {
      let isOdd = false;
      // Convert number to String type
      const formattedInput = input.toString()
      // Separate encoded words
      const encodedWords = formattedInput.split(" ");

      // Handle single or multiple decoded words
      encodedWords.forEach((word) => {
        const decodedWords = [];
        // Check that length of string of numbers is even
        if (word.length % 2 != 0) {
          isOdd = true;
          return;
        }
        // Pair off numbers
        doubleDigitArray = word.match(/.{1,2}/g);
        // Decode message with squareLocator
        doubleDigitArray.forEach((double) => {
          decodedWords.push(squareLocator(double));
        });
        message.push(decodedWords.join(""));
      });

      // Return false is length of string of numbers was odd
      if (isOdd) return false;

      return message.join(" ");
    }   
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

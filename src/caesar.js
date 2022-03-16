// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  // Create alphabet array
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function shiftChar(char, shift, encode) {
    // Algorithm to shift char
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet[i] === char) {
        let shiftedIndex;
        // Determine encoding or decoding
        encode ? shiftedIndex = (i + shift) : shiftedIndex = (i - shift)
        // If shift goes outside A-Z range, roll over
        shiftedIndex > 25 ? shiftedIndex -= 26 : shiftedIndex < 0 ? shiftedIndex += 26 : shiftedIndex;
        // Return shifted letter
        return alphabet[shiftedIndex];
      }
    }
    // Return any non alpha char
    return char;
  };

  function caesar(input, shift, encode = true) {
      // If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false
      if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

      // Ignore capital letters and split each letter in array
      const formattedInput = input.toLowerCase().split("");
      let message = [];

      formattedInput.forEach((char) => {
        message.push(shiftChar(char, shift, encode))
      });

      console.log(input)
      console.log(message.join(""));

      return message.join("");
    }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

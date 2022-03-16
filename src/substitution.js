// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function replaceChars(input, alpha, alphaKey) {
    const message = [];
    
    input.forEach((char) => {
      // Preserve spaces
      if (char === " ") message.push(char);

      // Collect same index alphabet char for encode or decode
      let charIndex = alpha.indexOf(char)
      message.push(alphaKey[charIndex]);
    });
    return message.join("");
  }

  function substitution(input, alphabet, encode = true) {
    // If no aphabet or alphabet length is not 26, return false
    if (!alphabet || alphabet.length != 26) return false;
    // Check if each character of alphabet is unique
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (i != j && alphabet[i] === alphabet[j]) {
          return false;
        } 
      } 
    }

    formattedInput = input.split("");
    // Use replaceChars algorithm to encode or decode
    return encode ? replaceChars(formattedInput, standardAlphabet, alphabet) : replaceChars(formattedInput, alphabet, standardAlphabet);
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift ===0 || shift < -25 || shift > 25){
      return false;
  }
  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let result = input.split('').map(charVar => { 
      if (alphabet.includes(charVar.toLowerCase()) && encode){ //Is this a letter or a space?
          return String.fromCharCode(((charVar.toLowerCase().charCodeAt()+shift-97)%26+26)%26+97); //If so, apply shift for encoding and add to newly created array via map
      }else if (alphabet.includes(charVar.toLowerCase()) && !encode){ //Still, is this a letter?
          return String.fromCharCode(((charVar.toLowerCase().charCodeAt()-shift-97)%26+26)%26+97);
      }else{ //Otherwise, this is a space and we need to insert it to the array as is
          return charVar
      }
  }).join('');
  return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

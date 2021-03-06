// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    const standardAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    if(!alphabet || alphabet.length !== 26){
      return false;
    }
   const setAlphabet = new Set(alphabet.split(""));
   if (setAlphabet.size !== 26){
      return false
   };
   const substituteAlphabet = alphabet.split("");
   input = input.toLowerCase();
   const encodeKeyMap = standardAlphabet.reduce((obj, letter, i) => {
       obj[letter] = substituteAlphabet[i];
       return obj;
   }, {}); //{a:b}
   const decodeKeyMap = substituteAlphabet.reduce((obj, letter, i) => {
       obj[letter] = standardAlphabet[i];
       return obj;
   }, {});
   return input.split('').map(char =>{
       if(encode){
         if (encodeKeyMap[char]){
           return encodeKeyMap[char];
        }else{
           return char;
        }}
        if(!encode){
            if(decodeKeyMap[char]){
                return decodeKeyMap[char]
            }else {
                return char;
            }
        }
   }).join('')
}
return {
  substitution,
};
})();

module.exports = { substitution: substitutionModule.substitution };

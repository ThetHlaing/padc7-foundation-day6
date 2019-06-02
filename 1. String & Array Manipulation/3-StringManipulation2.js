/*
 *
 * Use string methods split(), slice(), toLowerCase() and toUpperCase() 
 * and array methods join()
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

const name = "AlbERt eINstEiN IUsdpafidaS";

function nameFormatter(oldName) {
  const splitted_array = oldName.split(" ");

  const new_array = splitted_array.map( x => {
    const firstLetter = x.charAt(0);
    const firstLetterUppercase = firstLetter.toUpperCase();
    const otherLetters = x.slice(1);
    const otherWordsLowercase = otherLetters.toLowerCase();
    return firstLetterUppercase + otherWordsLowercase;
  })
  /* 
    Split the string by space
    Slice the first character and make it uppercase
    Slice the reset of the characters and make it lowercase
    Join the splitted array with space to get the final result
    Final result should be "Albert Einstein"                
    */

  return new_array.join(" ");
}
console.log(nameFormatter(name));
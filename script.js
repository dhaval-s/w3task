const convertToUpperCase = (sentence) => {
    // remove whitespace
    sentence = sentence.trim();
  
    // split the sentence into words
    const words = sentence.split(' ');
  
    // convert the first character of each word to uppercase and other character to lower case
    const upperCaseWords = words.map((word, index) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  
    // join all the words
    const upperCase = upperCaseWords.join(' ');
  
    return upperCase;
  };

  const replaceWords  = (sentence, find, replace, caseSensitive = true) => {
    if (caseSensitive) {
        // find and replace word
        return sentence.replace(find, replace);
    } else {
        // regex to handle case-insensitive
        return sentence.replace(new RegExp(find, "i"), replace);
    }
  };

  const executeTask = () => {
    const sentence = document.getElementById("inputString").value;
    const find = document.getElementById("findString").value;
    const replace = document.getElementById("replaceString").value;

    const resultCaseSensitive = replaceWords(sentence, find, replace);
    const resultCaseInsensitive = replaceWords(sentence, find, replace, false);
  
    const upperCaseSensitive = convertToUpperCase(resultCaseSensitive);
    const upperCaseInsensitive = convertToUpperCase(resultCaseInsensitive);
    
    document.getElementById("outputStringSensitive").innerHTML = upperCaseSensitive;
    document.getElementById("outputStringInsensitive").innerHTML = upperCaseInsensitive;
    console.log(upperCaseSensitive);
    console.log(upperCaseInsensitive);
  }

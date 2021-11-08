import './App.css';

// key is hash(word), value is list of language(s) in shorthand
var dictionary = {};
var seperatorChar = ':';

function Backend() {
  var word = "cat";
  var test = "Cat dog!"
  parseDictionary();
  return (
	<div>
        <p>
          Testing word: {word}
        </p>
        <p>
          {word} is hash # {hash(word)}
        </p>
        <p>
          {word} is in the dictionary: {hasWord("dog")}
        </p>
	<p>
          {test} has value {seperateInput(test)}
        </p>
	</div>
  );
}

export function increment(number) {
  alert(number + 1);
}

// returns true if dictionary contains word.
export function hasWord(wordP){
  if(dictionary[hash(wordP)] == null){
    return false;
  }
  else{
    return true;
  }
}



// returns Romance, Germanic, or Other given a word
export function getValue(wordP){
  var num = dictionary[hash(wordP)];
  if(num == 0){
    return "Romance";
  }
  if(num == 1){
    return "Germanic";
  }
  return "Other";
}

// given a single string of words seperated by spaces, returns list of valid words
export function seperateInput(stringP){
  let strings = stringP.split(" ");
  let i = 0;
  for(i = 0; i < strings.length; i++){ // for each word
    let newString = "";
    for(let j = 0; j < strings[i].length; j++){ // for each char
      let c = strings[i].charCodeAt(j);
      let updatedC;
      if(c > 64 && c < 91){
        updatedC = String.fromCharCode(c + 32);
        newString += updatedC;
      }
      else if ((c < 65 || c > 122 ) || (c > 90 && c < 97)){
        //do nothing
      }
      else{
        newString += String.fromCharCode(c);
      }
    }
    strings[i] = newString;
  }
  return strings;
}

//
// IT IS SAFE TO IGNORE ALL BELOW CODE
//
//hash function code provided by the internet
export function hash(stringP){
  var h = 0;
  var i = 0;
  for(i = 0; i < stringP.length; i++){
    var ch = stringP.charCodeAt(i);
    h = ((h << 5) - h) + ch;
    h = h & h;
  }
  return h;
}

// opens text file, reads each line, and saves information to dictionary
export function parseDictionary(){
  var rawFile = new XMLHttpRequest();
  var path = "./dictionary.txt";
  rawFile.open("GET", path, false);
  rawFile.onreadystatechange = function(){
    if(rawFile.readyState === 4){
      if(rawFile.status === 200 || rawFile.status === 0){
        var allText = rawFile.responseText;
        while(allText.includes("\n")){
          var line = allText.substring(0, allText.indexOf("\n"));
          var curWord = line.substring(0, line.indexOf(seperatorChar));
          var remainder = line.substring(line.indexOf(seperatorChar) + 1);
          dictionary[hash(curWord)] = remainder;
          allText = allText.substring(allText.indexOf("\n") + 1);
        }
      }
    }
  }
  rawFile.send();
  console.log(dictionary);
}

export default Backend;



import './App.css';

// key is hash(word), value is list of language(s) in shorthand
let dictionary = {};
let seperatorChar = ':';
let a = 0; // Romance
let b = 0; // Germanic
let c = 0; // Other
let d = 0; // Total Number of Words

function Backend() {
  let word = "cat";
  let test = "Cat dog!"
  ParseDictionary();
  return (
	<div>
        <p>
          Testing word: {word}
        </p>
        <p>
          {word} is hash # {Hash(word)}
        </p>
        <p>
          {word} is in the dictionary: {HasWord("dog")}
        </p>
	      <p>
          {test} has value {SeperateInput(test)}
        </p>
        <p>
          Percent Romance: {GetRomancePercent()}
        </p>

	</div>
  );
}

export function Increment(number) {
  alert(number + 1);
}

// returns true if dictionary contains word.
export function HasWord(wordP){
  if(dictionary[Hash(wordP)] == null){
    return false;
  }
  else{
    return true;
  }
}



// returns Romance, Germanic, or Other given a word
export function GetValue(wordP){
  let num = dictionary[Hash(wordP)];
  if(num == 0){
    return "Romance";
  }
  if(num == 1){
    return "Germanic";
  }
  return "Other";
}
// returns 0, 1, or 2 given a word. same as function 
export function GetValueNumber(wordP){
  let num = dictionary[Hash(wordP)];
}

// given a single string of words seperated by spaces, returns list of valid words
export function SeperateInput(stringP){
  let strings = stringP.split(" ");
  a = 0;
  b = 0;
  c = 0;
  d = 0;
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
  for(i = 0; i < strings.length; i++){
    if(HasWord(strings[i])){
      if(GetValueNumber(strings[i]) == 0){
        a = a + 1;
      }
      else if(GetValueNumber(strings[i]) == 1){
        b = b + 1;
      }
      else{
        c = c + 1;
      }
    }
    else{
      c = c + 1;
    }
    d = d + 1;
  }
  return strings;
}

export function GetRomancePercent(){
  let percent = 0.0;
  if(d == 0){
	return percent;
  }
  console.log("In GetRomancePercent");
  percent = a / d;
  percent = percent * 100;
  return percent;
}

export function GetGermanicPercent(){
  let percent = 0.0;
  if(d == 0){
	return percent;
  }
  console.log("In GetGermanicPercent");
  percent = b / d;
  percent = percent * 100;
  return percent;
}
export function GetOtherPercent(){
  let percent = 0.0;
  if(d == 0){
	return percent;
  }
  console.log("In GetOtherPercent");
  percent = c / d;
  percent = percent * 100;
  return percent;
}

//
// IT IS SAFE TO IGNORE ALL BELOW CODE
//
//hash function code provided by the internet
export function Hash(stringP){
  let h = 0;
  let i = 0;
  for(i = 0; i < stringP.length; i++){
    let ch = stringP.charCodeAt(i);
    h = ((h << 5) - h) + ch;
    h = h & h;
  }
  return h;
}

// opens text file, reads each line, and saves information to dictionary
export function ParseDictionary(){
  let rawFile = new XMLHttpRequest();
  let path = "./dictionary.txt";
  rawFile.open("GET", path, false);
  rawFile.onreadystatechange = function(){
    if(rawFile.readyState === 4){
      if(rawFile.status === 200 || rawFile.status === 0){
        let allText = rawFile.responseText;
        while(allText.includes("\n")){
          let line = allText.substring(0, allText.indexOf("\n"));
          let curWord = line.substring(0, line.indexOf(seperatorChar));
          let remainder = line.substring(line.indexOf(seperatorChar) + 1);
          dictionary[Hash(curWord)] = remainder;
          allText = allText.substring(allText.indexOf("\n") + 1);
        }
      }
    }
  }
  rawFile.send();
  console.log(dictionary);
}

export default Backend;

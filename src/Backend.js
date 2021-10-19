import './App.css';
import raw from './dictionary.txt';

// key is hash(word), value is list of language(s) in shorthand
var dictionary = {};
// key is hash(shorthand language), value is longhand language
var languageDictionary = {};
var seperatorChar = ':';
var listChar = ',';

function Backend() {
  var word = "cat";
  parseDictionary();
  fillLanguageDictionary();

  return (
	<div>
        <p>
          Testing word: {word}
        </p>
        <p>
          {word} is hash # {hash(word)}
        </p>
        <p>
          {word} has value {getStringListOfEtymologies(word)}
        </p>
        <p>
          {word} is in the dictionary: {hasWord("dog")}
        </p>
	</div>
  );
}

function parseDictionary(){
  var lines = [];

  // TO DO: parse TXT to string array lines
  fetch(raw)
  .then( r => r.text() )
  .then( t => console.log(t))
  
  // temporary test with cat
  lines.push("cat:enm,gem-pro");

  // for each line, store the etymology
  for(var i = 0; i < lines.length; i++){
    var curWord = lines[i].substring(0, lines[i].indexOf(seperatorChar));
    var remainder = lines[i].substring(lines[i].indexOf(seperatorChar) + 1);
    var curListOfEtymologies = [];
    if(!remainder.includes(listChar)){
      curListOfEtymologies.push(remainder);
    }
    else{
      while(remainder.includes(listChar)){
        curListOfEtymologies.push(remainder.substring(0, remainder.indexOf(listChar)));
        remainder = remainder.substring(remainder.indexOf(listChar) + 1);
      }
      curListOfEtymologies.push(remainder);
    }
    dictionary[hash(curWord)] = curListOfEtymologies;
  }
}

function hasWord(wordP){
  if(dictionary[hash(wordP)] == null){
    return "false";
  }
  else{
    return "true";
  }
}


function getStringListOfEtymologies(wordP){
  
  var s = "";
  var i = 0;
  var listOfEtymologies = dictionary[hash(wordP)];
  for(i = 0; i < listOfEtymologies.length - 1; i++){
    s += listOfEtymologies[i] + ", ";
  }
  s += listOfEtymologies[listOfEtymologies.length - 1];
  
  return (s);
}

//hash function code provided by the internet
function hash(stringP){
  var h = 0;
  var i = 0;
  for(i = 0; i < stringP.length; i++){
    var ch = stringP.charCodeAt(i);
    h = ((h << 5) - h) + ch;
    h = h & h;
  }
  return h;
}

function fillLanguageDictionary(){
  languageDictionary[(hash("af"))] = "Afrikaans";
  languageDictionary[(hash("an"))] = "Aragonese";
  languageDictionary[(hash("ar"))] = "Arabic";
  languageDictionary[(hash("be"))] = "Belarusian";
  languageDictionary[(hash("bg"))] = "Bulgarian";
  languageDictionary[(hash("bn"))] = "Bengali";
  languageDictionary[(hash("br"))] = "Breton";
  languageDictionary[(hash("cs"))] = "Czech";
  languageDictionary[(hash("cu"))] = "Old Church Slavonic";
  languageDictionary[(hash("cy"))] = "Welsh";
  languageDictionary[(hash("da"))] = "Danish";
  languageDictionary[(hash("de"))] = "German";
  languageDictionary[(hash("el"))] = "Greek";
  languageDictionary[(hash("en"))] = "English";
  languageDictionary[(hash("eo"))] = "Esperanto";
  languageDictionary[(hash("es"))] = "Spanish";
  languageDictionary[(hash("fa"))] = "Persian";
  languageDictionary[(hash("fi"))] = "Finnish";
  languageDictionary[(hash("fr"))] = "French";
  languageDictionary[(hash("ga"))] = "Irish";
  languageDictionary[(hash("he"))] = "Hebrew";
  languageDictionary[(hash("hi"))] = "Hindi";
  languageDictionary[(hash("hu"))] = "Hungarian";
  languageDictionary[(hash("it"))] = "Italian";
  languageDictionary[(hash("ja"))] = "Japanese";
  languageDictionary[(hash("ko"))] = "Korean";
  languageDictionary[(hash("la"))] = "Latin";
  languageDictionary[(hash("ms"))] = "Malay";
  languageDictionary[(hash("nl"))] = "Dutch";
  languageDictionary[(hash("no"))] = "Norwegian";
  languageDictionary[(hash("pt"))] = "Portuguese";
  languageDictionary[(hash("ru"))] = "Russian";
  languageDictionary[(hash("sa"))] = "Sanskrit";
  languageDictionary[(hash("si"))] = "Sinhalese";
  languageDictionary[(hash("sv"))] = "Swedish";
  languageDictionary[(hash("tr"))] = "Turkish";
  languageDictionary[(hash("zh"))] = "Chinese";
  languageDictionary[(hash("gem-pro"))] = "Proto-Germanic";
  languageDictionary[(hash("ine-pro"))] = "Proto-Indo-European";
  languageDictionary[(hash("enm"))] = "Middle English";
  languageDictionary[(hash("ang"))] = "Old English";
  languageDictionary[(hash("non"))] = "Old Norse";
  languageDictionary[(hash("nn"))] = "Norwegian Nynorsk";
  languageDictionary[(hash("nb"))] = "Norweigian Bokmal";
  languageDictionary[(hash("grc"))] = "Ancient Greek";
  languageDictionary[(hash("nan"))] = "Min Nan";
  languageDictionary[(hash("ltc"))] = "Middle Chinese";
  languageDictionary[(hash("odt"))] = "Old Dutch";
  languageDictionary[(hash("dum"))] = "Middle Dutch";
  languageDictionary[(hash("gmw-pro"))] = "Proto-West-Germanic";
  languageDictionary[(hash("fro"))] = "Old French";
}

export default Backend;

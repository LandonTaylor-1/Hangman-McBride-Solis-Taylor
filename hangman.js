let word = 'hello';
let wordArr = word.split('');
console.log(wordArr);
let guessArr = [];

function print(){
  word = 'hello';
  wordArr = word.split('');
  for(i=0; i<wordArr.length; i++){
    if (wordArr[i] == ' '){
      wordArr[i] == ' ';
    }
    else if(!guessArr.includes(wordArr[i])){
        wordArr[i] = '_';
    }
    
  }
  document.getElementById("word").innerHTML = wordArr.join(' ');
}

function guess(letter){
  guessArr.push(letter);
  console.log(guessArr);
  print();
}
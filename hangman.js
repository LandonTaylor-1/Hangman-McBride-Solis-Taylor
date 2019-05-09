let word = 'HELLO';
let wordArr = word.split('');
console.log(wordArr);
let guessArr = [];

function print(){
    document.getElementById("guesses").innerHTML = guessArr;
    word = 'HELLO';
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

print();

function guess(){
    let letter = document.getElementById("myLetter").value;
    letter = letter.toUpperCase();
    document.getElementById("myLetter").value = '';
    guessArr.push(letter);
    print();
}
let textarea = document.getElementById("sandbox"),
text = textarea.value;

function addWord(dictionary, word) {
if(!(word in dictionary)) {

    dictionary[word] = 0;
}
dictionary[word] +=1;
}

let button = document.getElementById("button");


text.addWord();
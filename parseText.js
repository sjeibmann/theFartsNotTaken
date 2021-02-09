
const getFindFieldText = () => {
    let find = document.getElementById('findField').value;
    console.log('Word to find: ' + find);
    return find;
};

const getReplaceFieldText = () => {
    let find = document.getElementById('replaceField').value;
    console.log('Replacement word: ' + find);
    return find;
};

const makeTitleCase = (s) =>{
    let splitWord = Array.from(s);
    splitWord[0] = splitWord[0].toUpperCase();
    let newWord = splitWord.join('');
    return newWord;
}

const makeUpperCase = (s) =>{
    let upper = s.toUpperCase();
    return upper;
}


const formHandler = () => {
    let searchWord = getFindFieldText();
    let searchWordUpper = makeUpperCase(searchWord);
    let searchWordTitle = makeTitleCase(searchWord);
    // console.log(searchWord + ", " + searchWordTitle + ", " + searchWordUpper);
    let replacementWord = getReplaceFieldText();
    let replacementWordUpper = makeUpperCase(replacementWord);
    let replacementWordTitle = makeTitleCase(replacementWord);


    let copyContainer = document.getElementById("content").children;
    for(i=0; i<copyContainer.length; i++){
        // console.log(copyContainer[i].nodeName + ": " + copyContainer[i].textContent);
        copyContainer[i].textContent = copyContainer[i].textContent.replace(searchWord, replacementWord);
        copyContainer[i].textContent = copyContainer[i].textContent.replace(searchWordUpper, replacementWordUpper);
        copyContainer[i].textContent = copyContainer[i].textContent.replace(searchWordTitle, replacementWordTitle);

    }
};
var btnTranslate = document.querySelector("#btn-translate");
//Here we are telling the browser which element should it refer to using its id and storing that refernece into a variable

var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


// console.log("Clicked!");   Prints 'clicked' when someone presses the button.
// console.log("input", txtInput.value);    When there is some 'input', show that input to the user.

// outputDiv.innerText = "jhfgafihafh"   this is the translated value

// txtInput.value (prints the input that the user wrote)

// Here we are telling the browser to add an event, meaning, something should happen when we 'click' the button. Then we pass a special function and then put up what actually we do want, which is printing the string in this case.

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";


var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert('Something wrong with server, pls try again later!');
}

function clickHandler() {
  var inputText = txtInput.value;

  fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => { 
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler) 
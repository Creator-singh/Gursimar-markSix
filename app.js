var btnTranslate = document.querySelector("#button-translate");
var txtInput = document.querySelector("#text-input");
var txtOutput = document.querySelector("#text-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";


function generateURL(inputText){
    return serverURL + "?" + "text=" + inputText;
}

function errorHandler(error){
    alert("Something went wrong! Try again later.")
}

function clickHandler(){
    var inputText = txtInput.value;
    fetch(generateURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText; 
        })
        .catch(errorHandler)
};


btnTranslate.addEventListener("click", clickHandler);
var btnTranslate = document.querySelector("#button-translate");
var txtInput = document.querySelector("#text-input");
var txtoutput = document.querySelector("#text-output");


btnTranslate.addEventListener("click", function clickHandler() {
    txtoutput.innerText = "nfbfb " + txtInput.value;
})
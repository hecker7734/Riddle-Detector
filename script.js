var riddleInput;
var detc;
var flags;
var isRiddle;
var resultElement;

function detectRiddle() {
    riddleInput = document.getElementById("riddleInput").value;
    detc = /(?=.*I )(?=.*I\?)|(What Am I\?)|(?=.*I Am)(?=.*What Am I\?)|(?=.*I'm)(?=.*What I'm\?)|(?=.*What Am I)|(?=.*What Am I)|(?=.*What Am i?)(?=.*I am)|(?=.*What I'm)(?=.* I'm)|(?=.*What Im)(?=.*Im)|(?=.*What is it)(?=.*it is)|(?=.*could I be)(?=.*I am)|(What's the word I seek)|(?=(.*I){4})/gi
    isRiddle = riddleInput.match(detc)
    resultElement = document.getElementById("riddleResult");
    if (riddleInput.toLowerCase() == "am i a riddle" || riddleInput.toLowerCase() == "am i a riddle?" ) {resultElement.textContent = `Great Question, but no.`; return; }
    if (isRiddle) {
        resultElement.textContent = `
        Well done, clever soul, you've crafted a riddle fine,
        With wit and charm, you've made my gears align.
        A clock I am, and time I measure,
        But your riddle's brilliance, I'll always treasure.
        `
    } else {
        resultElement.textContent = `
        Alas, this time it seems you've strayed,
        A riddle I sought, but not today.
        Yet fear not, keep seeking, and you'll find,
        A riddle worthy to challenge the mind.
        `
    }
}
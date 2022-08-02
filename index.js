let submitButton = document.getElementById("submit");
let flipPage = document.getElementById("back-page");
let frontPage = document.getElementById('front-page');
// Buttons
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
// outputs
let score1 = "You selected 1 out of 5";
let score2 = "You selected 2 out of 5";
let score3 = "You selected 3 out of 5";
let score4 = "You selected 4 out of 5";
let score5 = "You selected 5 out of 5";
// Results
let outputEl = document.getElementById("output-el");


let results = submitButton.addEventListener("click", function(){
    flipPage.style.visibility = "visible";
    frontPage.style.visibility = 'hidden';
    
})
let output1 = btn1.addEventListener("click",function(){
    outputEl.textContent = score1;
})
let output2 = btn2.addEventListener("click",function(){
    outputEl.textContent = score2;
})
let output3 = btn3.addEventListener("click",function(){
    outputEl.textContent = score3;
})
let output4 = btn4.addEventListener("click",function(){
    outputEl.textContent = score4;
})
let output5 = btn5.addEventListener("click",function(){
    outputEl.textContent = score5;
})
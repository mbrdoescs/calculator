const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
const operatorbutton = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const button0 = document.querySelector(".number0");
let firstnumber = "";
let operator = "";

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        display.textContent += button.textContent;
    })
});

clear.addEventListener("click", function() {
    display.textContent = "";
});

operatorbutton.forEach(function(button) {
    button.addEventListener("click", function() {
        display.textContent += button.textContent;
        operator = button.textContent;
    });
});


equals.addEventListener("click", function() {
    if (operator === "+" || operator === "-") {
        display.textContent = eval(display.textContent);
    }
    else if (operator === "x") {
        display.textContent = eval(display.textContent.replace("x", "*"));
    }
    else if (operator === "÷") {
        display.textContent = eval(display.textContent.replace("÷", "/"));
    }
});


const body = document.querySelector("body");
const theme = document.querySelectorAll(".settingsbutton");

theme.forEach(function(button) {
    button.addEventListener("click", function() {
        if (body.classList.contains("dark")) {

        body.classList.remove("dark");
        body.classList.add("light");

    }
    else {

        body.classList.remove("light");
        body.classList.add("dark");

    }

})});
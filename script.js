let visor;
let btn0;
let btn1;
let btn2;
let btn3;
let btn4;
let btn5;
let btn6;
let btn7;
let btn8;
let btn9;
let btnPlus;
let btnMinus;
let btnDivide;
let btnTimes;
let btnEquals;
let btnDecimal;
let calculado = false;

function action() {

    btnPlus.disabled = true;
    btnMinus.disabled = true;
    btnDivide.disabled = true;
    btnTimes.disabled = true;
    btnEquals.disabled = true;

    if (visor.value !== "") {
        let lastChar = visor.value[visor.value.length - 1];

        if (/[0-9]/.test(lastChar)) {
            btnEquals.disabled = false;

            if (visor.value === "0" || (visor.value.length === 1 && lastChar === "0")) {
                btnMinus.disabled = false;
            } else {
                btnPlus.disabled = false;
                btnDivide.disabled = false;
                btnTimes.disabled = false;
                btnMinus.disabled = false;
                btnDecimal.disabled = false;
            }
        } else if (/[+\-*/]/.test(lastChar)) {
            btnPlus.disabled = true;
            btnDivide.disabled = true;
            btnTimes.disabled = true;
            btnMinus.disabled = true;
        } else if (/[.]/.test(lastChar)) {
            btnDecimal.disabled = true;
        }
    } else {
        btnMinus.disabled = false;
    }
}

function addNum(num) {

    if (/[0-9]/.test(num) && calculado) {
        visor.value = "";
        calculado = false;
    }

    if (/[+\-*/]/.test(num) && calculado) {
        calculado = false;
    }

    visor.value += num;
    action();
}

function calculate() {

    if (visor.value === "") {
        visor.value = "";
        return;
    }

    visor.value = eval(visor.value);
    calculado = true;
    action();
}

function backspace() {
    console.log("Apagou");
    visor.value = visor.value.slice(0, -1);

    action();
}

function clearVisor() {
    console.clear();
    console.log("Limpando...\n\n\n");

    visor.value = "";
    action();
}

document.addEventListener("keydown", function (event) {

    event.preventDefault();

    switch (event.key) {
        case "Enter":
            calculate(); break;
        case "Backspace":
            backspace(); break;
        case "0":
            addNum(0); break;
        case "1":
            addNum(1); break;
        case "2":
            addNum(2); break;
        case "3":
            addNum(3); break;
        case "4":
            addNum(4); break;
        case "5":
            addNum(5); break;
        case "6":
            addNum(6); break;
        case "7":
            addNum(7); break;
        case "8":
            addNum(8); break;
        case "9":
            addNum(9); break;
        case "+":
            addNum("+"); break;
        case "-":
            addNum("-"); break;
        case "/":
            addNum("/"); break;
        case "*":
            addNum("*"); break;
        case ",":
            addNum("."); break;
        case ".":
            addNum("."); break;
    }

});

document.addEventListener("DOMContentLoaded", function () {
    visor = document.getElementById("visor");
    btn0 = document.getElementById("btn0");
    btn1 = document.getElementById("btn1");
    btn2 = document.getElementById("btn2");
    btn3 = document.getElementById("btn3");
    btn4 = document.getElementById("btn4");
    btn5 = document.getElementById("btn5");
    btn6 = document.getElementById("btn6");
    btn7 = document.getElementById("btn7");
    btn8 = document.getElementById("btn8");
    btn9 = document.getElementById("btn9");
    btnPlus = document.getElementById("btn+");
    btnMinus = document.getElementById("btn-");
    btnDivide = document.getElementById("btn/");
    btnTimes = document.getElementById("btn*");
    btnEquals = document.getElementById("btn=");
    btnDecimal = document.getElementById("btn.");
    action();
});
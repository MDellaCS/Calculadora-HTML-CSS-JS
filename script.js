let visor, btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btnPlus, btnMinus, btnDivide, btnTimes, btnEquals, btnDecimal, footer, calculado;

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
    footer = document.getElementById("footer");
    calculado = false;
    action();
});

async function action() {

    visor.classList.add('press');
    await delay(100);
    void visor.offsetWidth;
    visor.classList.remove('press');

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

    visor.value = visor.value.slice(0, -1);
    action();
}

async function clearVisor() {

    visor.classList.add('spin');
    visor.value = "";
    action();

    await delay(500);

    visor.classList.remove('spin');
    void visor.offsetWidth;
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

function sunkFooter() {
    var bodyHeight = document.body.clientHeight;
    var windowHeight = window.innerHeight;
    var footerHeight = footer.offsetHeight;

    if (bodyHeight + footerHeight < windowHeight) {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
        footer.style.left = '0';
        footer.style.right = '0';
    } else {
        footer.style.position = 'static';
    }
}

window.onload = sunkFooter;
window.onresize = sunkFooter;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
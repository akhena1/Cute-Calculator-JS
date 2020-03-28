'use strict';

var toctocElm = document.getElementById('toctoc');
var pinkPigElm = document.getElementById('pinkPig');
var resultInputElm = document.getElementById('result-input');
var operationInputElm = document.getElementById('operation-input');

var calculatorElm = document.getElementById('calculator');
var warningElm = document.querySelector('header p')
var bodyElm = document.getElementsByTagName('body')[0]

var audioElm = document.getElementById('audio')

let a;
let operator;
let b;

var realExpression = []
var displayExpression = []

toctocElm.onclick = function () {
    pinkPigElm.style.animation = "pinkPigForwards 4s ease-in  1 forwards"

    setTimeout(() => {
        pinkPigElm.style.animation = "none"
    }, 4050);
}

function handleDisplay() {
    displayExpression = realExpression.join('')
    operationInputElm.value = displayExpression
}

function handleExpression(num) {

    if(realExpression.length > 3){
        return alert('Uma coisa de cada vez meu caro amigo');
    }
    if (realExpression[0] && realExpression.length < 2) {
        typeof num === 'number' || num.valueOf() === "." ? (
            realExpression[0] = realExpression[0].toString() + num.toString()
        ) : (
                typeof num === 'string' && num.valueOf() === "+" || "-" || "*" || "/" ? (
                    realExpression.push(num)
                ) : (
                        realExpression[0] = realExpression[0] + num.toString()
                    )
            )

    } else if (realExpression[2]) {
        typeof num === 'number' ? (
            realExpression[2] = realExpression[2].toString() + num.toString()
        ) : (
                num.valueOf() === "+" || "-" || "*" || "/" ? (
                    realExpression.push(num)
                ) : (
                        typeof num === 'string' ? (
                            realExpression[2] = realExpression[2] + num.toString()
                        ) : (
                                console.log('Se você ta lendo isso algo deu muito errado')
                            )
                    )

            )
    } else {
        realExpression.push(num);
    }

    console.log(realExpression);
    handleDisplay();
}

function backspace() {
    realExpression.pop()
    console.log(realExpression)
    handleDisplay();
}

function cancelEntry() {
    realExpression = []
    console.log(realExpression)
    resultInputElm.value = ""
    handleDisplay();
}

function showResult() {

    var [a, operator, b] = realExpression

    switch (operator) {
        case "+": {
            let sumResult = resultInputElm.value = parseFloat(a) + parseFloat(b)
            operationInputElm.value = ''
            realExpression = []
            return sumResult;
        }
        case "-": {
            let subResult = resultInputElm.value = parseFloat(a) - parseFloat(b)
            operationInputElm.value = ''
            realExpression = []
            return subResult;
        }
        case "*": {
            let multResult = resultInputElm.value = parseFloat(a) * parseFloat(b)
            operationInputElm.value = ''
            realExpression = []
            return multResult;
        }
        case "/": {
            let divResult = resultInputElm.value = parseFloat(a) / parseFloat(b)
            operationInputElm.value = ''
            zeroDivisionAnimation(b);
            realExpression = []
            return divResult;
        }
        default: console.log('deu ruim my nigga')
    }

}
function handleB() {

}
function zeroDivisionAnimation(b) {
    if (b < 1) {
        calculatorElm.style.animation = "calculatorFall 6s ease-in-out 1 forwards"
        warningElm.style.color = 'red'
        warningElm.style.fontSize = '40px'
        warningElm.innerHTML = 'OHHH NOOO, I WARNED YOU'

        audioElm.play();
        var a = document.createElement('p');
        a.setAttribute('class', 'a')
        a.style.animation = 'a 5s ease-in 1 forwards'
        bodyElm.appendChild(a)
        a.innerHTML = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaAAAAAAaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'

        setTimeout(() => {
            a.innerHTML = ''
        }, 5000);
    }
}





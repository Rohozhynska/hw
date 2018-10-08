document.querySelectorAll('.numbers, .action, .perc').forEach(el=>el.addEventListener('click', num))

function num(e) {
    const target = e.target;
    const display = document.querySelector('.display')
    display.value += target.innerText;
}

document.querySelectorAll('.result').forEach(el=>el.addEventListener('click', result))

function result() {
    const display = document.querySelector('.display')
    const str = display.value
    for (let i = 1; i <= str.length; i++) {
        if (str[i] === "+") {

            let myDisp = str.split("+")
            let result = +myDisp[0] + (+myDisp[1])
            display.value = result
        } else if (str[i] === "-") {

            let myDisp = str.split("-")
            let result = +myDisp[0] - (+myDisp[1])
            display.value = result

        } else if (str[i] === "*") {
            let myDisp = str.split("*")
            let result = +myDisp[0] * (+myDisp[1])
            display.value = result

        } else if (str[i] === "/") {
            let myDisp = str.split("/")
            if (myDisp[1] === "0") {
                let result = 'Не можна так'
                display.value = result
            } else {
                let result = (+myDisp[0]) / (+myDisp[1])
                display.value = result
            }
        } else if (str[i] === "%") {
            let myDisp = str.split("%")
            let result = ((+myDisp[0]) / 100) * (+myDisp[1])
            display.value = result
        }

    }
}

document.querySelectorAll('.delete').forEach(el=>el.addEventListener('click', del))

function del() {
    const display = document.querySelector('.display')
    display.value = null;
}

document.querySelectorAll('.pi').forEach(el=>el.addEventListener('click', pi))

function pi() {
    const display = document.querySelector('.display')
    display.value = display.value + Math.PI

}
document.querySelectorAll('.sqrt').forEach(el=>el.addEventListener('click', sqrt))

function sqrt() {
    const display = document.querySelector('.display')
    if ((+display.value)<0){
        let result = 'Не можна так'
        display.value = result
    } else {
    display.value = Math.sqrt(+display.value)}

}
document.querySelectorAll('.ln').forEach(el=>el.addEventListener('click', ln))

function ln() {
    const display = document.querySelector('.display')
    if ((+display.value)<0){
        let result = 'Не можна так'
        display.value = result
    } else {
    display.value = Math.log(+display.value)}
}
document.querySelectorAll('.sin').forEach(el=>el.addEventListener('click', sin))

function sin() {
    const display = document.querySelector('.display')
    display.value = Math.sin(+display.value)

}
document.querySelectorAll('.cos').forEach(el=>el.addEventListener('click', cos))

function cos() {
    const display = document.querySelector('.display')
    display.value = Math.cos(+display.value)

}


// const box = document.querySelector(".box");

// const posX = document.getElementById("posX");
// const posY = document.getElementById("posY");

// box.addEventListener("mousemove", event => {
//     posX.innerHTML = event.screenX
//     posY.innerHTML = event.screenY
// })

// const plus = document.getElementById('plusButton')
// const minus = document.getElementById('minusButton')
// const num = document.getElementById('number')

// const plusNUm = e => {
//     if(num.innerText){
//         return num.innerText++
//     }
// }

// plus.onclick = e => {plusNUm()}

// const minusNum = e => {
//    if(num.innerText > 0){
//     return num.innerText--
//    }
// }

// minus.onclick = e => {minusNum()}


const input = document.getElementById('int')
const red = document.getElementById('red')
const green = document.getElementById('green')
const yellow = document.getElementById('yellow')
const tr = document.querySelectorAll('.trafficLights')

const changeLight = e => {
    if(input.value.trim() === ''){
        return false
    }else if
        (input.value === "stop"){
            red.style.backgroundColor = 'red'
    }else if(input.value === "go"){
        green.style.backgroundColor = 'green'
    }else if(input.value === 'ready'){
        yellow.style.backgroundColor = 'yellow'
    }else {
        alert('chose: stop, go, ready')
    }

    input.value = ''
}

input.onkeydown = e => {e.keyCode === 13 ?  changeLight() : false}
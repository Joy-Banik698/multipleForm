let next = document.querySelector('.next')
let next2 = document.querySelector('.next2')
let last = document.querySelector('.last')
let back = document.querySelector('.back')
let back2 = document.querySelector('.back2')
let form1 = document.querySelector('.form1')
let form2 = document.querySelector('.form2')
let form3 = document.querySelector('.form3')
let form4 = document.querySelector('.form4')
let inpu = document.querySelector('.inpu')
let inpu2 = document.querySelector('.inpu2')
let inpu3 = document.querySelector('.inpu3')
let inpu4 = document.querySelector('.inpu4')
let inpu5 = document.querySelector('.inpu5')
let inpu6 = document.querySelector('.inpu6')
let icon = document.querySelector('.i1')
let icon2 = document.querySelector('.i2')
let icon3 = document.querySelector('.i3')


inpu.addEventListener('keyup', () => {
    if (inpu.value == "") {
        inpu.setAttribute('style', 'border-bottom:2px solid red')
    } else {
        inpu.setAttribute('style', 'border-bottom:2px solid green')
    }
})
inpu2.addEventListener('keyup', () => {
    if (inpu2.value == "") {
        inpu2.setAttribute('style', 'border-bottom:2px solid red')
    } else {
        inpu2.setAttribute('style', 'border-bottom:2px solid green')
    }
})

next.addEventListener('click', () => {
    if ((inpu.value == "") && (inpu2.value == "")) {
        inpu.setAttribute('style', 'border-bottom:2px solid red')
        inpu2.setAttribute('style', 'border-bottom:2px solid red')
    } else if (inpu.value == "") {
        inpu.setAttribute('style', 'border-bottom:2px solid red')
    } else if (inpu2.value == "") {
        inpu2.setAttribute('style', 'border-bottom:2px solid red')
    } else {
        form1.setAttribute('style', 'left:-450px')
        form2.setAttribute('style', 'left:0')
        icon.setAttribute('class', 'fas fa-check-circle')
        icon.setAttribute('style', 'color:green')
        icon2.setAttribute('style', 'color:yellowgreen')
    }
})


inpu3.addEventListener('keyup', () => {
    if (inpu3.value == "") {
        inpu3.setAttribute('style', 'border-bottom:2px solid red')
    } else if (!(inpu3.value.includes('gmail.com'))) {
        inpu3.setAttribute('style', 'border-bottom:2px solid red')
    } else {
        inpu3.setAttribute('style', 'border-bottom:2px solid green')
    }
})
inpu4.addEventListener('keyup', () => {
    if (inpu4.value == "") {
        inpu4.setAttribute('style', 'border-bottom:2px solid red')
    } else {
        inpu4.setAttribute('style', 'border-bottom:2px solid green')
    }
})

next2.addEventListener('click', () => {

    if ((inpu3.value == "") && (inpu4.value == "")) {
        inpu3.setAttribute('style', 'border-bottom:2px solid red')
        inpu4.setAttribute('style', 'border-bottom:2px solid red')
    } else if (inpu3.value == "") {
        inpu3.setAttribute('style', 'border-bottom:2px solid red')
    } else if (inpu4.value == "") {
        inpu4.setAttribute('style', 'border-bottom:2px solid red')
    } else {
        form2.setAttribute('style', 'left:-450px')
        form3.setAttribute('style', 'left:0')
        icon2.setAttribute('class', 'fas fa-check-circle')
        icon2.setAttribute('style', 'color:green')
        icon3.setAttribute('style', 'color:yellowgreen')
    }
})

inpu5.addEventListener('keyup', () => {
    if (inpu5.value == "") {
        inpu5.setAttribute('style', 'border-bottom:2px solid red')
    } else {
        inpu5.setAttribute('style', 'border-bottom:2px solid green')
    }
})
inpu6.addEventListener('keyup', () => {
    if (inpu6.value == "") {
        inpu6.setAttribute('style', 'border-bottom:2px solid red')
    } else {
        inpu6.setAttribute('style', 'border-bottom:2px solid green')
    }
})

back.addEventListener('click', () => {
    form1.setAttribute('style', 'left:0px')
    form2.setAttribute('style', 'left:450')
    icon.setAttribute('class', 'fas fa-check-circle', )
    icon.setAttribute('style', 'color:yellowgreen')
})
back2.addEventListener('click', () => {
    form3.setAttribute('style', 'left:450px')
    form2.setAttribute('style', 'left:0')
    icon2.setAttribute('class', 'fas fa-check-circle', )
    icon2.setAttribute('style', 'color:yellowgreen')
})






last.addEventListener('click', () => {
    if ((inpu5.value == "") && (inpu6.value == "")) {
        inpu5.setAttribute('style', 'border-bottom:2px solid red')
        inpu6.setAttribute('style', 'border-bottom:2px solid red')
    } else if (inpu5.value == "") {
        inpu5.setAttribute('style', 'border-bottom:2px solid red')
    } else if (inpu6.value == "") {
        inpu6.setAttribute('style', 'border-bottom:2px solid red')
    } else if (inpu5.value !== inpu6.value) {
        inpu6.setAttribute('style', 'border-bottom:2px solid red')
    } else {
        form3.setAttribute('style', 'left:-450px')
        form4.setAttribute('style', 'left:0')
        icon3.setAttribute('class', 'fas fa-check-circle', )
        icon3.setAttribute('style', 'color:green')
    }
})
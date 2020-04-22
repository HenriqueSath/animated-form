const submit = document.querySelector('#btn')
const form = document.querySelector('form')
const inputEmail = document.querySelector('#mail')
const formPPass = document.querySelector('form div p.pass')
const formPMail = document.querySelector('form div p.mail')

submit.addEventListener('click', e => {
    e.preventDefault()

    usuario = inputEmail.value.substring(0, inputEmail.value.indexOf("@"));
    dominio = inputEmail.value.substring(inputEmail.value.indexOf("@") + 1, inputEmail.value.length);
    const inputPass = document.querySelector('#pass')

    if (inputPass.value !== '') {
        formPPass.classList.remove('show')
    } else {
        formPPass.classList.add('show')
    }

    if (inputEmail.value !== '' &&
        (usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {

        formPMail.classList.remove('show')
    } else {
        formPMail.classList.add('show')
    }

    if (inputEmail.value !== '' &&
        inputPass.value !== '' &&
        (usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {

        return form.classList.add('formHide')
    } else {
        form.classList.add('validateError')
    }

    const formError = document.querySelector('.validateError')
    if (formError) {
        formError.addEventListener('animationend', e => {
            if (e.animationName === 'nono') {
                form.classList.remove('validateError')
            }
        })
    }
})

form.addEventListener('animationstart', e => {
    e.preventDefault()
    if (e.animationName === 'down') {
        document.querySelector('body').style.overflow = 'hidden'
    }
})

form.addEventListener('animationend', e => {
    e.preventDefault()
    if (e.animationName === 'down') {
        form.style.display = 'none'
        document.querySelector('body').style.overflow = 'auto'
    }
})

/* squares */

//background 

const ulSquares = document.querySelector('.squares')

for (let i = 0; i < 11; i++) {
    const li = document.createElement('li')

    const random = (min, max) => Math.random() * (max - min) + min

    const size = Math.floor(random(10, 120))
    const position = random(1, 99)
    const delay = random(5, 0.1)
    const duration = random(24, 12)

    li.style.width = `${size}px`
    li.style.height = `${size}px`
    li.style.bottom = `-${size}px`

    li.style.left = `${position}%`

    li.style.animationDelay = `${delay}s`
    li.style.animationDuration = `${duration}s`
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`

    ulSquares.appendChild(li)
}
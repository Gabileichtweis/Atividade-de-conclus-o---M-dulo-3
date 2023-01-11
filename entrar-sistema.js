const formularioEntrar = window.document.getElementById('form')
console.log(formularioEntrar)

formularioEntrar.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const inputEmail = window.document.getElementById('email')
    inputEmail.addEventListener('focus', () =>{
        feedbackHTML.innerHTML = ''
        formularioEntrar.reset()
    })
    console.log(inputEmail.value)

    const inputPassword = window.document.getElementById('password')
    inputPassword.addEventListener('focus', () =>{
        feedbackHTML.innerHTML = ''
        formularioEntrar.reset()
    })
    console.log(inputPassword.value)

    const feedbackHTML = window.document.getElementById('feedback')

    if(inputEmail.value !== localStorage || inputPassword.value !== localStorage){
        feedbackHTML.innerHTML = 'Opss! E-mail ou senha incorretos'
    }
})

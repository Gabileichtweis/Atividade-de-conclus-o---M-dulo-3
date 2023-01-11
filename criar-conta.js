const formularioCriarConta = document.getElementById('form')
console.log(formularioCriarConta)

let cadastros = []

formularioCriarConta.addEventListener('submit', (ev) => {
    ev.preventDefault()

    

    const inputEmail = document.getElementById('email')
    inputEmail.addEventListener('focus', () => {
        feedbackHTML.innerHTML = ''
        formularioCriarConta.reset()
    })
    console.log(inputEmail.value)
    const senha1 = document.getElementById('password-1')
    senha1.addEventListener('focus', () => {
        feedbackHTML.innerHTML = ''
        formularioCriarConta.reset()
    })
    console.log(senha1.value)
    const senha2 = document.getElementById('password-2')
    senha2.addEventListener('focus', () => {
        feedbackHTML.innerHTML = ''
        formularioCriarConta.reset()
    })
    console.log(senha2.value)

    const feedbackHTML = document.getElementById('feedback')

    if(inputEmail === localStorage){
        feedbackHTML.innerHTML = 'E-mail já cadastrado!'
    }

    if(senha1 !== senha2){
        feedbackHTML.innerHTML = 'As senhas não conferem!'
    }
})


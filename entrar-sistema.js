const formularioEntrar = window.document.getElementById('form')
const listaCadastros = buscarLocalStorage('cadastros')

formularioEntrar.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const inputEmail = window.document.getElementById('email')
    inputEmail.addEventListener('focus', () =>{
        feedbackHTML.innerHTML = ''
    })

    const inputPassword = window.document.getElementById('password')
    inputPassword.addEventListener('focus', () =>{
        feedbackHTML.innerHTML = ''
    })

    const feedbackHTML = window.document.getElementById('feedback')

    const existe = listaCadastros.find((valor) => valor.email === inputEmail.value && valor.password === inputPassword.value)

    if(existe){
        window.location.href = './recados.html'
    } else {
        feedbackHTML.innerHTML = 'Opss! E-mail ou senha incorretos'
        return
    }
})


function buscarLocalStorage(chave){
    const dadosJSON = localStorage.getItem(chave)

    if(dadosJSON){
        const dadosConvertidos = JSON.parse(dadosJSON)
        return dadosConvertidos
    } else {
        return []
    }
}


const criarConta = document.getElementById('button-criar-conta')

criarConta.addEventListener('submit', (ev) => {
    ev.preventDefault()

    window.location.href = './criar-conta.html'
})
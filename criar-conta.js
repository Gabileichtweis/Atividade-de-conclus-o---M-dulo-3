const formularioCriarConta = document.getElementById('form')
const listaCadastros = buscarLocalStorage('cadastros')

formularioCriarConta.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const novoCadastro = {
        email: '',
        password: '',
    }

    const inputEmail = document.getElementById('email')
    inputEmail.addEventListener('focus', () => {
        feedbackHTML.innerHTML = ''
    })

    const senha1 = document.getElementById('password-1')
    senha1.addEventListener('focus', () => {
        feedbackHTML.innerHTML = ''
    })

    const senha2 = document.getElementById('password-2')
    senha2.addEventListener('focus', () => {
        feedbackHTML.innerHTML = ''
    })
    
    const feedbackHTML = document.getElementById('feedback')  

    const existe = listaCadastros.some((valor) => valor.email === inputEmail.value)
    if(existe){
        feedbackHTML.innerHTML = 'E-mail já cadastrado!'
        return
    } else {
        novoCadastro.email = inputEmail.value
    }

    if(senha1.value !== senha2.value){
        feedbackHTML.innerHTML = 'As senhas não conferem!'
        return
    } else {
        novoCadastro.password = senha1.value
    }

    listaCadastros.push(novoCadastro)
    guardarLocalStorage('cadastros', listaCadastros)
})

function guardarLocalStorage(chave, valor){
    const valorJSON = JSON.stringify(valor)

    localStorage.setItem(chave, valorJSON)
}

function buscarLocalStorage(chave){
    const dadosJSON = localStorage.getItem(chave)

    if(dadosJSON){
        const dadosConvertidos = JSON.parse(dadosJSON)
        return dadosConvertidos
    } else {
        return []
    }
}


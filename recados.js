const usuarioLogado = buscarLocalStorage('usuarioLogado')

if(!usuarioLogado.email) {
    window.location.href = './entrar-sistema.html'
}

const formularioRecados = document.getElementById('form-recados')
const tbody = document.getElementById('tbody')

document.addEventListener('DOMContentLoaded', preencherTabela())

formularioRecados.addEventListener('submit', (ev) => {
    ev.preventDefault()
    
    const inputTitulo = document.getElementById('retangulo-form-titulo')
    const inputDescricao = document.getElementById('retangulo-form-descricao')

    const recadosUsuario = {
        titulo: inputTitulo.value,
        descricao: inputDescricao.value

    }

    usuarioLogado.recados.push(recadosUsuario)
    guardarLocalStorage('usuarioLogado', usuarioLogado)
    salvarRecados()

    preencherTabela()
})



function preencherTabela(){
    tbody.innerHTML = ''

    usuarioLogado.recados.forEach((valor, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${valor.titulo}</td>
                <td>${valor.descricao}</td>
                <td>
                    <button id='button-editar'>Editar</button>
                    <button onclick="apagar(${index})" id='button-apagar'>Apagar</button>
                </td>
        </tr>
      `
    })
}

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
        return {}
    }
}

function salvarRecados(){
    const listaUsuario = buscarLocalStorage('cadastros')

    const acharUsuario = listaUsuario.findIndex((valor) => valor.email === usuarioLogado.email)
 
    listaUsuario[acharUsuario].recados = usuarioLogado.recados
 
    guardarLocalStorage('cadastros', listaUsuario)
}

function apagar(index){
    const novosRecados = usuarioLogado.recados.filter((valor, indice) => {
        return indice !== index
    })

    usuarioLogado.recados = novosRecados

    guardarLocalStorage('usuarioLogado', usuarioLogado)
    salvarRecados()
    preencherTabela()    
}

function sair(){
    window.location.href = './entrar-sistema.html'
}
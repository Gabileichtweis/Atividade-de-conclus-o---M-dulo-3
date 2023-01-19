const usuarioLogado = buscarLocalStorage('usuarioLogado')
console.log(usuarioLogado)

if(!usuarioLogado.email) {
    window.location.href = './entrar-sistema.html'
}

const formularioRecados = document.getElementById('form-recados')
const tbody = document.getElementById('tbody')

formularioRecados.addEventListener('submit', (ev) => {
    ev.preventDefault()
    
    const inputTitulo = document.getElementById('retangulo-form-titulo')
    const inputDescricao = document.getElementById('retangulo-form-descricao')

    const recadosUsuario = {
        titulo: inputTitulo.value,
        descricao: inputDescricao.value

    }
    console.log(recadosUsuario);

    usuarioLogado.recados.push(recadosUsuario)
    console.log(usuarioLogado);

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
                    <button id='button-apagar'>Apagar</button>
                    <button id='button-editar'>Editar</button>
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

/* function apagar{
    filter
} */
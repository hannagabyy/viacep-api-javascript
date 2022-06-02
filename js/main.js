'use strict';

const limparFormulario = (data) => {
    document.getElementById('endereco').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";
}

const preencherFormulario = (data) => {
    
    document.getElementById('endereco').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('cidade').value = data.localidade;
    document.getElementById('estado').value = data.uf;
}

// const eNumero = (cep) =>  /^[0-9]+$/.test(cep);
// const cepValido = (cep) => cep.length === 8 && eNumero(cep);
//  /^[0-9]+$/ = verifica se começa e termina com numeros podendo ser 1 numero ou mais

const pesquisarCep = () =>{
    limparFormulario();
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    if(!cep){
        // Se o cep tiver vazio no caso vai retornar true
        return ;
    }
    fetch(url)
    .then(response => response.json())
    .then(function(data) {
        if(data.hasOwnProperty('erro')){
            document.getElementById('endereco').value = 'CEP não encontrado!';
        }else{
            preencherFormulario(data);
        }
        
    })
    .catch((erro) => {
        document.getElementById('endereco').value = 'CEP inválido!';
    });
}

document.getElementById('cep')
        .addEventListener('focusout',pesquisarCep);
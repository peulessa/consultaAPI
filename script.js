async function buscaEndereco(cep){
    try{
        let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let cepConvertido = await consultaCep.json()
        if(cepConvertido.erro){
            throw Error('Esse cep não existe')
        }
        
        let endereco = document.querySelector('#endereco')
        let bairro = document.querySelector('#bairro')
        let cidade = document.querySelector('#cidade')
        let estado = document.querySelector('#estado')

        endereco.value = cepConvertido.logradouro
        bairro.value = cepConvertido.bairro
        cidade.value = cepConvertido.localidade
        estado.value = cepConvertido.uf

        return cepConvertido

    } catch (erro) {
        window.alert('Cep Inválido')
    }
}

let campoCep = document.getElementById('cep');
campoCep.addEventListener('focusout', () => {
    buscaEndereco(campoCep.value)
})










// let ceps = ['01001000','01001001']
// let conjuntoCeps = ceps.map(valores => (buscaEndereco(valores)));
// Promise.all(conjuntoCeps)
// .then(respostas => (console.log(respostas)))
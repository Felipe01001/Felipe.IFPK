const estadosBrasileiros = [
    { nome: 'Acre', sigla: 'AC' },
    { nome: 'Alagoas', sigla: 'AL' },
    { nome: 'Amapá', sigla: 'AP' },
    { nome: 'Amazonas', sigla: 'AM' },
    { nome: 'Bahia', sigla: 'BA' },
    { nome: 'Ceará', sigla: 'CE' },
    { nome: 'Distrito Federal', sigla: 'DF' },
    { nome: 'Espírito Santo', sigla: 'ES' },
    { nome: 'Goiás', sigla: 'GO' },
    { nome: 'Maranhão', sigla: 'MA' },
    { nome: 'Mato Grosso', sigla: 'MT' },
    { nome: 'Mato Grosso do Sul', sigla: 'MS' },
    { nome: 'Minas Gerais', sigla: 'MG' },
    { nome: 'Pará', sigla: 'PA' },
    { nome: 'Paraíba', sigla: 'PB' },
    { nome: 'Paraná', sigla: 'PR' },
    { nome: 'Pernambuco', sigla: 'PE' },
    { nome: 'Piauí', sigla: 'PI' },
    { nome: 'Rio de Janeiro', sigla: 'RJ' },
    { nome: 'Rio Grande do Norte', sigla: 'RN' },
    { nome: 'Rio Grande do Sul', sigla: 'RS' },
    { nome: 'Rondônia', sigla: 'RO' },
    { nome: 'Roraima', sigla: 'RR' },
    { nome: 'Santa Catarina', sigla: 'SC' },
    { nome: 'São Paulo', sigla: 'SP' },
    { nome: 'Sergipe', sigla: 'SE' },
    { nome: 'Tocantins', sigla: 'TO' }
  ];
  
  
function abrirOutros(){
    console.log ("fora")
    const genero = document.getElementsByName("genero")
    const outros = document.querySelector("#outros")

    if (genero[2].checked){
        outros.disabled = false
        console.log ("dentro")
    }else {
        outros.disabled=true
        outros.value=""
    }
}
function abrirEstados(){
    const nacionalidade = document.getElementById("nacionalidade")
    const naturalidade = document.getElementById("naturalidade")
    const natLabel =document.getElementById("natLabel")

    if (nacionalidade.value == "BR"){
        for (let i=0; i<estadosBrasileiros.length ;i++){
        let option = document.createElement('option')
        option.text = estadosBrasileiros[i].nome
        option.setAttribute('value', estadosBrasileiros[i].sigla)
        naturalidade.appendChild(option)
        }  
    naturalidade.hidden = false
    natLabel.hidden =false
}else{
        naturalidade.hidden = true
        natLabel.hidden = true
    }

    // if (nacionalidade.value == "BR"){
    //     naturalidade.hidden = false
    //     natLabel.hidden = false
    // }else {
    //     naturalidade.hidden = true
    //     natLabel.hidden = true

    // }

}
function togglePass (){
    const senha1 = document.querySelector('#senha1')
    const senha2 = document.querySelector('#senha2')
    const botaoSenha = document.getElementById('botaoSenha')

    if (senha1.type == 'password' || senha2.type == 'password'){
        senha1.type='text'
        senha2.type='text'
        botaoSenha.textContent='Desver'
    }else{
        senha1.type='password'
        senha2.type='password'
        botaoSenha.textContent=''

    }
}
function conferirSenha(){
    const senha1 = document.querySelector('#senha1')
    const senha2 = document.querySelector('#senha2')

    if(senha2.value != "")
    if (senha1.value != senha2.value){
        senha1.classList.add('vermelho')
        senha2.classList.add('vermelho')
        } else{

    }
}

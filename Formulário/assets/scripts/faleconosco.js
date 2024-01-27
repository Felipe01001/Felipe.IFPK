function abrirOutros() {
    const genero = document.getElementsByName("genero")
    const outros = document.getElementById("outros")
        if(genero[2].checked){
            outros.disabled = false
        }else {
            outros.disabled = true
        }
}
function togglePass(){
    const senha1 = document.querySelector("#senha1")
    const senha2 = document.querySelector("#senha2")
    if (senha1.type == "password" || senha2.type == "password"){
        senha1.type = "text"
        senha2.type = "text"
    } else {
        senha1.type = "password"
        senha2.type = "password"
    }
}
function pesquisarCEP(){
    const cep = document.getElementById("cep").value

    if (cep == ""){
         alert("Cep não preenchido")
        }else if (cep.length != 8){
            alert("Cep deve ter 8 digitos")
        }
        else{
            viaCep(cep)
        }
}
function viaCep (cep){
    fetch (`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(response => {
       // console.log (response)
        document.getElementById('rua').value=response.logradouro
        document.getElementById('bairro').value=response.bairro
        document.getElementById('cidade').value=response.localidade
        document.getElementById('estado').value=response.uf
    })
}


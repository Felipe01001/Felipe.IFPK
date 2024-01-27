function dizerOla () {
    //alert("Olá, Mundo!")
    let contador = 0
}
function zerar (){
    document.getElementById('cont').innerHTML = 0
}
function contador (){
    let contador = Number(document.getElementById('cont').innerHTML)
    contador ++
    document.getElementById('cont').innerHTML = contador
    console.log(contador)
}
function inserirTexto(){
    let texto = prompt ("Digite um texto")
    document.getElementById('texto').value = texto
}
function mult10(){
    let contador = document.getElementById('cont')
    contador.innerHTML = Number(contador.innerHTML)*10

}
function verificar(){
    var numero = document.getElementById("txtm")
    var tab = document.getElementById("seltab")


if ( numero.value.length == 0 )
{
window.alert("Favor digite um número")
} else {
var multi = Number(numero.value)
tab.innerHTML = ""
for ( var index = 1 ; index <= 10 ; index++)
{
    var item = document.createElement("option")
    item.text = `${multi} X ${index} = ${multi * index}`
    tab.appendChild(item)

}
}

}

function Carregar(){
var agora = new Date()
var horaDia = agora.getHours()
var turno = window.document.getElementById('msg')
var paisagem = window.document.getElementById('foto')

if ( horaDia >= 0 && horaDia < 12 ) { 
    turno.innerHTML = `Tenha um <b>Bom Dia</b>, agora são <b>${horaDia}</b> horas.`, 
    document.body.style.backgroundColor = "#FFD700"
} else { if ( horaDia >= 12 && horaDia < 18) 
    {paisagem.innerHTML = `<img src="tarde.jpg"></img src>`, 
    turno.innerHTML = `Tenha uma <b>boa tarde</b>, agora são <b>${horaDia}</b> horas.`,
 document.body.style.backgroundColor =  "#D2691E"
} else { paisagem.innerHTML = `<img src="noite.jpg"></img src>`, 
turno.innerHTML = `Tenha uma <b>Boa Noite</b>, agora são <b>${horaDia}</b> horas.`, 
document.body.style.backgroundColor =  "#008B8B"}
}
}
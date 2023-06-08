var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if ( hora < 12 ) { console.log(`Estamos no período da manhã.`)
} else { if ( hora >=12 && hora < 18){ console.log(`Agora está de tarde.`)
} else { console.log(`Agora já anoiteceu :O.`)}
}
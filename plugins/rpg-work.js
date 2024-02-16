let handler = async (m, { conn, isPrems }) => {
    const fkontak = {
        "key": {
            "participants": "0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }
    let time = global.db.data.users[m.sender].lastwork + 3000000
    if (new Date - global.db.data.users[m.sender].lastwork < 3000000) throw `*Eh chambeador, esperá ${msToTime(time - new Date())} antes de volver a la chamba.*`
    let user = global.db.data.users[m.sender]
    let premium = user.premium
    
    let exp = `${pickRandom([10000, 18000, 25000, 30000, 37000, 44000, 50000, 55000, 60000, 65000])}` * 1
    let exppremium = `${pickRandom([85000, 99099, 100500, 116000, 120650, 134079, 150000])}` * 1

    const recompensas = {
        exp: premium ? exppremium : exp
      }
    let texto = ''
    for (let reward of Object.keys(recompensas)) {
        if (!(reward in user)) continue
        user[reward] += recompensas[reward]
        texto += `_${recompensas[reward]}_`
    }

    global.db.data.users[m.sender].exp += exp * 1


    await conn.reply(m.chat, `*${pickRandom(global.work)}* ${texto} *EXP*⚡`, fkontak, m)

    global.db.data.users[m.sender].lastwork = new Date * 1
}
handler.help = ['work']
handler.tags = ['xp']
handler.command = ['work', 'trabajar', 'chambear']
handler.fail = null
handler.exp = 0
handler.register = true
handler.rowner = false
export default handler

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return minutes + "m " + seconds + "s "
}

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}

global.work = [
    "Trabajaste como negro, y encima ganás",
 "Trabaja para una empresa militar privada, ganando",
 "Organiza un evento de cata de vinos y obtiene",
 "Moderaste el grupo cuando Sodica no estaba. el pago fue",
 "iba caminando por la calle y te encontraste mil sopes. Ganaste",
 "ayudarte con el grupo mientras los admin no estaba el pago fue",
 "Te secuestran y te llevan a un coliseo subterráneo donde luchaste contra monstruos con personas que nunca antes habías conocido. Luchaste tanto que tuviste que matar muchos hombres y mujeres porque habia una enfermedad que convertia a zombies y tenias que matarlos porque te iban a matar a vos. Al final tuviste que matar a tus amigos porque sospechabas que estaban infectados por el virus T0M1-G0RD0-P7T0 y al final te fuiste a una isla abandonada donde no habian humanos, por lo tanto estaba limpia y pudiste vivir solo hasta el fin de tus dias. Ganaste",
 "Te limpiaste el culo y ganaste", 
 "Desarrollas juegos para ganarte la vida y ganas", 
 "¿Por qué este comando se llama trabajo? Ni siquiera estas haciendo nada. Sin embargo, ganas", 
 "Trabajaste en la oficina horas extras por", 
 "Trabajas como secuestrador y ganás", 
 "Alguien vino y representa una obra de teatro. Por mirar la obra donde una gorda canta por 2 horas seguidas como hace para cantar tanto dios mio que gorda insoportable aguanten las operas donde no hay mujeres con sobrepeso, alto embole escuchar y ver a una gorda cantar, que se dediquen a bajar de peso porque no llegan a los 50 años gordas llenas de grasa. En fin, te dieron", "Compraste y vendiste tus muñecos todos waskeados y ganaste",
 "Trabajas en el restaurante y ganás", 
 "Trabajas 10 minutos en un 'Pizzas El Dogor'. Ganaste", 
 "Trabajas como escritor y ganas", 
 "Revisas tu wallet de bitcoins Y no tenías nada porque sos un pobre de mierda que no sabe hacer nada, pero ganás", 
 "Ves a alguien renegando por subir una caja a su auto, te apurás a ayudarlo antes de que se lastime. Después de ayudarlo, amablemente te dan", 
 "Desarrollas juegos para ganarte la vida y ganás", 
 "Ganas un concurso de ser pelotudo. El premio es", 
 "Trabajas todo el dia en la empresa SodicaCrew™ por", 
 "Ayudaste a moderar un grupo mientras SodicaBot estaba saturado. Ganaste", 
 "Diseñaste un logo por", 
 "Trabajaste como albañil por", 
 "Trabajas como prostituta por", 
 "La demanda de juegos para teléfonos aumentó, por lo que programaste un nuevo juego lleno de micro-transacciones. Con tu nuevo juego ganaste un total de", 
 "Trabajas como actor de voz para Bob Esponja y te las arreglaste para ganar", 
 "Estabas cultivando semillas como un negro esclavo de mierda y ganaste", 
 "Trabajas como militante de Javier Milei y ganaste", "Agarraste la pala y ganaste", 
 "Trabajas como artista saksjak re pobre. Ganaste",
 "ARRIBA JAVIER MILEI. Por ser libertario ganaste"
]

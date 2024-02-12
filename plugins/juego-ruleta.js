//CÓDIGO CREADO POR elrebelde21 : https://github.com/elrebelde21
const handler = async (m, {conn, text, isPrems}) => {

    const date = global.db.data.users[m.sender].juegos + 10800000; //10800000 = 3 hs 
    if (new Date - global.db.data.users[m.sender].juegos < 10800000) throw `『⏰』𝙀𝙨𝙥𝙚𝙧𝙖 : ${msToTime(date - new Date())} 𝙥𝙖𝙧𝙖 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙟𝙪𝙜𝙖𝙧 `
    if (global.db.data.users[m.sender].exp < 0 || global.db.data.users[m.sender].money < 0 || global.db.data.users[m.sender].limit < 0) return m.reply(`No tenés suficientes recursos. no se te cobra nada, pero en el caso de que pierdas no te podemos quitar nada. Tenés los diamantes o las monedas en negativo.`)
    let user = global.db.data.users[m.sender]
    const prem = 3600000
    const exp = Math.floor(Math.random() * 850000)
    const diamond = Math.floor(Math.random() * 25)
    const money = Math.floor(Math.random() * 85000)
    let rulet = ['text', 'text2', 'text3', 'text5', 'text6']; 
    let ruleta = rulet[Math.floor(Math.random() * 6)]
    global.db.data.users[m.sender].juegos = new Date * 1;
    if (ruleta === 'text') return m.reply(`Buena suerte!!! 🐞🍀\n*Obtenés:* ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp) 
    if (ruleta === 'text2') return m.reply(`jaja re malo, perdiste: ${exp} XP`).catch(global.db.data.users[m.sender].exp -= exp) 
    if (ruleta === 'text3') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'demote').catch(m.reply(`Te tocó dejar de ser admin`))
    if (ruleta === 'text5') return m.reply(`*GANASTE PA* 🎰\n*Recompensa:* ${diamond} 💎`).catch(global.db.data.users[m.sender].diamond += diamond) 
    if (ruleta === 'text6') return m.reply(`👑 Ganaste premium por: Una hora ⏰`).catch(global.db.data.users[m.sender].premium += prem) 
    }
    handler.help = ['game'];
    handler.tags = ['xp'];
    handler.command = /^(ruletas|ruleta)$/i
    handler.fail = null;
    handler.group = true
    handler.register = true
    export default handler;
    
    function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
    return hours + " Hora(s) " + minutes + " Minuto(s)"}
    
    
    function pickRandom(list) {
      return list[Math.floor(list.length * Math.random())];
    }
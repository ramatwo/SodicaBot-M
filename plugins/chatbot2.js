let cooldowns = {}

let handler = m => m
handler.all = async function (m) {
    let chat = global.db.data.chats[m.chat]
    let name = conn.getName(m.sender)
    
    // Configuración de cooldown por comando
    let commandCooldowns = {
        callate: 20, // Establece el cooldown para el comando "callate" en segundos
        que: 5,      // Establece el cooldown para el comando "que" en segundos
        macaco: 50,
        mexicano: 50,
        mono: 50,
        mejicano: 50,
        rra: 5,
        13: 50,
        trece: 50,
        erizo: 50,
        erizos: 50,
    }

    let command = m.text.toLowerCase().split(' ')[0].replace(/[^a-zA-Z0-9]/g, '') // Obtener el primer segmento de texto como el comando
    
    // Verificar si el comando tiene un cooldown activo
    if (cooldowns[command]) {
        let elapsedTime = (Date.now() - cooldowns[command]) / 1000; // Conversor a segundos
        let cooldownTime = commandCooldowns[command] || 3; // Configura el cooldown predeterminado si no se especifica en el objeto commandCooldowns

        if (elapsedTime < cooldownTime) {
            // El comando está en cooldown, no ejecutar y salir
            return
        }
    }

    // Establecer el tiempo de ejecución actual para el comando
    cooldowns[command] = Date.now();

    if (/^callate$/i.test(m.text)) {
        let teks = `
${pickRandom([`callame`])}
`.trim()
        conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})
    }

    if (/^que$/i.test(m.text)) {
        let teks = `
${pickRandom([`sito`, `so`])}
`.trim()
        conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})
    }

    // Agrega más bloques if para otros comandos según sea necesario
    if (/^macaco|mono|mexicano|mejicano$/i.test(m.text)) {
        let teks = `
${pickRandom([`CUIDADO VIENEN LOS MEXICANOS\n🙉🙉🙉🙉🙉🙉`, `My mexican reaction: 🙉🙉🙉`])}
`.trim()
        conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})
    }


    if (/^rra$/i.test(m.text)) {
        let teks = `
${pickRandom([`eres.`, `sos.`])}
`.trim()
        conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})
    }

    if (/^13|trece$/i.test(m.text)) {
        let teks = `
${pickRandom([`agarrala que crece jsdkajsak`])}
`.trim()
        conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})
    }


    if (/^erizo|erizos$/i.test(m.text)) {
        let teks = `
${pickRandom([`🦔`, `🦔🦔🦔`])}
`.trim()
        conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})
    }


    return !0;
}

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

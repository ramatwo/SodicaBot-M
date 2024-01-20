let cooldowns = {} // Almacenar el tiempo de espera por chat

let handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
    let id = m.chat

    if (id in cooldowns) {
        const timeLeft = (cooldowns[id] - Date.now()) / 1000
        if (timeLeft > 0) {
            conn.reply(m.chat, `*⛃➭⛔ ∫ Espera ${timeLeft.toFixed(1)} segundos antes de volver a usar el comando*`, m)
            return
        }
    }

    if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
    }

    let pesan = args.join` `
    let oi = `*➭* Mensaje: ${pesan}`
    let teks = `╭━〔 *🚨🚨INVOCANDO A TODOS🚨🚨* 〕━⬣\n\n${oi}\n\n`
for (let mem of participants) {
teks += `┃⊹ ${readMore}@${mem.id.split('@')[0]}\n`
}
teks += `┃`
teks += `┃`
teks += `╰━━━━━[ *${wm}* ]━━━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) })

    // Establecer el tiempo de espera de 5 minutos (300 segundos)
    cooldowns[id] = Date.now() + 300000
}

handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true

export default handler
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
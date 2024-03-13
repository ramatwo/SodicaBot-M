let cooldowns = {} // Almacenar el tiempo de espera por chat

let handler = async(m, { isOwner, isAdmin, conn, participants, args }) => {
    let id = m.chat
    if (id in cooldowns) {
        const timeLeft = (cooldowns[id] - Date.now()) / 1000
        if (timeLeft > 0) {
            conn.reply(m.chat, `*⫹⫺ ➭⛔ ∫ No explotes el comando. Esperá ${timeLeft.toFixed(1)} segundos.*`, m)
            return
        }
    }

if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let pesan = args.join` `
let oi = `*➭* Mensaje: ${pesan}`
let teks = `╭━〔 *🚨🚨INVOCANDO A TODOS🚨🚨* 〕━⬣\n\n${oi}\n\n${readMore}`
for (let mem of participants) {
teks += `┃⊹ @${mem.id.split('@')[0]}\n`}
teks += `┃\n`
teks += `╰━━━━━[ *${wm}* ]━━━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, ) 

cooldowns[id] = Date.now() + 300000
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
handler.register = true
export default handler
import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
await m.reply(`⬇️ *ESE ES SU NUMERO DE SERIE* ⬇️`.trim())
await m.reply(`${sn}`.trim())
}
handler.help = ['miserial']
handler.tags = ['xp']
handler.command = /miserial/i
handler.register = true
export default handler

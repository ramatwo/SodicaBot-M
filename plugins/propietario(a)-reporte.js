let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}*Escribí el reporte*\n\n*Ejemplo:*\n*${usedPrefix + command} el comando ${usedPrefix}infobot no funciona. o ${usedPrefix + command} el usuario +54xxxxxxxx está usando al bot de forma malintencionada.*\n\n*𝙒𝙧𝙞𝙩𝙚 𝙩𝙝𝙚 𝙧𝙚𝙥𝙤𝙧𝙩*\n\n*𝙀𝙓𝘼𝙈𝙋𝙇𝙀:*\n*${usedPrefix + command} the command ${usedPrefix}owner it does not work.*`
if (text.length < 8) throw `⫹⫺ ➭⛔ ∫ *Mínimo 10 caracteres para hacer El Reporte. NO ENVIE REPORTES FALSOS O SERÁS BANEADO PERMANENTEMENTE.*`
if (text.length > 1000) throw `${fg} 😼 *Máximo 1000 caracteres para hacer El Reporte.*\n\n😼 *Maximum 1000 characters to make the Report.*`
let teks = `*╭━━[ NUEVO REPORTE ]━━━⬣*\n*┃*\n*┃* *Número:*\n┃ ✦ Wa.me/${m.sender.split`@`[0]}\n*┃*\n*┃* *Reporte:*\n*┃* ✦ ${text}\n*┃*\n*╰━━━━━━━━━━━━━━━━━━⬣*`
//conn.reply('19393844141@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
//contextInfo: {
//mentionedJid: [m.sender]
//}})
conn.reply('5491162480909@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`*✅ ∫ Gracias por tu reporte, nos ayuda mucho a mejorar el bot.*\n\n*El reporte fue enviado a los administradores de Sodica. En caso de ser un reporte basura/falso/inecesario vas a ser baneado permanentemente.*`)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler

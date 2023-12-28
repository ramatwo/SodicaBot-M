let handler = async (m, { text, usedPrefix }) => {
  let user = global.db.data.users[m.sender]
    if (!text) return m.reply(`*⛔ ∫ Poné un motivo*`)
      if (text.length < 3) return m.reply(`⛔ ∫ Haceme el favor y poné bien el motivo ¿querés? no cuesta tanto.`)
  user.afk = + new Date
  user.afkReason = text
  m.reply(`*✅ ∫ Entendido, modo afk activado.*`)}
  handler.help = ['afk [alasan]']
  handler.tags = ['main']
  handler.command = /^afk$/i
  handler.register = true
  export default handler
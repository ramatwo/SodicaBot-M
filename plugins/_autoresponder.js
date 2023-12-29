import { sticker } from '../lib/sticker.js'

let handler = m => m

handler.all = async function (m, {conn}) {
  let chat = global.db.data.chats[m.chat]
  
  if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
    // Cambia el código del sticker por el envío del texto "¿Qué pasa?"
    this.reply(m.chat, 'porno gay', null, { contextInfo: { mentionedJid: [this.user.jid] }})
  }

  return !0
}

export default handler

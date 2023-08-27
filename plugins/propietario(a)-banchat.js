let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply(`Listo.`)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat|bansb|banchat2$/i
handler.botAdmin = true
handler.admin = true 
export default handler

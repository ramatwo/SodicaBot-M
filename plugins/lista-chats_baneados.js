let handler = async (m, { conn }) => {
let ban = global.db.data.chats    
let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    
let caption = `*╭•·––| 💬 GRUPOS BANEADOS |––·•*
│ *Total: ${chats.length} Chats* ${chats ? '\n│\n' + chats.map(([jid], i) =>`
│ ${i + 1}. ${conn.getName(jid) == undefined ? 'Sin grupos baneados' : `*GRUPO BANEADO*`}
│ ${jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*`
await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })}

handler.command = /^chat(s)?baneado(s)?|list(a)?chat(s)?|list(a)?ban(chat(s)?)?$/i

export default handler

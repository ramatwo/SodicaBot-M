
import MessageType from '@adiwajshing/baileys'

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*ÉXITO*`, m)
        global.db.data.users[m.sender].money = 0
        global.db.data.users[m.sender].limit = 0
        //global.db.data.users[m.sender].level = Infinity
        
}
handler.help = ['cheat']
handler.tags = ['owner']
handler.command = /^arreglarbug$/i
handler.rowner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
//handler.money = 0

export default handler

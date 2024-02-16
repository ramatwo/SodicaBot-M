
import MessageType from '@adiwajshing/baileys'

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*ÉXITO*`, m)
        global.db.data.users[m.sender].lastrob = 1
        //global.db.data.users[m.sender].limit = 0
        //global.db.data.users[m.sender].level = Infinity
        
}
handler.help = ['cheat']
handler.tags = ['owner']
handler.command = /^coldown0$/i
handler.owner = true

//handler.money = 0

export default handler

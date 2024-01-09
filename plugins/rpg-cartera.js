let handler = async (m, { conn}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let imagencita = "./media/menus/velocidad.bat"
let user = global.db.data.users[who]
let premium = user.premium
const cartera = {
    economia: {
    exp: true,
    limit: true,
    money: true,
  },
}
const recursos = Object.keys(cartera.economia).map(v => user[v] && `*${global.rpgshop.emoticon(v)} ⇢ ${user[v]}*`).filter(v => v).join('\n').trim()
let cart = `👝 ⇢ Wallet de ${name}\n\n🎟️ *Usuario VIP ⇢* ${premium ? '✅' : '❌'}\n${recursos}`
await conn.sendFile(m.chat, imagencita, 'Wallet', cart, fkontak )
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal2', 'cartera', 'wallet', 'cartera2', 'balance2'] 
export default handler
handler.register = true

let ro = 10000
let handler = async (m, { }) => {
let time = global.db.data.users[m.sender].lastrob + 7200000
if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `*⏱️ ∫ Esperá ${msToTime(time - new Date())}*`
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
if (!who) throw `*⛃➭⛔ ∫ Etiquetá a alguien para robar.*`
if (!(who in global.db.data.users)) throw `*⛃➭⛔ ∫ Este usuario no está en la base de datos.*`
let users = global.db.data.users[who]
let rob = Math.floor(Math.random() * ro * 2)
if (users.exp < rob) return m.reply(`😔 @${who.split`@`[0]} tiene menos de *${ro} xp*`, null, { mentions: [who] })    
global.db.data.users[m.sender].exp += rob
global.db.data.users[who].exp -= rob 
global.db.data.users[m.sender].limit += rob
global.db.data.users[who].limit -= rob 
global.db.data.users[m.sender].money += rob
global.db.data.users[who].money -= rob 
m.reply(`*‣ Le afanaste ${rob} Xp a @${who.split`@`[0]}*`, null, { mentions: [who] })
global.db.data.users[m.sender].lastrob = new Date * 1
}
handler.help = ['rob']
handler.tags = ['econ']
handler.command = ['robar', 'rob', 'afanar']
export default handler  
handler.register = true
handler.group = true
function msToTime(duration) {
var seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}


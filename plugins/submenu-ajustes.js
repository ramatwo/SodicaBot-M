import { xpRange } from '../lib/levelling.js'

import { promises } from 'fs'
import { join } from 'path' 

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}


let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])


let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let menu = `*tocá en leer más 👇👇*
${readMore}
*╭━━━[ AJUSTES - CHATS ]━━━⬣*
┃ *Configurá con on y off*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⚙️ _${usedPrefix}on *:* off *bienvenida | welcome*_
┃⚙️ _${usedPrefix}on *:* off *avisos | detect*_
┃⚙️ _${usedPrefix}on *:* off *autonivel | autolevelup*_
┃⚙️ _${usedPrefix}on *:* off *stickers*_
┃⚙️ _${usedPrefix}on *:* off *autosticker*_
┃⚙️ _${usedPrefix}on *:* off *reacciones | reaction*_
┃⚙️ _${usedPrefix}on *:* off *antiver | antiviewonce*_
┃⚙️ _${usedPrefix}on *:* off *antieliminar | antidelete*_
┃⚙️ _${usedPrefix}on *:* off *antinternacional | antifake*_
┃⚙️ _${usedPrefix}on *:* off *antienlace | antilink*_
┃⚙️ _${usedPrefix}on *:* off *antienlace2 | antilink2*_
┃⚙️ _${usedPrefix}on *:* off *antitiktok | antitk*_
┃⚙️ _${usedPrefix}on *:* off *antiyoutube | antiyt*_
┃⚙️ _${usedPrefix}on *:* off *antitelegram | antitel*_
┃⚙️ _${usedPrefix}on *:* off *antifacebook | antifb*_
┃⚙️ _${usedPrefix}on *:* off *antinstagram | antig*_
┃⚙️ _${usedPrefix}on *:* off *antitwitter | antitw*_
*╰━━━━━━━━━━━━⬣*
*tocá en leer más 👇👇*
${readMore}
*╭━[ CONFIGURACIÓN - GRUPOS ]━⬣*
┃ *Mejorá tú Grupo con SodicaBot*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌐➺ _${usedPrefix}ban *@tag*_
┃🌐➺ _${usedPrefix}grupo *abrir : cerrar*_
┃🌐➺ _${usedPrefix}daradmin | promote *@tag*_
┃🌐➺ _${usedPrefix}quitaradmin | demote *@tag*_
┃🌐➺ _${usedPrefix}admins *texto*_
┃🌐➺ _${usedPrefix}invocar | tagall *texto*_
┃🌐➺ _${usedPrefix}hidetag *texto*_
┃🌐➺ _${usedPrefix}cerrartiempo | closetime *Cantidad*_
┃🌐➺ _${usedPrefix}advertencia *@tag*_
┃🌐➺ _${usedPrefix}deladvertencia *@tag*_
┃🌐➺ _${usedPrefix}delwarn *@tag*_
┃🌐➺ _${usedPrefix}enlace | link_
┃🌐➺ _${usedPrefix}newnombre | nuevonombre *texto*_
┃🌐➺ _${usedPrefix}newdesc | descripcion *texto*_
┃🌐➺ _${usedPrefix}setwelcome | bienvenida *texto*_
┃🌐➺ _${usedPrefix}setbye | despedida *texto*_
┃🌐➺ _${usedPrefix}nuevoenlace_
┃🌐➺ _${usedPrefix}on *caracteristica*_
┃🌐➺ _${usedPrefix}off *caracteristica*_
*╰━━━━━━━━━━━━⬣*
`.trim()
await conn.sendFile(m.chat, gataVidMenu, 'Menú de ajustes', menu, fkontak)
	
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /menuajustes|menuconfig|menuconfiguracion/i
handler.register = true //necesita etar registrado
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
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
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
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
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

let menu = `${lenguajeGB['smsConfi2']()} *${user.genero === 0 ? '➺' : user.genero == 'Oculto 🕶️' ? `🕶️` : user.genero == 'Mujer 🚺' ? `🚺` : user.genero == 'Hombre 🚹' ? `🚹` : '👤'} ${user.registered === true ? user.name : username}*${(conn.user.jid == global.conn.user.jid ? '' : `\n*SOY SUB BOT DE: https://wa.me/${global.conn.user.jid.split`@`[0]}*`) || ''}

ℹ️ *INFORMACIÓN GENERAL*

➺ *Registrados »* ${rtotalreg}/${totalreg}
➺ *Estado »* ${typeof user.miestado !== 'string' ? '❌ _' + usedPrefix + 'miestado_' : '_' + user.miestado + '_'}
➺ *Registrado »* ${user.registered === true ? '✅' : '❌ _' + usedPrefix + 'verificar_'}
➺ *${lenguajeGB['smsBotonM7']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM7']().slice(1).toLowerCase()} »* ${user.premiumTime > 0 ? '✅' : '❌ _' + usedPrefix + ''}
➺ *${lenguajeGB['smsBotonM5']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM5']().slice(1).toLowerCase()} »* ${role}
➺ *${lenguajeGB['smsBotonM6']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM6']().slice(1).toLowerCase()} »* ${emoji}

*tocá en leer más 👇👇*
${readMore}
*╭━〔 SUBMENÚS 〕━⬣*
┃
┃ *Menú de informacion*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🛠️➺ _${usedPrefix}menuinfo_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *Menú de configuración*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🛠️➺ _${usedPrefix}menuconfig_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *Menú de stickers*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🛠️➺ _${usedPrefix}menustickers_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *Menú de herramientas*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🛠️➺ _${usedPrefix}menuherramientas_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *Menú de juegos*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🛠️➺ _${usedPrefix}menujuegos_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *Menú de convertidores*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🛠️➺ _${usedPrefix}menuconvertidores_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *Menú RPG*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🛠️➺ _${usedPrefix}menurpg_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *Menú para búsquedas*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🛠️➺ _${usedPrefix}menubusquedas_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃  *Menú de descargas*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🛠️➺ _${usedPrefix}menudescargas_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *Menú de aleatorios*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🛠️➺ _${usedPrefix}menualeatorio_
*╰━━━━━━━━━━━━⬣*


*╭━〔 OTROS COMANDOS 〕━⬣*
┃ *Reporte abusos o fallas*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💌 _${usedPrefix}reporte *texto*_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *Uní a SodicaBot a tu grupo*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🪅 _${usedPrefix}addbot *enlace*_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *Convertite en premium*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🎟️ _${usedPrefix}listapremium_
┃🎟️ _${usedPrefix}pase premium_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *Hablá conmigo*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🪄➺ _${usedPrefix}bot *texto*_
┃🪄➺ _${usedPrefix}simi *texto*_
*╰━━━━━━━━━━━━⬣*


`.trim()
await conn.sendFile(m.chat, gataVidMenu, 'Menú Principal', menu, fkontak)
	
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm)$/i
handler.register = true //necesita etar registrado
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
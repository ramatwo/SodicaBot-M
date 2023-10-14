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
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}

let menu = `
*╭━[ DESCARGAS ]━⬣*
┃🚀➺ _${usedPrefix}imagen | image *texto*_
┃🚀➺ _${usedPrefix}pinterest | dlpinterest *texto*_
┃🚀➺ _${usedPrefix}wallpaper|wp *texto*_
┃🚀➺ _${usedPrefix}play | play2 *texto o link*_
┃🚀➺ _${usedPrefix}play.1 *texto o link*_
┃🚀➺ _${usedPrefix}play.2 *texto o link*_ 
┃🚀➺ _${usedPrefix}ytmp3 | yta *link*_
┃🚀➺ _${usedPrefix}ytmp4 | ytv *link*_
┃🚀➺ _${usedPrefix}pdocaudio | ytadoc *link*_
┃🚀➺ _${usedPrefix}pdocvieo | ytvdoc *link*_
┃🚀➺ _${usedPrefix}tw |twdl | twitter *link*_
┃🚀➺ _${usedPrefix}facebook | fb *link*_
┃🚀➺ _${usedPrefix}instagram *link video o imagen*_
┃🚀➺ _${usedPrefix}verig | igstalk *usuario(a)*_
┃🚀➺ _${usedPrefix}ighistoria | igstory *usuario(a)*_
┃🚀➺ _${usedPrefix}tiktok *link*_
┃🚀➺ _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
┃🚀➺ _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
┃🚀➺ _${usedPrefix}mediafire | dlmediafire *link*_
┃🚀➺ _${usedPrefix}clonarepo | gitclone *link*_
┃🚀➺ _${usedPrefix}clima *país ciudad*_
┃🚀➺ _${usedPrefix}consejo_
┃🚀➺ _${usedPrefix}morse codificar *texto*_
┃🚀➺ _${usedPrefix}morse decodificar *morse*_
┃🚀➺ _${usedPrefix}fraseromantica_
┃🚀➺ _${usedPrefix}historia_
*╰━━━━━━━━━━━━⬣*`.trim()
await conn.sendFile(m.chat, gataVidMenu.getRandom(), 'SodicaBot.exe', menu, fkontak)
	
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /menudescargas/i
handler.register = true //necesita etar registrado
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
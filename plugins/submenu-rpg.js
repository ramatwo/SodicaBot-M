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
*╭━━━[ MENÚ RPG ]━━⬣*
┃ *Comprá y conseguí recursos.*
┃ *¿Llegarás al top 1?*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🏆➺ _${usedPrefix}top_
┃⚗️➺ _${usedPrefix}pase premium_
┃⚗️➺ _${usedPrefix}listapremium_
┃⚗️➺ _${usedPrefix}transfer *tipo cantidad @tag*_
┃⚗️➺ _${usedPrefix}balance_
┃⚗️➺ _${usedPrefix}wallet_
┃⚗️➺ _${usedPrefix}experiencia_
┃⚗️➺ _${usedPrefix}lvl_
┃⚗️➺ _${usedPrefix}inventario_
┃⚗️➺ _${usedPrefix}aventura_
┃⚗️➺ _${usedPrefix}caza_
┃⚗️➺ _${usedPrefix}alimentos_
┃⚗️➺ _${usedPrefix}curar_
┃⚗️➺ _${usedPrefix}buy_ (TIENDA DESHABILITADA)
┃⚗️➺ _${usedPrefix}sell_ (TIENDA DESHABILITADA)
┃⚗️➺ _${usedPrefix}verificar_
┃⚗️➺ _${usedPrefix}perfil_
┃⚗️➺ _${usedPrefix}myns_
┃⚗️➺ _${usedPrefix}unreg *numero de serie*_
┃⚗️➺ _${usedPrefix}minardiamantes_
┃⚗️➺ _${usedPrefix}minarcoins_
┃⚗️➺ _${usedPrefix}minarexp_
┃⚗️➺ _${usedPrefix}minar *:* minar2 *:* minar3_
┃⚗️➺ _${usedPrefix}claim_
┃⚗️➺ _${usedPrefix}cadahora_
┃⚗️➺ _${usedPrefix}cadasemana_
┃⚗️➺ _${usedPrefix}cadames_
┃⚗️➺ _${usedPrefix}cofre_
┃⚗️➺ _${usedPrefix}chambear_
*╰━━━━━━━━━━━━⬣*

`.trim()
await conn.sendFile(m.chat, gataVidMenu, 'Menú de RPG', menu, fkontak)
	
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /menurpg/i
handler.register = true 
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
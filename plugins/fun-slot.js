/* CREDITOS: https://github.com/FG98F */

let handler = async (m, { args, usedPrefix, command, conn }) => {
let fa = `
${mg} Se debe usar así:
*${usedPrefix + command} 50*`.trim()

if (!args[0]) throw fa
if (isNaN(args[0])) throw fa
let apuesta = parseInt(args[0])

let users = global.db.data.users[m.sender]

if (apuesta < 100) throw `Eh rata coluda🐀🐀, el minimo para apostar es 100.`

if (apuesta < users.exp) {
throw `No te alcanza gil`    
}
if (command == 'slot1') {
let time = global.db.data.users[m.sender].lastslot + 120000
if (new Date - users.lastslot < 60000) throw `Pará apostador compulsivo, esperá ${msToTime(time - new Date())} antes de seguir apostando.`
users.lastslot = new Date * 1
    
let emojis = ["🍁", "⚡", "🍇"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `*Le pegaste crack, recibís  +${apuesta + apuesta} EXP*`
users.exp += apuesta
} else if (a == b || a == c || b == c) {
end = `*Casi le pegás, volvé a intentar*`
} else {
end = `*Perdiste manco  ❌ -${apuesta} EXP*`
users.exp -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let s = `🎰 | *SLOTS* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *SLOTS*   | 🎰

${end}`
await conn.reply(m.chat, s, m)}
/*await conn.sendHydrated(m.chat, `${s}\n\n${end}`, wm, null, md, 'SodicaBot', null, null, [
['⚡ 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝙊𝙏𝙍𝘼 𝙑𝙀𝙕 | 𝘼𝙂𝘼𝙄𝙉', `${usedPrefix}slot1 ${apuesta}`],
['🐈 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎', `${usedPrefix}slot2 ${apuesta}`],
['💎 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 Diamantes', `${usedPrefix}slot3 ${apuesta}`]
], m,)}*/


if (users.money < apuesta)  { 
throw `No te alcanza gil`    
}
if (command == 'slot2') {
let time = global.db.data.users[m.sender].lastslot + 60000
if (new Date - users.lastslot < 60000) throw `*Eh pará apostador compulsivo, esperá ${msToTime(time - new Date())} antes de seguir apostando.`
users.lastslot = new Date * 1
    
let emojis = ["🐈", "🐓", "🐙"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `*Le pegaste crack, recibís +${apuesta + apuesta} Moneditas`
users.money += apuesta
} else if (a == b || a == c || b == c) {
end = `*Casi le pegás, volvé a intentar*`
users.money += 30
} else {
end = `*Perdiste  ❌ -${apuesta} Moneditas*`
users.money -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let ss = `
🎰 | *SLOTS* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *SLOTS*   | 🎰\n\n${end}`
await conn.reply(m.chat, ss, m)}
/*await conn.sendHydrated(m.chat, `${ss}\n\n${end}`, wm, null, md, 'SodicaBot', null, null, [
['🐈 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝙊𝙏𝙍𝘼 𝙑𝙀𝙕 | 𝘼𝙂𝘼𝙄𝙉', `${usedPrefix}slot2 ${apuesta}`],
['⚡ 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝙀𝙓𝙋', `${usedPrefix}slot1 ${apuesta}`],
['💎 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 Diamantes', `${usedPrefix}slot3 ${apuesta}`]
], m,)}*/

    
if (users.limit < apuesta) {  
throw `No te alcanza gil`    
}
if (command == 'slot3') {
let time = global.db.data.users[m.sender].lastslot + 30000
if (new Date - users.lastslot < 30000) throw `*Eh pará apostador compulsivo, esperá ${msToTime(time - new Date())} antes de seguir apostando.`
users.lastslot = new Date * 1
    
let emojis = ["🪵", "💣", "💎"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `*Le pegaste crack, recibís +${apuesta + apuesta} Diamantes*`
users.limit += apuesta
} else if (a == b || a == c || b == c) {
end = `*Casi le pegás, volvé a intentar*`

} else {
end = `*Perdiste  ❌ -${apuesta} Diamantes*`
users.limit -= apuesta
}

let sss = `
🎰 | *SLOTS* | 🎰 
 ────────
   ${x[0]} : ${y[0]} : ${z[0]}
   ${x[1]} : ${y[1]} : ${z[1]}
   ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *SLOTS*   | 🎰\n\n${end}`
await conn.reply(m.chat, sss, m)}

        
        
if (command == 'slot') {       
await conn.reply(m.chat, `*Elegí en qué vas a apostar ${apuesta}*\n\n⚡ Exp:\n${usedPrefix}slot1 ${apuesta}\n\n🪙 Moneditas:\n${usedPrefix}slot2 ${apuesta}\n\n💎 Diamantes:\n${usedPrefix}slot3 ${apuesta}`, m)}

if (command == 'apostar') {       
await conn.reply(m.chat, `*Elegí en qué vas a apostar ${apuesta}*\n\n⚡ Exp:\n${usedPrefix}slot1 ${apuesta}\n🪙 Moneditas:\n${usedPrefix}slot2 ${apuesta}\n💎 Diamantes:\n${usedPrefix}slot3 ${apuesta}`, m)}
  
}
handler.help = ['slot <apuesta>']
handler.tags = ['game']
handler.command = ['slot', 'apostar', 'slot1', 'slot2', 'slot3']

export default handler
handler.register = true
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m " + seconds + " s " 
}

const xpperlimit = 300
import fetch from 'node-fetch'
let handler = async (m, { command, conn, usedPrefix, args }) => {
let user = global.db.data.users[m.sender]
let time = user.lastmiming + 100/*300000*/ //5 min
if (new Date - user.lastmiming < 100/*300000*/) return await conn.reply(m.chat, `⏱️ Volvé en ${msToTime(time - new Date())}`, m)
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" 
}


const items = {
   buy: {
        exp: { money: pickRandom([0.90]) },
        limit: { money: 1000 },
        diamond: { limit: 10 },
        joincount: { limit: 10 },
        gold: {  money: 50000 },
        money: { limit: 0.5 },
        potion: { money: 10000 },
       
    },
   
    sell: {
        exp: { money: pickRandom([0.50])},
        limit: { money: pickRandom([1, 2, 3]) },
        money: { exp: pickRandom([1, 2, 2,3])},
        diamond: { limit: 10 },
        gold: { money: pickRandom([10000,20000,30000]) },


        emerald: { money: pickRandom([5,5,10,11,10,5,12,50]) },
        tiketcoin: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        berlian: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        common: { money: pickRandom([5,5,10,11,10,5,12,50]) },
        kyubi: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },

        aqua: {money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        trash: {money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        wood: { money: pickRandom([2,2,2,1,1,2]) },
        joincount: {  money: pickRandom([5,5,10,11,10,5,12,50]) },
        rock: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        batu: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        string: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        iron: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        coal: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        botol: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        kaleng: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        kardus: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },

        eleksirb: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        emas: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        sampah: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        serigala: {money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        sword: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        umpan: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        healtmonster: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        pancingan: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        

        common: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        uncoommon: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        mythic: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        pet: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        petFood: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        gardenboxs: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },

        //zona de pruebas
        /*
        bibitanggur: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        bibitapel: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        bibitjeruk: {money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        bibitmangga: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        bibitpisang: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        //caza
        banteng:  { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        harimau:  { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        gajah:  { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        kambing:  { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        panda:  { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        buaya:  { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        kerbau:  { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        sapi:  { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        monyet:  { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        babihutan:  { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        babi:  { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        ayam:  { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        //

        centaur: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        griffin: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        kucing: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        naga: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        fox: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        kuda: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        phonix: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        wolf: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        
        
        makanancentaur: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        makanangriffin: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        makanankyubi: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        makanannaga: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        makananpet: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },
        makananphonix: { money: pickRandom([0.2, 0.1, 0.3,0.5]) },*/
    }
}   
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let imgr = flaaa.getRandom()
    const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
    
    let text = ''
    let footer = ''
    let image = ''
    let buttons = ''
    text = (command.toLowerCase() == 'buy' ?
(`
${htki} *COMPRAR* ${htka}`.trim()) : 
(`
${htki} *VENDER* ${htka}
`.trim())
)
    footer = (command.toLowerCase() == 'buy' ?
(`
🔖 LISTA DE ÍTEMS
${readMore}
✨ Ejemplo de compra:
*» ${usedPrefix}${command} ítem cantidad*
*» ${usedPrefix}${command} potion 5*\n${readMore}
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user) 
        return `*» ${global.rpgshop.emoticon(v)} (${v})*\n*Cuesta:* ${listItems[v][paymentMethod]} ${global.rpgshop.emoticon(paymentMethod)}\n*-----------------------------------------*\n`.trim()
    }).join('\n')}

`.trim()) : 
(`
🔖 LISTA DE ÍTEMS
${readMore}
✨ Ejemplo de venta:
*» ${usedPrefix}${command} ítem cantidad*
*» ${usedPrefix}${command} potion 5*\n${readMore}
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `*» ${global.rpgshop.emoticon(v)}*\n*» ${v}*\n*Ganancia:* ${listItems[v][paymentMethod]} ${global.rpgshop.emoticon(paymentMethod)}\n*-----------------------------------------*\n`.trim()
    }).join('\n')}

`.trim())
)
    image = (command.toLowerCase() == 'buy' ?
(imgr + '') : 
(imgr + '')
)

const item = (args[0] || '').toLowerCase()
const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
let premium = user.premium

if (!listItems[item]) return conn.sendFile(m.chat, image, 'Tienda de ítems', footer, fkontak)

if (command.toLowerCase() == 'buy') {
let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
if (user[paymentMethod] < listItems[item][paymentMethod] * total) return await conn.reply(m.chat, `*–--『 Insuficiente 』--–*\n\n*Necesitas ${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* *${global.rpgshop.emoticon(paymentMethod)} Para Comprar ${total} ${global.rpgshop.emoticon(item)}.**\n*Tenés ${user[paymentMethod]} ${global.rpgshop.emoticon(paymentMethod)}.*`, fkontak, m)

user[paymentMethod] -= listItems[item][paymentMethod] * total
user[item] += total
 
 await conn.reply(m.chat, `*––『 ÓRDEN DE COMPRA 』––*\n${readMore}🛒 *Compraste ${item} » ${total} ${global.rpgshop.emoticon(item)}*.\n💸 *Gasto: ${(listItems[item][paymentMethod] * total)} ${global.rpgshop.emoticon(paymentMethod)}*\n📊 *Ahora tenés: ${user[item]} ${global.rpgshopp.emoticon(item)}*`, fkontak, m)

} else {
if (user[item] < total) return await conn.reply(m.chat, `*No tenés suficiente ${global.rpgshop.emoticon(item)} para vender.*\n*Tenés ${user[item]} ${global.rpgshopp.emoticon(item)}*`, fkontak, m)
     
let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
user[item] -= total
user[paymentMethod] += listItems[item][paymentMethod] * total
    
await conn.reply(m.chat, `*––『 ORDEN DE VENTA 』––*\n${readMore}🛒 *Vendiste ${item} » ${total} ${global.rpgshop.emoticon(item)}*.\n📈 *Ganancia: ${(listItems[item][paymentMethod] * total)} ${global.rpgshop.emoticon(paymentMethod)}*\n📊 *Ahora tenés: ${user[paymentMethod]} ${global.rpgshopp.emoticon(paymentMethod)}*`, fkontak, m)
}
user.lastmiming = new Date * 1  
}
handler.help = ['buy', 'sell'].map(v => v + ' [item] [count]')
handler.tags = ['rpg']
handler.command = /^(buy|sell)$/i
handler.disabled = false
handler.register = true
handler.rowner = false
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " minutos y " + seconds + " segundos " 
}  

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
let handler = async (m, { conn, isPrems}) => { //lastmiming
const fkontak = {
        "key": {
        "participants":"0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"    
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

let user = global.db.data.users[m.sender]
let premium = user.premium  
let minar = `${pickRandom(['Que pro 😎 has minado',
'🌟✨ Genial,  Obtenés',
'WOW  eres un gran Minero ⛏️ Obtenés',
'Minaste',
'😲 Lograste Minar la cantidad de',
'Tus Ingresos suben gracias a que minaste',
'⛏️⛏️⛏️⛏️⛏️ Minando',
'🤩 SII ! AHORA TENÉS',
'La minería esta de tu lado, por ello obtenés',
'😻 La suerte de Minar',
'♻️ Tu Misión se ha cumplido, lograste minar',
'⛏️ La Mineria te ha beneficiado con',
'🛣️ Encontraste un lugar y por minar dicho lugar Obtienes',
'👾 Gracias a que minaste, tus ingresos suman',
'Felicidades, ahora tenés','⛏️⛏️⛏️ Obtenés'])}`

let pp = "./media/menus/velocidad.bat"

let kyubi = `${pickRandom([0, 1, 3, 1, 2])}` * 1
let kyubipremium = `${pickRandom([2, 3, 5, 9, 10, 7])}` * 1

let diamond = `${pickRandom([0, 1, 0, 0, 2])}` * 1
let diamondpremium = `${pickRandom([3, 4, 5, 5, 5])}` * 1

let tiketcoin = `${pickRandom([1, 0, 0, 1, 0, 0, 2])}` * 1
let tiketcoinpremium = `${pickRandom([2, 3, 4, 5, 2, 3, 3])}` * 1

const recompensas = {	
  kyubi: premium ? kyubipremium : kyubi,
  diamond: premium ? diamondpremium : diamond,
  tiketcoin: premium ? tiketcoinpremium : tiketcoin,
}
//let xp = Math.floor(Math.random() * 2000)
let limit = `${pickRandom([2, 3, 4, 5, 0, 1, 6, 7, 8, 9, 10])}` * 1
let limitpremium = `${pickRandom([4, 7, 8, 9, 11, 13, 16, 17, 19, 22, 24, 26, 28, 30])}` * 1

let time = user.lastdiamantes + 9000000 //15 min + 0
if (new Date - user.lastdiamantes < 9000000) return await conn.reply(m.chat, `*⏱️ 𝙑𝙪𝙚𝙡𝙫𝙖 𝙚𝙣 ${msToTime(time - new Date())} 𝙥𝙖𝙧𝙖 𝙘𝙤𝙣𝙩𝙞𝙣𝙪𝙖𝙧 𝙢𝙞𝙣𝙖𝙣𝙙𝙤 ${global.rpgshopp.emoticon('limit')}⛏️*\n\n*𝙂𝙚𝙩 𝙗𝙖𝙘𝙠 𝙞𝙣 ${msToTime(time - new Date())} 𝙩𝙤 𝙢𝙞𝙣𝙚 ${global.rpgshopp.emoticon('limit')}⛏️*`, fkontak,  m)
user.limit += premium ? limitpremium : limit  
let texto = ''
for (let reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue
    user[reward] += recompensas[reward]
texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}\n`}

let gat = `*${premium ? '🎟️ Recompensa Premium' : '🆓 Recompensa Gratis'}*\n*${minar}*\n*${limit} ${global.rpgshop.emoticon('limit')}*\n\n🍁 𝗕 𝗢 𝗡 𝗢\n\n${texto}\n\n🎟️ VIP ⇢ ${premium ? '✅' : '❌'}\n${wm}`
await conn.sendFile(m.chat, pp, 'SodicaBot.exe', gat, fkontak)

user.lastdiamantes = new Date * 1  
}
handler.help = ['minar']
handler.tags = ['diamantes']
handler.command = ['minar3', 'miming3', 'mine3', 'minardiamantes', 'minargemas', 'minardiamante'] 
handler.fail = null
handler.exp = 0
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

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

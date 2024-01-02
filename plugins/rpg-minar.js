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
'Minaste, obtenés',
'Tus Ingresos suben gracias a que minaste',
'⛏️⛏️ Minando',
'⛏️ La Mineria te benefició con',
'👾 Gracias a que minaste, ahora tenés',
'⛏️⛏️⛏️ Obtenés'])}`


let pp = 'https://google.com'

let string = `${pickRandom([2, 3, 4, 5])}` * 1
let stringpremium = `${pickRandom([5, 6, 7, 8, 9, 10])}` * 1

let coal = `${pickRandom([4, 5, 8, 10, 12])}` * 1
let coalpremium = `${pickRandom([9, 14, 15, 17, 20])}` * 1

let emas = `${pickRandom([0, 2, 3, 0, 0, 0])}` * 1
let emaspremium = `${pickRandom([4, 5, 1, 1, 7, 8])}` * 1

const recompensas = {	
  string: premium ? stringpremium : string,
  coal: premium ? coalpremium : coal,
  emas: premium ? emaspremium : emas,
}

let xp = `${pickRandom([500, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 2500, 3000, 3700, 4000, 4500])}` * 1
let exppremium = `${pickRandom([5000, 6000, 7000, 8000, 9000, 10000, 10500, 11500, 12000])}` * 1

let time = user.lastmiming + 9000000 //10 min + 0 + 9
if (new Date - user.lastmiming < 9000000) return await conn.reply(m.chat, `*⏱️ Volvé en ${msToTime(time - new Date())} ⛏️*`, fkontak,  m)
user.exp += premium ? exppremium : xp  
let texto = ''
for (let reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue
    user[reward] += recompensas[reward]
texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}\n`}


await conn.reply(m.chat, `*${minar} ${xp} XP, ${string} cadenas y ${coal} carbones*`, fkontak,  m)
user.lastmiming = new Date * 1  
}
handler.help = ['minar']
handler.tags = ['xp']
handler.command = ['minar', 'minarxp', 'minarexp', 'mine', 'minarexperiencia'] 
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


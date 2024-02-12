import { createHash } from 'crypto'

let nombre = 0, edad = 0, genero = 0, bio = 0, identidad = 0, pasatiempo = 0, registro, _registro, fecha, hora, tiempo, registrando
let pas1 = 0, pas2 = 0, pas3 = 0, pas4 = 0, pas5 = 0  

let handler = async function (m, { conn, text, command, usedPrefix }) {
let key 
let sinDefinir = 'No definido'
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }	
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
}) 
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch((_) => gataMenu.getRandom())
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
let nombreWA = await usedPrefix + conn.getName(m.sender) //'@' + m.sender.split("@s.whatsapp.net")[0]
let user = global.db.data.users[m.sender]
let verificar = new RegExp(usedPrefix)
let biografia = await conn.fetchStatus(m.sender).catch(_ => 'undefined')
bio = biografia.status?.toString() || sinDefinir
	
let intervalId
function mensajeRegistro() {
if (edad === 0) {
clearInterval(intervalId)	
registrando = false
return
}
if (user.registered === true) {
return 
}
if (typeof genero === 'string') {
global.db.data.users[m.sender]['registroC'] = true
registrando = false
conn.reply(m.chat, `Su tiempo de registro está por caducar.\n\nSi no escribís${usedPrefix}finalizar ahora, tu registro se va a eliminar.`, fkontak, m)
}else{
clearInterval(intervalId)
global.db.data.users[m.sender]['registroR'] = true		
registrando = false
conn.reply(m.chat, `Su tiempo de registro está por caducar.\n\nSi no escribís${usedPrefix}finalizar ahora, tu registro se va a eliminar.`, fkontak, m)}
}
		
if (user.registered === true) return conn.reply(m.chat, `*Yá estás reigstrado. Si querés eliminar tus datos usá*\n*${usedPrefix}unreg numero de serie*\n\n*Para obtener tu número de serie usá*\n*${usedPrefix}miserial*`, fkontak, m)	

if (command == 'verificar' || command == 'verify' || command == 'register' || command == 'registrar') {
await conn.reply(m.chat, `*🥸 OPCIONES DE REGISTRO*\n\n📝 *REGISTRO EXPRESS*\n*➭* Solo debe dar su nombre y edad\n*➭* Desbloquea los comandos\n\n*Escriba:*\n${usedPrefix}reg nombre edad\n\n🗃️ *REGISTRO DETALLADO (DESHABILITADO)*\n*➭* Más opciones para este registro\n*➭* Desbloquear más comandos.\n*➭* V.I.P temporal gratis\n\n*Escriba:*\n${usedPrefix}nombre`, fkontak, m)
}

if (command == 'reg') {
registrando = true
if (registrando === true) {
intervalId = setInterval(mensajeRegistro, 2 * 60 * 1000) //2 min
setTimeout(() => {
clearInterval(intervalId)}, 126000) //2.1 min
}

registro = text.replace(/\s+/g, usedPrefix) 
_registro = text.split(" ",2)
if (!text) return conn.reply(m.chat, `*🧠 TE CUESTA?*\nno importa, te lo explico otra vez\n\n${usedPrefix + command} tu nombre y tu edad real\n\n*EJEMPLO:* \`\`\`${usedPrefix + command} Milei 17\`\`\`\n\n‼️ *Si querés hacer un registro más completo, usá:*\n${usedPrefix}nombre`, fkontak, m)
//if (_registro['length'] >= 3 || isNaN(_registro[1])) return 
//conn.sendButton(m.chat, fg + '🙃 *ESTÁ INTENTANDO SEPRAR SU NOMBRE O UNIR TODO?* ', '🧐 *COINCIDE COMO EN ESTOS EJEMPLOS:*\n' + `\`\`\`${usedPrefix + command} Super${gt}20\`\`\`` + '\n' + `\`\`\`${usedPrefix + command} Super 15 ${gt} \`\`\`` + '\n' + `\`\`\`${usedPrefix + command} Super ${gt} 24 De ${author}\`\`\`\n\n` + '*Si cumple que tenga (Nombre/Frase y Edad) Autocompletaremos su Registro, de lo contraio vuelva a registrarse*\n➘ _Use el Botón de abajo_', null, [[`🌟 AUTOCOMPLETAR MI REGISTRO`, usedPrefix + 'reg1' + ' ' + text.replace(/[♧◇♡♤■□●○•°☆▪︎¤¿?¡¬¦±×÷°µ§©®™¶€¢£¥₽₹₩₱₸₪₫₮₦₴₡₭₲₼₿.,\/#!$%\^&\*;:{}@=\-_`~()\s\0-9]/gi, "") + ' ' + text.replace(/[♧◇♡♤■□●○•°☆▪︎¤¿?¡¬¦±×÷°µ§©®™¶€¢£¥₽₹₩₱₸₪₫₮₦₴₡₭₲₼₿.,\/#!$%\^&\*;:{}@=\-_`~()\s\a-z]/gi, "")], ['📑 VOLVER A REGISTRAR', command + usedPrefix]], m)
if (!_registro[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*FALTA SU NOMBRE, PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``, fkontak, m)
if (_registro[0].length >= 30) return conn.reply(m.chat, `⛔ *Usá tu nombre real o un apodo.*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``, fkontak, m)
if (_registro[0].length <= 2) return conn.reply(m.chat, `⛔ *Usá tu nombre real o un apodo.*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``, fkontak, m)
_registro[0] = text.replace(/\s+/g, '').replace(/[0-9]+/gi, "")
user.name = _registro[0]

if (!_registro[1]) return conn.reply(m.chat, `⛔ *Poné tu edad*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``, fkontak, m)
if (_registro[1] > 31) return conn.reply(m.chat, `⛔ *Usá tu edad real.*\n\n*PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``, fkontak, m)
if (_registro[1] < 11) return conn.reply(m.chat, `⛔ *Usá tu edad real.*\n\n*PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``, fkontak, m)
user.age = parseInt(_registro[1]) //_registro[1]	
global.db.data.users[m.sender]['registroR'] = true

let registroRapido = `📂 *Se completó la siguiente información:*
👤 Usuario: ${user.name === 0 ? sinDefinir : user.name}
🧮 Edad: ${user.age === 0 ? sinDefinir : user.age + ' años'}

💾 Todo correcto? terminá de registrarte con
*➭* *${usedPrefix}finalizar*`

await conn.sendMessage(m.chat, {
text: registroRapido,
contextInfo: {
externalAdReply: {
title: 'SodicaCrew Domina.',
body: '📌 Podés modificar tus datos antes de finalizar',
thumbnailUrl: pp, 
sourceUrl: 'https://atom.bio/sodicacrew',
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}}, { quoted: fkontak })
}

/*if (command == 'nombre' || command == 'name') {
registrando = true
if (registrando === true) {
intervalId = setInterval(mensajeRegistro, 3 * 60 * 1000) //3 min
setTimeout(() => {
clearInterval(intervalId)}, 186000) //3.1 min
}
if (verificar.test(text) == false || text.length <= 1) return conn.reply(m.chat, `*Escribí bien tu nombre. Ejemplo:*\n${usedPrefix}nombre ${gt}`, fkontak, m)
if (/^\d+$/.test(text)) return conn.sendMessage(m.chat, {text: `Tu nombre no pueden ser solo numeros.`}, {quoted: fkontak})
if (text.length >= 25) return conn.sendMessage(m.chat, {text: `Escribí bien tu nombre.`}, {quoted: fkontak})
if (text.length <= 2) return conn.sendMessage(m.chat, {text: `Escribí bien tu nombre.`}, {quoted: fkontak})
user.name = text.replace(/\s+/g, '').replace(/[0-9]+/gi, "").trim()
if (user.name) return conn.sendMessage(m.chat, {text: `📂 *Se completó la siguiente información:*\n\n👤 *NOMBRE:*\n${user.name === 0 ? sinDefinir : user.name}\n\n🧮 *Ahora ingresá tu edad usando:*\n\`\`\`${usedPrefix}edad\`\`\``}, {quoted: fkontak})
}

		
if (command == 'edad' || command == 'age' || command == 'edad2' || command == 'age2') {
    if (verificar.test(text.slice(1)) == false && !text) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoIIG']()}*👉 AGREGUE SU EDAD PARA REGISTRAR, EJEMPLO:*\n${usedPrefix}edad 20`}, {quoted: fkontak})
    if (isNaN(text)) return conn.reply(m.chat, `⛔ Solo poné números`, fkontak, m)
    if (text > 90) return conn.reply(m.chat, `⛔ *Usá tu edad real.*`, fkontak, m)
    if (text < 10) return conn.reply(m.chat, `⛔ *Usá tu edad real.*`, fkontak, m)
    
    // Guardar la edad en la variable user.age
    user.age = parseInt(text.replace(/[.,\/#!$%\^&\*;:{}@=\-_`~()\s\a-z]/gi, ""));
    console.log(user.age)
    if (verificar.test(text) == true) return conn.sendMessage(m.chat, {text: `📂 *Se completó la siguiente información:*\n\n👤 *NOMBRE:*\n${user.name === 0 ? sinDefinir : user.name}\n\n*🧮 EDAD:*\n${user.age === 0 ? sinDefinir : user.age + ' años'}\n\n🧬 *Ahora ingresá tu género biológico:*\n\`\`\`${usedPrefix}genero\`\`\``}, {quoted: fkontak})
}

	
if (command == 'genero' || command == 'género' || command == 'gender') {
    let genText = `🥸 SELECCIONÁ TU GÉNERO BIOLÓGICO
1️⃣ *➭* 🚹 Masculino
2️⃣ *➭* 🚺 Femenino\n
📌 Ejemplo de uso:
\`\`\`${usedPrefix}genero 1\`\`\``;
    
    if (!text) return conn.sendMessage(m.chat, { text: genText }, { quoted: fkontak });
    
    function asignarGenero(text) {
        if (isNaN(text)) return null; // Verificar si el texto es un número válido
        text = parseInt(text); // Convertir el texto a número
        switch (text) {
            case 1:
                return "Hombre";
            case 2:
                return "Mujer";
            default:
                return null; // Si no es 1 ni 2, devuelve null
        }
    }
    
    let genero = asignarGenero(text);
    
    if (!genero) return conn.reply(m.chat, `MAL ⛔⛔⛔⛔`, fkontak, m);
    
    user.genero = genero;
    global.db.data.users[m.sender]['registroC'] = true
    console.log(user.genero)
    if (user.genero) return conn.sendMessage(m.chat, {text: `📂 *Se completó la siguiente información:*\n\n👤 *NOMBRE:*\n${user.name === 0 ? sinDefinir : user.name}\n\n*🧮 EDAD:*\n${user.age === 0 ? sinDefinir : user.age + ' años'} (bug)\n\n*🧬 GÉNERO:*\n${user.genero === 0 ? sinDefinir : user.genero}\n\n*💮 Ahora finalizá:*\n\`\`\`${usedPrefix}orientacion\`\`\``}, {quoted: fkontak});
}*/

	

	
if (command == 'finalizar' || command == 'end') {
if (global.db.data.users[m.sender]['registroC'] == true) {
if (user.premLimit === 0) {	
tiempo = user.premLimit === 1 ? 0 : 86400000 //1 dia
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
}
fecha = `${week}, ${date} *||* `
hora = `${time}`
user.tiempo = fecha + hora
user.name = user.name === 0 ? sinDefinir : user.name
user.descripcion = bio
user.age = user.age === 0 ? sinDefinir : user.age >= 18 ? user.age += ' Años' : user.age += ' Años'
user.genero = user.genero === 0 ? sinDefinir : user.genero == 'Mujer' ? `${user.genero} 🚺` : user.genero == 'Hombre' ? `${user.genero} 🚹` : sinDefinir

}else{
fecha = `${week}, ${date} || `
hora = `${time}`
user.tiempo = fecha + hora
user.name = user.name === 0 ? sinDefinir : user.name
user.age = user.age === 0 ? sinDefinir : user.age >= 18 ? user.age += ' Años' : user.age += ' Años'
user.descripcion = bio	
}
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
registrando = false
clearInterval(intervalId)	
await conn.sendMessage(m.chat, {
text: `📌 *VERIFICACIÓN FINALIZADA*

📝 *TIPO DE REGISTRO* 
*➭* ${user.registroC === true ? 'Registro Detallado' : 'Registro Express'}\n
📅 *HORARIO DE REGISTRO*
*➭* ${user.tiempo}\n
👤 *USUARIO* 
*➭* ${user.name}\n
💬 *DESCRIPCIÓN*
*➭* ${user.descripcion}\n
🧮 *EDAD* 
*➭* ${user.age}\n
🔗 *IDENTIFICADOR ÚNICO (serial)*
*➭* ${sn}\n
${user.registroC === true ? `☘️ *GENERO*
*➭* ${user.genero}\n
${user.premLimit === 1 ? '' : `🎟️ *VIP*
*➭* ${user.premLimit === 1 ? '' : `${user.premiumTime > 0 ? '✅' : '❌'} +1 DÍA || ${user.premiumTime - now} ms`}`}   ` : ''}${user.registroC === true ? `\n🌟 *Si es su primera vez registrándose, recibirá horas premium de forma gratuita como bonificación exclusiva por su primera inscripción, puede cancelar y eliminar su registro en cualquier momento. Gracias por registrarse ✨*` : ''}`.trim(),
contextInfo: {
    externalAdReply: {
    title: 'SodicaCrew Domina.',
    body: '📌 Felicidades por unirse a sodicabot!!',
    thumbnailUrl: pp, 
    sourceUrl: 'https://atom.bio/sodicacrew',
    mediaType: 1,
    showAdAttribution: true,
    renderLargerThumbnail: false
    }}}, { quoted: fkontak })
//await m.reply(`${sn}`)	
}}
handler.command = ['verify', 'verificar', 'register', 'registrar', 'reg', 'nombre', 'name', 'nombre2', 'name2', 'edad', 'age', 'edad2', 'age2', 'genero', 'género', 'gender', 'orientacion', 'pasatiempo', 'hobby', 'identity', 'finalizar', 'pas2', 'pas3', 'pas4', 'pas5']  ///^(verify|verificar|reg(ister)?)$/i
export default handler


function pickRandom(list) { 
return list[Math.floor(Math.random() * list.length)]} 
  
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
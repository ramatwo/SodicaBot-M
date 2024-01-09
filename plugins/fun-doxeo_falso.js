import { performance } from 'perf_hooks'

let cooldowns = {}

var handler = async (m, { conn, text }) => {
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
    let user = global.db.data.users[m.sender]

    // Definir el tiempo de cooldown en milisegundos (10 minutos)
    let cooldownTime = 10 * 60 * 1000;

    // Verificar si el comando tiene un cooldown activo
    if (cooldowns[m.command]) {
        let elapsedTime = (Date.now() - cooldowns[m.command]) / 1000; // Convertir a segundos
        if (elapsedTime < cooldownTime) {
            // El comando está en cooldown, no ejecutar y salir
            return await conn.reply(m.chat, `🙌 ESPERA UNOS MINUTOS NO HAGA SPAM`, fkontak, m)
        }
    }

    // Establecer el tiempo de ejecución actual para el comando
    cooldowns[m.command] = Date.now();

    if (!text) throw `${lenguajeGB['smsAvisoMG']()} 𝙄𝙉𝙂𝙍𝙀𝙎𝘼 𝙀𝙇 @tag 𝘿𝙀 𝘼𝙇𝙂𝙐𝙉 𝙐𝙎𝙐𝘼𝙍𝙄𝙊*`
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw `${lenguajeGB['smsAvisoMG']()} 𝙄𝙉𝙂𝙍𝙀𝙎𝘼 𝙀𝙇 @tag 𝘿𝙀 𝘼𝙇𝙂𝙐𝙉 𝙐𝙎𝙐𝘼𝙍𝙄𝙊*`

    let start = `*😱 ¡¡Empezando Doxxeo!! 😱*`
    let ala = `😨`
    let boost = `*${pickRandom(['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'])}%*`
    let boost5 = `*${pickRandom(['81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100'])}%*`

    const { key } = await conn.sendMessage(m.chat, {text: `${start}`}, {quoted: m})


    await delay(1000 * 1)
    await conn.sendMessage(m.chat, {text: `${boost5}`, edit: key})

    let old = performance.now()
    let neww = performance.now()
    let speed = `${neww - old}`
    let doxeo = `*_✅ Persona doxxeada con éxito_*\n\n*RESULTADOS:*\n\n*Nombre:* ${text}\n*Ip:* 92.28.211.234\n*N:* 43 7462\n*W:* 12.4893\n*SS NUMBER:* 6979191519182016\n*IPV6:* fe80::5dcd::ef69::fb22::d9888%12 \n*UPNP:* Enabled\n*DMZ:* 10.112.42.15\n*MAC:* 5A:78:3E:7E:00\n*ISP:* Ucom unversal \n*DNS:* 8.8.8.8\n*ALT DNS:* 1.1.1.8.1\n*DNS SUFFIX:* Dlink\n*WAN:* 100.23.10.15\n*WAN TYPE:* private nat\n*GATEWAY:* 192.168.0.1\n*SUBNET MASK:* 255.255.0.255\n*UDP OPEN PORTS:* 8080.80\n*TCP OPEN PORTS:* 443\n*ROUTER VENDEDOR:* ERICCSON\n*DEVICE VENDEDOR:* WIN32-X\n*CONNECTION TYPE:* TPLINK COMPANY\n*ICMPHOPS:* 192.168.0.1 192.168.1.1 100.73.43.4\nhost-132.12.32.167.ucom.com\nhost-132.12.111.ucom.com\n36.134.67.189 216.239.78.11\nSof02s32inf14.1e100.net\n*HTTP:* 192.168.3.1:433-->92.28.211.234:80\n*Http:* 192.168.625-->92.28.211.455:80\n*Http:* 192.168.817-->92.28.211.8:971\n*Upd:* 192.168452-->92.28.211:7265288\n*Tcp:* 192.168.682-->92.28.211:62227.7\n*Tcp:* 192.168.725-->92.28.211:67wu2\n*Tcp:* 192.168.629-->92.28.211.167:8615\n*EXTERNAL MAC:* 6U:77:89:ER:O4\n*MODEM JUMPS:* 64`
    m.reply(doxeo, null, { mentions: conn.parseMention(doxeo) })

    user.prue = new Date * 1
}

handler.help = ['doxear']
handler.tags = ['juegos']
handler.command = /^Doxxeo|doxxeo|doxxear|Doxxear|doxeo|doxear|doxxeame|doxeame/i
handler.group = true
handler.register = true
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
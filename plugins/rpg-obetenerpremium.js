let handler = async (m, { conn, text, usedPrefix, command, args }) => {
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
    let toUser = `${m.sender.split("@")[0]}`
    let aa = toUser + '@s.whatsapp.net'	
    let template = (args[0] || '').toLowerCase() 
    let solonumeros = `*Ingrese solo números.*\n*Ejemplo: ${usedPrefix + command} 1*`




    if (/comprar|prem1/i.test(command)) {
    var tiempoPremium = 1440 * text //tiempo total 
    var tiempoDecretado = 1440 * 1 //tiempo decretado 
    const gata = 100000
    let user = global.db.data.users[m.sender]
    
    if (!text) return conn.reply(m.chat, `Ingresá el tiempo premium que querés comprar\n\n*➭ 🎟️ 1 = ${tiempoDecretado} MINUTOS (un dia)*\n*➭ Por ${gata} ${rpgshop.emoticon('limit')}s*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
    if (isNaN(text)) return conn.reply(m.chat, solonumeros, fkontak, m)
    if (user.limit < gata) return conn.reply(m.chat, `No tenés suficientes *${rpgshop.emoticon('limit')}s* para comprar VIP por un día. Comprá ${rpgshopp.emoticon('limit')} usando *${usedPrefix}buy limit cantidad*`, fkontak, m)
    user.limit -= gata * text
    
    var tiempo = 300000 * text //180000 3min | 300000 5 min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += tiempo
    else user.premiumTime = now + tiempo
    user.premium = true
    //let imgpre = 'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg' 
    
    await conn.reply(m.chat, `*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ Adquiriste un ticket VIP*
*┃*
*┃👤 Usuario » ${user.name}*
*┃💰 Pago »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 Saldo anterior » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 Saldo actual » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 Tiempo VIP adquirido » ${tiempoPremium} min (un día)*
*┃📉 Restante » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*\nPara consultar tus beneficios usá ${usedPrefix}beneficiosvip`, fkontak, { mentions: [aa,] })}
    

    if (/prem2/i.test(command)) {
    var tiempoPremium = 10080 * text //tiempo total 
    var tiempoDecretado = 10080 * 1 //tiempo decretado 
    const gata = 50000
    let user = global.db.data.users[m.sender]
        
    if (!text) return conn.reply(m.chat, `Ingresá el tiempo premium que querés comprar\n\n*➭ 🎟️ 1 = ${tiempoDecretado} MINUTOS (una semana)*\n*➭ ${gata} ${rpgshop.emoticon('joincount')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
    if (isNaN(text)) return conn.reply(m.chat, solonumeros, fkontak, m)
    if (user.joincount < gata) return conn.reply(m.chat, `No tenés suficientes *${rpgshop.emoticon('joincount')}s* para comprar VIP por una semana. Compre ${rpgshopp.emoticon('joincount')} usando *${usedPrefix}buy*`, fkontak, m)
    user.joincount -= gata * text
        
    var tiempo = 25200000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += tiempo
    else user.premiumTime = now + tiempo
    user.premium = true
    
    await conn.reply(m.chat,
`*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ Adquiriste un ticket VIP*
*┃*
*┃👤 Usuario » ${user.name}*
*┃💰 Pago »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 Saldo anterior » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 Saldo actual » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 Tiempo VIP adquirido » ${tiempoPremium} min (una semana)*
*┃📉 Restante » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*\nPara consultar tus beneficios usá ${usedPrefix}beneficiosvip`, fkontak, { mentions: [aa,] })}
        
    //┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

    if (/prem3/i.test(command)) {
    var tiempoPremium = 43200 * text //tiempo total 
    var tiempoDecretado = 43200 * 1 //tiempo decretado 
    const gata = 80000
    let user = global.db.data.users[m.sender]
        
    if (!text) return conn.reply(m.chat, `Ingrese un numero\n\n*➭ 🎟️ 1 = ${tiempoDecretado} MINUTOS (1 mes)*\n*➭ ${gata} ${rpgshop.emoticon('gold')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
    if (isNaN(text)) return conn.reply(m.chat, solonumeros, fkontak, m)
    if (user.gold < gata) return conn.reply(m.chat, `No tenés suficiente *${rpgshop.emoticon('gold')}* para comprar VIP por una semana. Compre ${rpgshopp.emoticon('gold')} usando *${usedPrefix}buy*s`, fkontak, m)
    user.gold -= gata * text
        
    var tiempo = 259200000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += tiempo
    else user.premiumTime = now + tiempo
    user.premium = true
    
    await conn.reply(m.chat,
 `*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ Adquiriste un ticket VIP*
*┃*
*┃👤 Usuario » ${user.name}*
*┃💰 Pago »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 Saldo anterior » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 Saldo actual » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 Tiempo VIP adquirido » ${tiempoPremium} min (un mes)*
*┃📉 Restante » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*\nPara consultar tus beneficios usá ${usedPrefix}beneficiosvip`, fkontak, { mentions: [aa,] })}
        
    //┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
        
    if (command) {
    switch (template) {		
    case 'premium':
    case 'vip':
    case 'prem':
    case 'pass':
    case 'pase':
    let mensaje = `                        *🎟️    TIENDA VIP    🎟️*\n\n📌 Comprá un tipo de ticket para convertirte en usuario premium\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n💎 VIP - Clase 1\n➭${usedPrefix}prem1 1\n*➭* Pase básico\n*➭* 100.000 ${rpgshop.emoticon('limit')}s ➟ 1 día \n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n💳 VIP - Clase 2\n*➭*${usedPrefix}prem2 1\n*➭* Pase Premium\n*➭* 50.000 💳 Tokens ➟ 1 semana\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n👑 VIP - Clase 3\n*➭*${usedPrefix}prem3 1\n*➭* Pase Empresario\n*➭* 80.000 ${rpgshop.emoticon('gold')} ➟ 1 mes\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n👑 VIP - Clase 4\n*➭* *Pase Permanente*\n*➭* 900 ARS (pesos argentinos)\n*➭* 3 USD si es transf. internacional\n*➭* Contactar con mi propietario\n para completar la transacción\n wa.me/5491125172076`
    await conn.reply(m.chat, mensaje, fkontak, { mentions: [aa,] })

    break	
            
    }}}
    handler.help = ['addprem [@user] <days>']
    handler.tags = ['owner']
    handler.command = /^(comprar|prem1|prem2|prem3|premium|vip|prem|pass|pase)$/i

    export default handler
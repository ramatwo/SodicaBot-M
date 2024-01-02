import { canLevelUp, xpRange } from '../lib/levelling.js';

let cooldown = 180000; // 3 minutos en milisegundos
let lastUsed = {}; // Almacenar el tiempo de la última ejecución por chat

let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
    let id = m.chat;

    if (id in lastUsed) {
        const timeLeft = (lastUsed[id] - Date.now()) / 1000;
        if (timeLeft > 0) {
            throw `Espera ${timeLeft.toFixed(1)} segundos antes de volver a usar el comando`;
        }
    }

    const { levelling } = '../lib/levelling.js';

    let { exp, limit, level, role } = global.db.data.users[m.sender];
    let { min, xp, max } = xpRange(level, global.multiplier);

    let d = new Date();
    let locale = 'es';
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5];
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric' 
    });
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(d);
    let time = d.toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
    let _uptime = process.uptime() * 1000;
    let _muptime;
    if (process.send) {
        process.send('uptime');
        _muptime = await new Promise(resolve => {
            process.once('message', resolve);
            setTimeout(resolve, 1000);
        }) * 1000;
    }
    let { money } = global.db.data.users[m.sender];
    let muptime = clockString(_muptime);
    let uptime = clockString(_uptime);
    let totalreg = Object.keys(global.db.data.users).length;
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
    let replace = {
        '%': '%',
        p: _p,
        uptime,
        muptime,
        me: conn.getName(conn.user.jid),
        exp: exp - min,
        maxexp: xp,
        totalexp: exp,
        xp4levelup: max - exp,
        level,
        limit,
        weton,
        week,
        date,
        dateIslamic,
        time,
        totalreg,
        rtotalreg,
        role,
        readmore: readMore
    };
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join('|')})`, 'g'), (_, name) => '' + replace[name]);
    
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let mentionedJid = [who];
    let username = conn.getName(who);

    let name = conn.getName(m.sender);
    let user = global.db.data.users[m.sender];
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier);
        throw `
╭━━━[ *NIVEL* ]━━━━⬣
┃ *USUARIO*
┃ ${name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *NIVEL:* *${user.level}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *RANGO:* ${user.role}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *EXP:* *${user.exp - min}/${xp}*
╰━━━〔 *𓃠 ${vs}* 〕━━━━━⬣

*Te falta ${max - user.exp} de XP para subir de nivel*
`.trim();
    }
            
    let before = user.level * 1;
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;
    if (before !== user.level) {
        let teks = `Bien hecho! ${conn.getName(m.sender)} Nivel: ${user.level}`;
        let str = `
╭━━━[ *𝙉𝙄𝙑𝙀𝙇* ]━━━━⬣
┃ *NIVEL ANTERIOR:* *${before}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *NIVEL ACTUAL:* *${user.level}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *RANGO* ${user.role}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *FECHA:* *${new Date().toLocaleString('id-ID')}*
╰━━━〔 *𓃠 ${vs}* 〕━━━━━⬣

*_Cuanto más interactúes con SodicaBot, mayor será tu nivel _*
*_Actualiza tú rango con el comando ${usedPrefix}rol _*
`.trim();
        try {
            conn.sendMessage(m.chat, { image: {}, caption: str, mentions: conn.parseMention(str) }, { quoted: m, ephemeralExpiration: 24 * 60 * 100, disappearingMessagesInChat: 24 * 60 * 100 });
        } catch (e) {
            m.reply(str);
        }
    }

    // Actualizar el tiempo de la última ejecución
    lastUsed[id] = Date.now() + 3000;
}

handler.help = ['levelup'];
handler.tags = ['xp'];

handler.command = ['nivel', 'lvl', 'levelup', 'level'];
handler.exp = 0;
handler.register = true
export default handler;

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}
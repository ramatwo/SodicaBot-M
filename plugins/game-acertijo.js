import fs from 'fs';
let timeoutt = 300000;
let timeout = 30000; // 5 minutos en milisegundos
let poin = 10000;
let cooldowns = {}; // Almacenar el tiempo de espera por chat

let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat;

    if (id in cooldowns) {
        const timeLeft = (cooldowns[id] - Date.now()) / 1000;
        if (timeLeft > 0) {
            conn.reply(m.chat, `Espera ${timeLeft.toFixed(1)} segundos antes de volver a usar el comando`, m);
            return;
        }
    }

    conn.tekateki = conn.tekateki ? conn.tekateki : {};
    if (id in conn.tekateki) {
        conn.reply(m.chat, 'Todavía hay acertijos sin responder en este chat', conn.tekateki[id][0]);
        throw false;
    }

    let tekateki = JSON.parse(fs.readFileSync(`./src/game/acertijo.json`));
    let json = tekateki[Math.floor(Math.random() * tekateki.length)];
    let _clue = json.response;
    let clue = _clue.replace(/[A-Za-z]/g, '_');
    let caption = `
ⷮ *${json.question}*

*• Tiempo:* 60 segundos
*• Bono:* +${poin} Exp
`.trim();

    conn.tekateki[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `Se acabó el tiempo!`, conn.tekateki[id][0]);
            delete conn.tekateki[id];
        }, timeout)
    ];

    // Establecer el tiempo de espera
    cooldowns[id] = Date.now() + timeoutt;
}

handler.help = ['acertijo'];
handler.tags = ['game'];
handler.command = /^(acertijo|acert|adivinanza|tekateki)$/i;
handler.register = true;
export default handler;

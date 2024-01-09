import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'fs';
import { sticker } from './lib/sticker.js';  // Importar la función sticker desde el archivo sticker.js

const __dirname = dirname(fileURLToPath(import.meta.url));

let ro = 3000;
let handler = async (m, { conn }) => {
    let time = global.db.data.users[m.sender].lastrob + 7200000;
    if (new Date() - global.db.data.users[m.sender].lastrob < 7200000) throw `*⛃➭⏱️ ∫ Esperá ${msToTime(time - new Date())}*`;

    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    else who = m.chat;

    if (!who) throw `*⛃➭⛔ ∫ Etiquetá a alguien para robar.*`;
    if (!(who in global.db.data.users)) throw `*⛃➭⛔ ∫ Este usuario no está en la base de datos.*`;

    let users = global.db.data.users[who];
    let rob = Math.floor(Math.random() * ro * 1.5);

    if (users.exp < rob) return m.reply(`*⛃➭⛔ ∫ @${who.split`@`[0]} tiene menos de ${ro} xp*`, null, { mentions: [who] });

    global.db.data.users[m.sender].exp += rob;
    global.db.data.users[who].exp -= rob;
    global.db.data.users[m.sender].limit += rob;
    global.db.data.users[who].limit -= rob;
    global.db.data.users[m.sender].money += rob;
    global.db.data.users[who].money -= rob;
    global.db.data.users[m.sender].lastrob = new Date();

    // Generar el mensaje de robo con éxito
    const successMessage = `*‣ Le afanaste ${rob} xp a @${who.split`@`[0]}* 😈😈`;

    // Ruta de la imagen de sticker
    const stickerPath = join(__dirname, 'media', 'robbed.webp');

    // Crear y enviar el sticker utilizando sticker.js
    const createdSticker = await sticker(fs.readFileSync(stickerPath));

    // Enviar el sticker sin citar el mensaje original
    m.reply(`*‣ Le afanaste ${rob} Xp a @${who.split`@`[0]}*`, null, { mentions: [who] })
    m.reply(createdSticker, null, { asSticker: true, quoted: m.quoted });
};

handler.help = ['rob'];
handler.tags = ['econ'];
handler.command = ['robar', 'rob', 'afanar'];
export default handler;
handler.register = true;
handler.group = true;

function msToTime(duration) {
    var seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    return hours + " Horas " + minutes + " Minutos";
}

/*const ms = require('ms'); // Asegúrate de instalar esta biblioteca con npm install ms

let handler = async (m, { isPrems, conn }) => {
  let cooldown = 36000000; // 10 Horas
  let timePassed = new Date() - new Date(global.db.data.users[m.sender].lastcofre);

  if (timePassed < cooldown) {
    throw `Volvé en *${ms(cooldown - timePassed)}*`;
  }

  let dia = Math.floor(Math.random() * 60);
  let tok = Math.floor(Math.random() * 20);
  let gata = Math.floor(Math.random() * 10000);
  let expp = Math.floor(Math.random() * 40000);

  global.db.data.users[m.sender].limit += dia;
  global.db.data.users[m.sender].money += gata;
  global.db.data.users[m.sender].joincount += tok;
  global.db.data.users[m.sender].exp += expp;

  let texto = `
  ╭━━━━━━━━━━━━⬣
  ┃✨ Conseguiste un cofre con:
  ┃ 💎 *${dia} Diamantes* 💎
  ┃ 🪙 *${gata} Moneditas* 🪙
  ┃ ⚡ *${expp} Exp* ⚡
  ╰━━〔 𓃠 *${vs} x2 recompensas* 〕━━⬣`;

  conn.reply(m.chat, texto, m);
  global.db.data.users[m.sender].lastcofre = new Date();
};



handler.help = ['daily'];
handler.tags = ['xp'];
handler.command = ['coffer', 'cofre', 'abrircofre', 'cofreabrir'];
handler.level = 5;
export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + " Horas " + minutes + " Minutos";
}

handler.register = true;*/

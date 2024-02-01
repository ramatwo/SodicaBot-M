let lastUsed = 0; // Variable global para registrar el tiempo del último uso

let toM = a => '@' + a.split('@')[0];

function handler(m, { groupMetadata }) {
    if (new Date() - lastUsed < 30000) { // Verificar si ha pasado menos de 30 segundos desde el último uso
        let remainingTime = (30000 - (new Date() - lastUsed)) / 1000;
        return m.reply(`Esperá ${remainingTime.toFixed(1)} segundos.`);
    }

    lastUsed = new Date(); // Actualizar el tiempo del último uso

    let ps = groupMetadata.participants.map(v => v.id);
    let a = ps.getRandom();
    let b;
    do b = ps.getRandom();
    while (b === a);
    
    m.reply(`*${toM(a)}, 𝙔𝙖 𝙚𝙨 𝙝𝙤𝙧𝙖 𝙙𝙚 𝙦𝙪𝙚 𝙩𝙚 💍 𝘾𝙖𝙨𝙚𝙨 𝙘𝙤𝙣 ${toM(b)}, 𝙇𝙞𝙣𝙙𝙖 𝙋𝙖𝙧𝙚𝙟𝙖 😉💓*`, null, {
        mentions: [a, b]
    });
}

handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['formarpareja', 'formarparejas'];
handler.group = true;
handler.register = true;
export default handler;


import LinkifyIt from 'linkify-it';

const linkify = new LinkifyIt();
linkify.add('www.', '');

export async function before(m, { isAdmin, isBotAdmin, text }) {
    if (m.isBaileys && m.fromMe) return !0;
    if (!m.isGroup) return !1;

    let chat = global.db.data.chats[m.chat];
    let bot = global.db.data.settings[this.user.jid] || {};

    const matches = linkify.match(m.text);

    if (chat.antiLink2 && matches && !isAdmin) {
        if (isBotAdmin) {
            // Agrega aquí cualquier verificación adicional si es necesario
        }

        await m.reply(`*🛡️➭⛔ ∫ Enlace detectado. Removiendo vagabundo:* `);

        if (!isBotAdmin) return m.reply(`*❌ ∫ Error* Debo ser administrador para que funcione el antilink`);

        if (isBotAdmin && bot.restrict) {
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
        } else if (!bot.restrict) {
            return m.reply(`*❌ ∫ Error* ${lenguajeGB['smsSoloOwner']()}`);
        }
    }

    return !0;
}

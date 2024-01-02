

let handler = async function (m, { conn, isAdmin, isBotAdmin }) {
    if (!m.isGroup) return;

    const blockedPrefixes = [
        '6', '90', '92', '93', '94', '7', '49', '2', '91', '994', '48', 
        '1', '44', '33', '81', '82', '86', '81', '84', '86', '852', 
       
    ];

    let chat = global.db.data.chats[m.chat];
    if (isBotAdmin && chat.antifake) {
        let texto = `*🛡️➭⛔ ∫ El número @${m.sender.split`@`[0]} podría ser un pedófilo o un spammer. Fue eliminado por seguridad.*`;

        const senderPrefix = blockedPrefixes.find(prefix => m.sender.startsWith(prefix));

        if (senderPrefix) {
            global.db.data.users[m.sender].block = true;
            await conn.reply(m.chat, texto, m);
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
        }
    }
};

export default handler;

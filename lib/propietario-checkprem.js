const handler = async (m, { conn }) => {	
    let who = m.isGroup ? m.mentionedJid[0] || m.sender : m.sender;
    let name = conn.getName(who);
    let user = global.db.data.users[who];
    let premium = user && user.premium ? '✅' : '❌';
    
    await conn.reply(m.chat, `🎟️ *Usuario VIP ⇢* ${premium}`, null, { contextInfo: { mentionedJid: [who] } });
}

handler.command = /^checkprem$/i;

export default handler

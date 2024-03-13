let handler = async (m, { isAdmin, isBotAdmin, groupMetadata }) => {
    let chat = global.db.data.chats[groupMetadata.id];
    
    let modoadmin = chat.modoadmin ? '✅' : '❌ ACTIVAR CON #on modoadmin';
    let botAdmin = isBotAdmin ? '✅' : '❌ HACER ADMINISTRADOR DE INMEDIATO.';
    let minMembers = groupMetadata.participants.length > 80 ? '✅' : '❌';
    
    let text = `*Este grupo cumple con los requisitos?:*
- ModoAdmin: ${modoadmin}
- Bot admin: ${botAdmin}
- Miembros mínimos: ${minMembers}`;
    
    m.reply(text);
}

handler.command = /^chkreq$/i;
handler.group = true;
handler.admin = true;

export default handler;

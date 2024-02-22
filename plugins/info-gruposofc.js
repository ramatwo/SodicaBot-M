let media = "./media/menus/velocidad.bat"
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `*✅ ÚNICA COMUNIDAD OFICIAL*
✨${nn}`
await conn.sendFile(m.chat, media, 'C O M U N I D A D', str, fkontak)}

handler.command = /^comunidad|grupos|gruposSodicaBot|SodicaBotgrupos|gruposdeSodicaBot|groupofc|grupos$/i
handler.exp = 33

export default handler
handler.register = true
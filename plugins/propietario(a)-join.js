let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw `⛔ ∫ Ingrese un enlace.\n> Ejemplo: #unete ${nn}`

if ( isMods || isOwner || m.fromMe) {
m.reply(`*Unido correctamente✅*`)
await delay(5 * 2000)
let res = await conn.groupAcceptInvite(code)
} else {
const data = global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)

await delay(5 * 500)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`*📌 Nueva soliocitud*\n\n*👤 Usuario:*` + ' wa.me/' + m.sender.split('@')[0] + '\n*🔗 Grupo:* ' + link, jid)

m.reply(`*✅ Su solicitud está siendo procesada*\n\n⚠️ *Su grupo va a ser evaluado para revisar si cumple con los requisitos*\n\n📌 *El grupo debe cumplir con los siguientes requisitos, de lo contrario su solicitud va a ser rechazada:*\n> ⚔️ El Bot debe ser administrador en todo momento.\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n> ⚔️ El Bot debe estar en modoadmin (requisito temporal)\n> {se encience con #on modoadmin una vez sea aceptado.}\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n> ⚔️ Su grupo debe ser público (+80 personas) (requisito temporal)\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n> ⚔️ No debe haber otros bots.\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n> ⚔️ Se deben respetar 3 segundos entre comando y comando.\n> {requisito temporal}\n\n‼️ *Procure que sus administradores estén al tanto de los requisitos, porque si no se respetan, todos los administradores serán baneados permanentemente del bot.*\n\n*🔗 Si tiene dudas o consuiltas, está invitado a unirse a la comunidad para contactar con los administradores del bot. use #comunidad*`)}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['owner']
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|addbot|entrar$/i 
handler.register = true
handler.rowner = false
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

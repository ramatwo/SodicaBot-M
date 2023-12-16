import { performance } from 'perf_hooks'

let handler = async (m, { conn }) => {

 let start = `*🔄➭⛃ ∫ Acelerando, esperá...*`
 
const { key } = await conn.sendMessage(m.chat, {text: start}, {quoted: m});

   let old = performance.now()
   let neww = performance.now()
   let speed = `${neww - old}`
   let finish = `*🚀➭✅ ∫ Bot acelerado correctamente.*`
await conn.sendMessage(m.chat, {text: finish, edit: key});
//conn.reply(m.chat, finish, m)
}
handler.help = ['boost', 'refresh']
handler.tags = ['info']
handler.command = /^boost|refresh/i
handler.owner = true
handler.fail = null
export default handler 
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
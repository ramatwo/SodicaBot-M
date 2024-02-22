import fetch from 'node-fetch'
import fs from 'fs'

// Objeto para almacenar los tiempos de cooldown por grupo
const cooldowns = {}

let handler = async (m, { conn,command, args, participants,usedPrefix,users, groupMetadata }) => {
  try{


let topwait = "💾 Revisando la base de datos. Espera un momento..."

/* // Verificar si hay un cooldown para este grupo
  const groupId = m.chat
  const cooldown = cooldowns[groupId] || 0
  const remainingCooldown = cooldown - Date.now()

  // Si aún queda tiempo de cooldown, enviar un mensaje informando al usuario
  if (remainingCooldown > 0) {
    return await m.reply(`Debes esperar ${Math.ceil(remainingCooldown / (1000 * 60 * 60))} horas antes de usar este comando nuevamente.`)
  }

  // Establecer el tiempo de cooldown para este grupo
  cooldowns[groupId] = Date.now() + (3 * 60 * 60 * 1000) // 3 horas en milisegundos
*/




if (command == 'top') {
  let topdeque = `*⁉️ ∫ Top de qué?*\n\n*➭* Top rango\n${usedPrefix}toprango\n*➭* Top nivel\n${usedPrefix}toplevel\n*➭* Top monedas\n${usedPrefix}topmoney\n*➭* Top diamantes\n${usedPrefix}toplimit\n*➭* Top oro\n${usedPrefix}topgold`
  m.reply(topdeque, null, { mentions: conn.parseMention(topdeque) })}

  if (command == 'toprango') {
    m.reply(topwait)
    let users = Object.entries(global.db.data.users).map(([key, value]) => { 
      return {...value, jid: key}
    })
    
    let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
   
    let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedExp.length)
    let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  
    let usersLevel = sortedLevel.map(enumGetKey)
  
    let toprango = `💠 *TOP ${len} RANGO 💪* 
Tú : *#${usersLevel.indexOf(m.sender) + 1}* de *#${usersLevel.length}*
      
${sortedLevel.slice(0, len).map(({ jid, role, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ${role}`).join`\n`}`
    m.reply(toprango, null, { mentions: conn.parseMention(toprango) })
  }
  







  }catch (e) {
    await m.reply(m.chat,'sexo', m)   

    console.log(`PORNO`)
    console.log(e)	
    }








  

  /*let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
  let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  let sortedRole = users.map(toNumber('role')).sort(sort('role'))
  let sortedMoney = users.map(toNumber('money')).sort(sort('money'))
  let sortedJoincount = users.map(toNumber('joincount')).sort(sort('joincount'))
  let sortedPremium = users.map(toNumber('premium')).sort(sort('premium'))

  let usersExp = sortedExp.map(enumGetKey)
  let usersLim = sortedLim.map(enumGetKey)
  let usersLevel = sortedLevel.map(enumGetKey)
  let usersRole = sortedRole.map(enumGetKey)
  let usersMoney = sortedMoney.map(enumGetKey)
  let usersJoincount = sortedJoincount.map(enumGetKey)
  let usersPremium = sortedPremium.map(enumGetKey)*/

  
  /*let text = `
       🏆 *TABLA DE CLASIFICACIÓN*

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 *TOP ${len} NIVEL 🔅* 
Tú : *#${usersLevel.indexOf(m.sender) + 1}* de *#${usersLevel.length}*

${sortedLevel.slice(0, len).map(({ jid, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${level} 🔅*`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 *TOP ${len} RANGO 💪* 
Tú : *#${usersLevel.indexOf(m.sender) + 1}* de *#${usersLevel.length}*

${sortedLevel.slice(0, len).map(({ jid, role, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ${role}`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈


`.trim()

  await m.reply(text, null, { mentions: conn.parseMention(text) })*/

}

handler.help = ['top']
handler.tags = ['xp']
handler.command = ['leaderboard', 'lb', 'top', 'toprango'] 
handler.fail = null
handler.exp = 0
handler.register = true
handler.rowner = true

export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}

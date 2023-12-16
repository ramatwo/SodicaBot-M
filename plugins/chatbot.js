// by https://github.com/elrebelde21/The-LoliBot-MD
 
let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)

if (/^callate$/i.test(m.text) ) { //sem prefixo
    let teks = `
${pickRandom([`callame`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^que$/i.test(m.text) ) { //sem prefixo
    let teks = `
${pickRandom([`sito`, `so`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^rra$/i.test(m.text) ) { //sem prefixo
    let teks = `
${pickRandom([`eres.`, `sos.`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^13|trece$/i.test(m.text) ) { //sem prefixo
    let teks = `
${pickRandom([`agarrala que crece jsdkajsak`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

/*if (/^Mande porno|porno|paja$/i.test(m.text) ) { //sem prefixo
    let teks = `
${pickRandom([`no puedo esta contra las política del grupo.😸`, `_uff miren un pajero_`, `_pagame y paso mi pack😏🥵_`, `_que_`, `_que quiere pija dice 🤣_`, `_pasa el pack de tu hermana😏_`, `_mire un gilipolla_`, `_siuuu sexo sexo sexo😈_`, '_callate putito_'])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}*/



 
return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
